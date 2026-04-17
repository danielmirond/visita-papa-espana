'use client'

import { useEffect, useRef } from 'react'
import type { Map as LeafletMap, Marker, Polyline } from 'leaflet'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'

/**
 * Mapa interactivo del recorrido papal usando Leaflet + OpenStreetMap.
 *
 * - Sin API keys, sin coste, sin tracking de Google
 * - Pins dorados en las 4 ciudades con popups
 * - Líneas discontinuas entre ciudades mostrando el recorrido
 * - Zoom automático a los límites de los pins
 * - Tiles de CartoDB Voyager (suave, compatible con el estilo papal)
 */

interface Props {
  locale: Locale
  height?: string
  className?: string
}

// CSS inline para evitar importar el .css de leaflet en global y reducir bundle
const LEAFLET_CSS = `
.papal-map-container { height: 100%; width: 100%; background: #FFF8E7; }
.papal-map-container .leaflet-control-attribution { font-size: 10px; background: rgba(255,255,255,0.9); }
.papal-map-container .leaflet-control-zoom a {
  background: #FEFEFE; color: #1B2A4A; border: 1px solid rgba(212,175,55,0.3);
}
.papal-map-container .leaflet-control-zoom a:hover { background: #FFF8E7; }
.papal-map-container .leaflet-popup-content-wrapper {
  background: #FEFEFE; border: 1px solid rgba(212,175,55,0.3);
  border-radius: 12px; box-shadow: 0 4px 12px rgba(27,42,74,0.15);
}
.papal-map-container .leaflet-popup-tip { background: #FEFEFE; border: 1px solid rgba(212,175,55,0.3); }
.papal-map-container .leaflet-popup-content { margin: 14px 16px; font-family: var(--font-inter); }
.papal-map-container .papal-popup-title {
  font-family: var(--font-playfair); font-weight: 700; font-size: 16px;
  color: #1B2A4A; margin-bottom: 4px;
}
.papal-map-container .papal-popup-dates {
  font-size: 12px; color: rgba(27,42,74,0.6); margin-bottom: 8px;
}
.papal-map-container .papal-popup-link {
  display: inline-block; color: #B8960F; font-size: 12px; font-weight: 600;
  text-decoration: none;
}
.papal-map-container .papal-popup-link:hover { text-decoration: underline; }
.papal-map-container .papal-pin {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 50%;
  background: linear-gradient(135deg, #D4AF37, #B8960F);
  color: #1B2A4A; font-weight: 700; font-size: 13px;
  border: 3px solid #FEFEFE;
  box-shadow: 0 2px 6px rgba(27,42,74,0.3);
}
`

export default function PapalRouteMap({ locale, height = '500px', className = '' }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const leafletMapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    // Evitar doble init (Strict Mode / HMR)
    if (!mapRef.current || leafletMapRef.current) return

    let map: LeafletMap
    const markers: Marker[] = []
    let polyline: Polyline | null = null

    const init = async () => {
      const L = await import('leaflet')
      // Inyectar el CSS mínimo de Leaflet como <link> externo (una vez)
      if (!document.querySelector('link[data-leaflet]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        link.setAttribute('data-leaflet', 'true')
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
        link.crossOrigin = ''
        document.head.appendChild(link)
      }

      const cities = getCitiesByLocale(locale)
      const t = getPagesDict(locale)

      // Centro aproximado de España (incluyendo Canarias)
      map = L.map(mapRef.current!, {
        scrollWheelZoom: false, // solo con ctrl+scroll (mejor UX en páginas scrollables)
        zoomControl: true,
        attributionControl: true,
      }).setView([36.5, -7.5], 5)

      // Tiles: CartoDB Voyager (suave, no satélite, compatible con el estilo del sitio)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // Pins
      const bounds: [number, number][] = []
      cities.forEach((city, i) => {
        const lat = city.coordinates.lat
        const lng = city.coordinates.lng
        bounds.push([lat, lng])

        const icon = L.divIcon({
          className: '',
          html: `<div class="papal-pin" aria-label="${city.name}">${i + 1}</div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16],
        })

        const dates =
          city.papalDates.start === city.papalDates.end
            ? new Date(city.papalDates.start + 'T12:00:00').toLocaleDateString(locale, {
                day: 'numeric',
                month: 'long',
              })
            : `${new Date(city.papalDates.start + 'T12:00:00').toLocaleDateString(locale, {
                day: 'numeric',
                month: 'short',
              })} – ${new Date(city.papalDates.end + 'T12:00:00').toLocaleDateString(locale, {
                day: 'numeric',
                month: 'short',
              })}`

        const href = localizePath(`/ciudades/${city.slug}`, locale)
        const viewLabel = t.ciudades.viewFullInfo

        const popupHtml = `
          <div>
            <div class="papal-popup-title">${city.name}</div>
            <div class="papal-popup-dates">${dates}</div>
            <a class="papal-popup-link" href="${href}">${viewLabel} →</a>
          </div>
        `

        const marker = L.marker([lat, lng], { icon, title: city.name })
          .addTo(map)
          .bindPopup(popupHtml, { maxWidth: 260 })
        markers.push(marker)
      })

      // Ajustar límites para mostrar península + Canarias
      map.fitBounds(bounds, { padding: [40, 40] })

      // Línea discontinua del recorrido (gold semitransparente)
      polyline = L.polyline(bounds, {
        color: '#B8960F',
        weight: 2,
        opacity: 0.6,
        dashArray: '6, 8',
      }).addTo(map)

      leafletMapRef.current = map
    }

    init()

    return () => {
      markers.forEach((m) => m.remove())
      polyline?.remove()
      map?.remove()
      leafletMapRef.current = null
    }
  }, [locale])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LEAFLET_CSS }} />
      <div
        ref={mapRef}
        className={`papal-map-container overflow-hidden rounded-xl border border-papal-gold/20 ${className}`}
        style={{ height }}
        aria-label="Mapa del recorrido papal"
        role="region"
      />
    </>
  )
}
