import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES, Activity } from '../data/activities';

interface ActivityListProps {
  onSelect: (id: string) => void;
}

const ActivityList: React.FC<ActivityListProps> = ({ onSelect }) => {
  return (
    <section id="activites" className="relative py-16 sm:py-24 bg-[#FAFBFA] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top right, rgba(64,224,208,0.35), transparent 50%), radial-gradient(ellipse at bottom left, rgba(0,191,255,0.2), transparent 45%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-[#00BFFF] text-sm sm:text-base uppercase tracking-[0.25em] font-semibold mb-3">
            À découvrir
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0B3D2E]">
            Activités nature
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#333] max-w-2xl">
            Des moments simples, accessibles et conviviaux, pensés pour les seniors autonomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ACTIVITIES.map((activity: Activity, index: number) => (
            <motion.button
              key={activity.id}
              type="button"
              onClick={() => {
                onSelect(activity.id);
                document.getElementById('carte')?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group text-left bg-transparent"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/70 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 right-4 font-display text-2xl text-white leading-tight">
                  {activity.title}
                </span>
              </div>
              <p className="text-[#228B22] font-semibold text-base sm:text-lg">{activity.type} · {activity.commune}</p>
              <p className="mt-1 text-[#444] text-base sm:text-lg leading-relaxed">{activity.days}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[#0B3D2E] text-lg font-semibold group-hover:text-[#00BFFF] transition-colors">
                Voir sur la carte
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityList;
