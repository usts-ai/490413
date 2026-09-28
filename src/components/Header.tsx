import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Carte', href: '#carte' },
  { label: 'Activités', href: '#activites' },
  { label: 'À propos', href: '#apropos' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B3D2E]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#40E0D0] text-[#0B3D2E] font-bold text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            D
          </span>
          <span className="font-display text-2xl sm:text-3xl tracking-wide text-white">
            Darena
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-lg text-white/90 hover:text-white transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute left-4 right-4 bottom-1 h-0.5 origin-left scale-x-0 bg-[#FFA500] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#carte"
            className="ml-3 px-5 py-2.5 rounded-full bg-[#FFA500] text-[#0B3D2E] text-lg font-semibold hover:bg-[#40E0D0] transition-colors duration-300"
          >
            Explorer
          </a>
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-7 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-[#0B3D2E]/98 backdrop-blur-md"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-xl text-white border-b border-white/10 hover:text-[#40E0D0] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
