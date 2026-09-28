import React from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { label: 'Mentions légales', href: '#mentions' },
  { label: 'Confidentialité', href: '#confidentialite' },
  { label: 'Accessibilité', href: '#accessibilite' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { label: 'Facebook', href: '#facebook', short: 'Fb' },
  { label: 'Instagram', href: '#instagram', short: 'Ig' },
  { label: 'YouTube', href: '#youtube', short: 'Yt' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0B3D2E] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #40E0D0 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00BFFF 0%, transparent 35%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl tracking-wide"
            >
              Darena
            </motion.p>
            <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-xs">
              Cartographie gratuite des activités nature pour seniors autonomes à Meudon.
            </p>
          </div>

          <div>
            <p className="text-[#FFA500] text-sm uppercase tracking-[0.2em] mb-4">Navigation</p>
            <ul className="space-y-3">
              {['Accueil', 'Carte', 'Activités', 'À propos'].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label === 'À propos' ? 'apropos' : label === 'Activités' ? 'activites' : label.toLowerCase()}`}
                    className="text-lg text-white/85 hover:text-[#40E0D0] transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#FFA500] text-sm uppercase tracking-[0.2em] mb-4">Informations</p>
            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-lg text-white/85 hover:text-[#40E0D0] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#FFA500] text-sm uppercase tracking-[0.2em] mb-4">Suivez-nous</p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-12 w-12 rounded-full border border-white/25 flex items-center justify-center text-sm font-bold tracking-wide hover:bg-[#40E0D0] hover:border-[#40E0D0] hover:text-[#0B3D2E] transition-all duration-300 hover:-translate-y-1"
                >
                  {s.short}
                </a>
              ))}
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 border border-white/15">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#00BFFF] to-[#40E0D0] flex items-center justify-center text-[#0B3D2E] font-bold text-xs">
                IDF
              </div>
              <p className="text-sm text-white/90 leading-snug">
                Soutenu par la<br />Région Île-de-France
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-white/60 text-base">
          <p>© {new Date().getFullYear()} Association Darena — Tous droits réservés</p>
          <p>OpenStreetMap · Accès libre et gratuit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
