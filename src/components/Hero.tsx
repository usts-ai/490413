import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.35]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section id="accueil" className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=85"
          alt="Forêt verdoyante baignée de lumière"
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D2E]/75 via-[#0B3D2E]/45 to-[#0B3D2E]/90" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-16 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-tight"
        >
          Darena
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="mt-4 sm:mt-6 max-w-2xl text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-snug"
        >
          La nature, à portée de pas pour les seniors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-4 max-w-xl text-lg sm:text-xl text-white/90 leading-relaxed"
        >
          Carte interactive et gratuite des activités nature accessibles à Meudon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#carte"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FFA500] text-[#0B3D2E] text-lg sm:text-xl font-semibold hover:bg-[#40E0D0] transition-all duration-300 hover:scale-[1.03] shadow-lg"
          >
            Voir la carte
          </a>
          <a
            href="#activites"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/80 text-white text-lg sm:text-xl font-semibold hover:bg-white hover:text-[#0B3D2E] transition-all duration-300"
          >
            Les activités
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-sm tracking-widest uppercase">Défiler</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="block h-8 w-px bg-[#40E0D0]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
