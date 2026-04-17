'use client'

import { useEffect, useRef } from 'react'
import type { Map as LeafletMap, Marker, Polyline } from 'leaflet'
import type { PapalEvent } from '@/types/schedule'
import { type Locale } from '@/data/i18n/types'
import { getEventCoords } from '@/data/venues'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'

/**
 * Mapa de los actos de UNA ciudad.
 *
 * - Pins numerados en cada venue con coordenadas conocidas
 * - Popup con hora, título y tipo de acto
 * - Polyline que une los actos en orden cronológico
 * - fitBounds automático al área de la ciudad
 */

interface Props {
  events: PapalEvent[]
  cityCenter: { lat: number; lng: number }
  cityName: string
  locale: Locale
  height?: string
  className?: string
}

const LEAFLET_CSS = `
.papal-city-map-container { height: 100%; width: 100%; background: #FFF8E7; }
.papal-city-map-container .leaflet-control-attribution { font-size: 10px; background: rgba(255,255,255,0.9); }
.papal-city-map-container .leaflet-control-zoom a {
  background: #FEFEFE; color: #1B2A4A; border: 1px solid rgba(212,175,55,0.3);
}
.papal-city-map-container .leaflet-control-zoom a:hover { background: #FFF8E7; }
.papal-city-map-container .leaflet-popup-content-wrapper {
  background: #FEFEFE; border: 1px solid rgba(212,175,55,0.3);
  border-radius: 12px; box-shadow: 0 4px 12px rgba(27,42,74,0.15);
}
.papal-city-map-container .leaflet-popup-tip {
  background: #FEFEFE; border: 1px solid rgba(212,175,55,0.3);
}
.papal-city-map-container .leaflet-popup-content { margin: 12px 14px; font-family: var(--font-inter); }
.papal-city-map-container .papal-event-time {
  display: inline-block; padding: 2px 8px; border-radius: 4px;
  background: #1B2A4A; color: #FEFEFE; font-size: 11px; font-weight: 700;
  margin-bottom: 6px;
}
.papal-city-map-container .papal-event-title {
  font-family: var(--font-playfair); font-weight: 700; font-size: 14px;
  color: #1B2A4A; line-height: 1.25;
}
.papal-city-map-container .papal-event-location {
  font-size: 11px; color: rgba(27,42,74,0.55); margin-top: 4px;
}
.papal-city-map-container .papal-event-type {
  display: inline-block; padding: 1px 6px; border-radius: 3px;
  background: rgba(212,175,55,0.2); color: #B8960F;
  font-size: 10px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.4px; margin-top: 6px;
}
.papal-city-map-container .papal-event-pin {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #D4AF37, #B8960F);
  color: #1B2A4A; font-weight: 700; font-size: 12px;
  border: 2.5px solid #FEFEFE;
  box-shadow: 0 2px 5px rgba(27,42,74,0.3);
}
`

