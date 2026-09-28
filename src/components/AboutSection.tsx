import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '12+', label: 'Activités recensées' },
  { value: '100%', label: 'Gratuit et public' },
  { value: '1', label: 'Commune pilote : Meudon' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="apropos" className="relative py-16 sm:py-24 bg-[#0B3D2E] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true }}
        className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
      >
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80"
          alt="Paysage verdoyant au lever du jour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E] via-[#0B3D2E]/70 to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#40E0D0] text-sm sm:text-base uppercase tracking-[0.25em] font-semibold mb-3"
          >
            L’association
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight"
          >
            Conçue pour être simple, claire et accueillante
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed"
          >
            Darena cartographie les activités de nature pour seniors autonomes.
            Grands caractères, contrastes élevés et navigation intuitive :
            chacun trouve facilement sa prochaine sortie à Meudon, avec une
            extension prévue en Île-de-France.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                className="border-t border-[#40E0D0]/40 pt-4"
              >
                <p className="font-display text-4xl sm:text-5xl text-[#FFA500]">{stat.value}</p>
                <p className="mt-2 text-base sm:text-lg text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 inline-flex items-center gap-4 rounded-2xl bg-white/10 border border-white/20 px-5 py-4"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#00BFFF] to-[#40E0D0] flex items-center justify-center shrink-0">
              <span className="text-[#0B3D2E] font-bold text-sm leading-tight text-center">Région<br />IDF</span>
            </div>
            <p className="text-base sm:text-lg text-white/90 leading-snug">
              Emplacement dédié au logo de la Région Île-de-France — partenaire du projet.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
