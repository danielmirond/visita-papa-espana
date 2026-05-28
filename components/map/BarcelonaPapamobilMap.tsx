'use client'

import { useEffect, useRef } from 'react'
import type { Map as LeafletMap, Marker, Polyline } from 'leaflet'
import { type Locale } from '@/data/i18n/types'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'

/**
 * Mapa interactivo del recorrido del papamóvil en Barcelona.
 *
 * Muestra:
 * - Ruta entre calles Rosselló y Sardenya (~1 km)
 * - Puntos de inicio y fin
 * - Basílica de la Sagrada Familia como destino
 * - Calles afectadas por cierre de tráfico
 * - Zoom detallado en el barrio Eixample
 */

interface Props {
  locale: Locale
  height?: string
  className?: string
}

const LEAFLET_CSS = `
.papamobil-map-container { height: 100%; width: 100%; background: #FFF8E7; }
.papamobil-map-container .leaflet-control-attribution { font-size: 10px; background: rgba(255,255,255,0.9); }
.papamobil-map-container .leaflet-control-zoom a {
  background: #FEFEFE; color: #1B2A4A; border: 1px solid rgba(212,175,55,0.3);
}
.papamobil-map-container .leaflet-control-zoom a:hover { background: #FFF8E7; }
.papamobil-map-container .leaflet-popup-content-wrapper {
  background: #FEFEFE; border: 2px solid #D4AF37;
  border-radius: 12px; box-shadow: 0 4px 12px rgba(212,175,55,0.3);
}
.papamobil-map-container .leaflet-popup-tip { background: #FEFEFE; border: 2px solid #D4AF37; }
.papamobil-map-container .leaflet-popup-content { margin: 12px 14px; font-family: var(--font-inter); }
.papamobil-map-container .papal-popup-title {
  font-family: var(--font-playfair); font-weight: 700; font-size: 14px;
  color: #1B2A4A; margin-bottom: 4px;
}
.papamobil-map-container .papal-popup-time {
  font-size: 12px; color: #D4AF37; font-weight: 600; margin-bottom: 6px;
}
.papamobil-map-container .papal-popup-desc {
  font-size: 11px; color: rgba(27,42,74,0.7); line-height: 1.4;
}
.papamobil-map-container .papamobil-pin-start {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, #4A86E8, #285BAC);
  color: #FEFEFE; font-weight: 700; font-size: 14px;
  border: 3px solid #FEFEFE;
  box-shadow: 0 3px 8px rgba(42,91,172,0.4);
}
.papamobil-map-container .papamobil-pin-end {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, #D4AF37, #B8960F);
  color: #1B2A4A; font-weight: 700; font-size: 14px;
  border: 3px solid #FEFEFE;
  box-shadow: 0 3px 8px rgba(212,175,55,0.4);
}
.papamobil-map-container .papamobil-pin-sagrada {
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 50%;
  background: linear-gradient(135deg, #E07798, #B65775);
  color: #FEFEFE; font-weight: 700; font-size: 16px;
  border: 3px solid #FEFEFE;
  box-shadow: 0 3px 10px rgba(224,119,152,0.5);
}
`

export default function BarcelonaPapamobilMap({ locale, height = '600px', className = '' }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const leafletMapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return

    let map: LeafletMap
    const markers: Marker[] = []
    let polyline: Polyline | null = null

    const init = async () => {
      const L = await import('leaflet')

      if (!document.querySelector('link[data-leaflet]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        link.setAttribute('data-leaflet', 'true')
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
        link.crossOrigin = ''
        document.head.appendChild(link)
      }

      const t = getPagesDict(locale)

      // Barcelona centro (Eixample zoom)
      map = L.map(mapRef.current!, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      }).setView([41.390, 2.173], 15)

      // CartoDB Voyager tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // Coordinates
      const rosselló = [41.3908, 2.1680] as [number, number] // Inicio aprox
      const sardenya = [41.3900, 2.1760] as [number, number] // Fin aprox
      const sagradaFamilia = [41.4036, 2.1744] as [number, number]

      // Ruta polilínea (Rosselló → Sardenya → Sagrada Familia)
      const routeCoordinates: [number, number][] = [rosselló, sardenya, sagradaFamilia]

      polyline = L.polyline(routeCoordinates, {
        color: '#D4AF37',
        weight: 4,
        opacity: 0.8,
        dashArray: undefined, // línea sólida
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map)

      // Pin inicio (Rosselló)
      const iconStart = L.divIcon({
        className: '',
        html: `<div class="papamobil-pin-start" aria-label="Inicio papamóvil">1</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18],
      })

      const markerStart = L.marker(rosselló, { icon: iconStart, title: 'Rosselló' })
        .addTo(map)
        .bindPopup(
          `
          <div>
            <div class="papal-popup-title">Calle Rosselló</div>
            <div class="papal-popup-time">Inicio: 19:00</div>
            <div class="papal-popup-desc">Salida del papamóvil. Recorrido hacia Sagrada Familia (~1 km, 10-15 min)</div>
          </div>
        `,
          { maxWidth: 280 }
        )
      markers.push(markerStart)

      // Pin Sardenya (intermedio)
      const iconSardenya = L.divIcon({
        className: '',
        html: `<div class="papamobil-pin-start" style="background: linear-gradient(135deg, #43D692, #149E60);" aria-label="Sardenya">→</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18],
      })

      const markerSardenya = L.marker(sardenya, { icon: iconSardenya, title: 'Sardenya' })
        .addTo(map)
        .bindPopup(
          `
          <div>
            <div class="papal-popup-title">Calle Sardenya</div>
            <div class="papal-popup-time">Ruta activa</div>
            <div class="papal-popup-desc">Recorrido a baja velocidad en vehículo abierto. Mejor punto de vista desde aceras</div>
          </div>
        `,
          { maxWidth: 280 }
        )
      markers.push(markerSardenya)

      // Pin Sagrada Familia (destino)
      const iconSagrada = L.divIcon({
        className: '',
        html: `<div class="papamobil-pin-sagrada" aria-label="Sagrada Familia">✝</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
      })

      const markerSagrada = L.marker(sagradaFamilia, { icon: iconSagrada, title: 'Sagrada Familia' })
        .addTo(map)
        .bindPopup(
          `
          <div>
            <div class="papal-popup-title">Basílica de la Sagrada Familia</div>
            <div class="papal-popup-time">Llegada: ~19:30 · Misa: 19:30</div>
            <div class="papal-popup-desc">Inauguración de la Torre de Jesucristo (172.5m). Centenario de Gaudí. Beatificación en curso.</div>
          </div>
        `,
          { maxWidth: 280 }
        )
      markers.push(markerSagrada)

      // Fit bounds
      const bounds = L.latLngBounds([rosselló, sagradaFamilia])
      map.fitBounds(bounds, { padding: [60, 60] })

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
        className={`papamobil-map-container ${className}`}
        style={{ height }}
        role="region"
        aria-label="Mapa interactivo del recorrido del papamóvil en Barcelona"
      />
    </>
  )
}