const EVENT_TYPE_LABELS: Record<string, Record<string, string>> = {
  es: { misa: 'Misa', vigilia: 'Vigilia', encuentro: 'Encuentro', inauguracion: 'Inauguración', traslado: 'Traslado', llegada: 'Llegada', despedida: 'Despedida', 'acto-publico': 'Acto público' },
  en: { misa: 'Mass', vigilia: 'Vigil', encuentro: 'Meeting', inauguracion: 'Inauguration', traslado: 'Transfer', llegada: 'Arrival', despedida: 'Farewell', 'acto-publico': 'Public event' },
  it: { misa: 'Messa', vigilia: 'Veglia', encuentro: 'Incontro', inauguracion: 'Inaugurazione', traslado: 'Trasferimento', llegada: 'Arrivo', despedida: 'Congedo', 'acto-publico': 'Evento pubblico' },
  fr: { misa: 'Messe', vigilia: 'Veillée', encuentro: 'Rencontre', inauguracion: 'Inauguration', traslado: 'Transfert', llegada: 'Arrivée', despedida: 'Départ', 'acto-publico': 'Acte public' },
  de: { misa: 'Messe', vigilia: 'Vigil', encuentro: 'Begegnung', inauguracion: 'Einweihung', traslado: 'Verlegung', llegada: 'Ankunft', despedida: 'Abschied', 'acto-publico': 'Öffentliche Veranstaltung' },
  pt: { misa: 'Missa', vigilia: 'Vigília', encuentro: 'Encontro', inauguracion: 'Inauguração', traslado: 'Transferência', llegada: 'Chegada', despedida: 'Despedida', 'acto-publico': 'Ato público' },
  ca: { misa: 'Missa', vigilia: 'Vetlla', encuentro: 'Trobada', inauguracion: 'Inauguració', traslado: 'Desplaçament', llegada: 'Arribada', despedida: 'Comiat', 'acto-publico': 'Acte públic' },
  gl: { misa: 'Misa', vigilia: 'Vixilia', encuentro: 'Encontro', inauguracion: 'Inauguración', traslado: 'Traslado', llegada: 'Chegada', despedida: 'Despedida', 'acto-publico': 'Acto público' },
  eu: { misa: 'Meza', vigilia: 'Bijilia', encuentro: 'Topaketa', inauguracion: 'Inaugurazioa', traslado: 'Lekualdaketa', llegada: 'Heltzea', despedida: 'Agurra', 'acto-publico': 'Ekitaldi publikoa' },
}

export default function CityEventsMap({
  events,
  cityCenter,
  cityName,
  locale,
  height = '420px',
  className = '',
}: Props) {
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

      // Filtrar eventos con coordenadas conocidas
      const placedEvents: Array<{ event: PapalEvent; coords: { lat: number; lng: number } }> = []
      events.forEach((event) => {
        const coords = getEventCoords(event)
        if (coords) placedEvents.push({ event, coords })
      })

      // Centrar en la ciudad inicialmente
      map = L.map(mapRef.current!, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      }).setView([cityCenter.lat, cityCenter.lng], 12)

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      const bounds: [number, number][] = []
      const typeLabels = EVENT_TYPE_LABELS[locale] || EVENT_TYPE_LABELS.es

      placedEvents.forEach(({ event, coords }, i) => {
        bounds.push([coords.lat, coords.lng])

        const icon = L.divIcon({
          className: '',
          html: `<div class="papal-event-pin" aria-label="${event.title}">${i + 1}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          popupAnchor: [0, -14],
        })

        const popupHtml = `
          <div>
            <div class="papal-event-time">${event.startTime}</div>
            <div class="papal-event-title">${event.title}</div>
            <div class="papal-event-location">${event.location}</div>
            <div class="papal-event-type">${typeLabels[event.eventType] || event.eventType}</div>
          </div>
        `

        const marker = L.marker([coords.lat, coords.lng], { icon, title: event.title })
          .addTo(map)
          .bindPopup(popupHtml, { maxWidth: 260 })
        markers.push(marker)
      })

      // Ajustar bounds si hay pins
      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 })

        // Polyline conectando los actos en orden
        if (bounds.length > 1) {
          polyline = L.polyline(bounds, {
            color: '#B8960F',
            weight: 2,
            opacity: 0.5,
            dashArray: '4, 6',
          }).addTo(map)
        }
      }

      leafletMapRef.current = map
    }

    init()

    return () => {
      markers.forEach((m) => m.remove())
      polyline?.remove()
      map?.remove()
      leafletMapRef.current = null
    }
  }, [events, cityCenter.lat, cityCenter.lng, locale])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LEAFLET_CSS }} />
      <div
        ref={mapRef}
        className={`papal-city-map-container overflow-hidden rounded-xl border border-papal-gold/20 ${className}`}
        style={{ height }}
        aria-label={`Mapa de los actos en ${cityName}`}
        role="region"
      />
    </>
  )
}
