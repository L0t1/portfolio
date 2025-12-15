import React from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none"
    >
      <div className="text-xl font-bold tracking-tighter pointer-events-auto cursor-pointer" onClick={() => scrollTo('hero')}>
        LOT.KYCYKU
      </div>
      <div className="hidden md:flex gap-8 text-sm font-mono pointer-events-auto">
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className="hover:text-emerald-400 transition-colors uppercase tracking-widest"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;