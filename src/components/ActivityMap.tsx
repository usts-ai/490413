import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import L, { Map as LeafletMap, LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ACTIVITIES, Activity, ActivityType, FILTER_TYPES } from '../data/activities';

const TYPE_COLORS: Record<ActivityType, string> = {
  Marche: '#228B22',
  Jardinage: '#FFA500',
  Observation: '#00BFFF',
  'Bien-être': '#40E0D0',
  Découverte: '#DEB887',
};

interface ActivityMapProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const ActivityMap: React.FC<ActivityMapProps> = ({ selectedId, onSelect }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<LeafletMap | null>(null);
  const markersRef = useRef<LayerGroup | null>(null);
  const [filter, setFilter] = useState<ActivityType | 'Tous'>('Tous');

  const filtered = useMemo(
    () => (filter === 'Tous' ? ACTIVITIES : ACTIVITIES.filter((a) => a.type === filter)),
    [filter]
  );

  const selected: Activity | undefined = ACTIVITIES.find((a) => a.id === selectedId);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [48.805, 2.235],
      zoom: 14,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 19,
    }).addTo(map);

    markersRef.current = L.layerGroup().addTo(map);
    mapInstance.current = map;

    setTimeout(() => map.invalidateSize(), 200);

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    const group = markersRef.current;
    if (!map || !group) return;

    group.clearLayers();

    filtered.forEach((activity) => {
      const color = TYPE_COLORS[activity.type];
      const isSelected = activity.id === selectedId;
      const icon = L.divIcon({
        className: '',
        html: `<div style="
          width:${isSelected ? 28 : 22}px;
          height:${isSelected ? 28 : 22}px;
          background:${color};
          border:3px solid white;
          border-radius:50%;
          box-shadow:0 4px 14px rgba(0,0,0,0.35);
          transform:scale(${isSelected ? 1.25 : 1});
          transition:transform .25s ease;
        "></div>`,
        iconSize: [isSelected ? 28 : 22, isSelected ? 28 : 22],
        iconAnchor: [isSelected ? 14 : 11, isSelected ? 14 : 11],
      });

      const marker = L.marker([activity.lat, activity.lng], { icon });
      marker.on('click', () => onSelect(activity.id));
      group.addLayer(marker);
    });

    if (filtered.length > 0) {
      const bounds = L.latLngBounds(filtered.map((a) => [a.lat, a.lng] as [number, number]));
      map.fitBounds(bounds.pad(0.25));
    }
  }, [filtered, selectedId, onSelect]);

  return (
    <section id="carte" className="relative py-16 sm:py-24 bg-[#E8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-12"
        >
          <p className="text-[#228B22] text-sm sm:text-base uppercase tracking-[0.25em] font-semibold mb-3">
            Carte interactive
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0B3D2E] leading-tight">
            Explorez Meudon
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#333] max-w-2xl leading-relaxed">
            Filtrez par type d’activité, puis touchez un point pour ouvrir la fiche détaillée.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
          {FILTER_TYPES.map((type) => {
            const active = filter === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setFilter(type)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${
                  active
                    ? 'bg-[#0B3D2E] text-white shadow-md scale-105'
                    : 'bg-white text-[#0B3D2E] hover:bg-[#40E0D0]/40 border border-[#0B3D2E]/15'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
          <motion.div
            layout
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-xl border border-[#0B3D2E]/10 min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]"
          >
            <div ref={mapRef} className="absolute inset-0 z-0" />
          </motion.div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.article
                  key={selected.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#0B3D2E]/08 h-full"
                >
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-full object-cover"
                    />
                    <span
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: TYPE_COLORS[selected.type] }}
                    >
                      {selected.type}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="font-display text-2xl sm:text-3xl text-[#0B3D2E]">{selected.title}</h3>
                    <p className="text-base sm:text-lg text-[#444] leading-relaxed">{selected.description}</p>
                    <dl className="space-y-2 text-base sm:text-lg text-[#222]">
                      <div className="flex gap-2"><dt className="font-semibold text-[#228B22] shrink-0">Jours</dt><dd>{selected.days}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-[#228B22] shrink-0">Accès</dt><dd>{selected.access}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-[#228B22] shrink-0">Coût</dt><dd>{selected.cost}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-[#228B22] shrink-0">Accessibilité</dt><dd>{selected.accessibility}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-[#228B22] shrink-0">Contact</dt><dd>{selected.contact}</dd></div>
                    </dl>
                  </div>
                </motion.article>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl border border-dashed border-[#0B3D2E]/25 h-full min-h-[280px] flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-[#40E0D0]/30 flex items-center justify-center mb-4">
                    <span className="text-3xl text-[#0B3D2E]">+</span>
                  </div>
                  <p className="text-xl sm:text-2xl text-[#0B3D2E] font-medium">
                    Sélectionnez une activité sur la carte
                  </p>
                  <p className="mt-2 text-base sm:text-lg text-[#555]">
                    {filtered.length} point{filtered.length > 1 ? 's' : ''} affiché{filtered.length > 1 ? 's' : ''}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityMap;
