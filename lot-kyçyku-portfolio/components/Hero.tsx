import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 lg:px-32 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 -z-10 opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl z-10"
      >
        <h2 className="text-emerald-400 font-mono mb-4 text-lg">Hello, I'm Lot Kyçyku</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-slate-100 mb-8">
          LOT-KYÇYKU: Full Stack Engineer (Laravel, Next.js, Vue.js)
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          I build scalable Laravel systems, robust APIs, and production-ready architectures that power modern web applications—with a strong focus on backend engineering, but also skilled in modern frontend integration.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-3 px-8 py-4 bg-emerald-500 text-slate-900 font-bold rounded-full hover:bg-emerald-400 transition-all"
        >
          Start the Journey
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-amber-400 font-mono text-sm"
        >
          <span>💻 Backend dev? Prefer terminals? </span>
          <a href="/" className="text-cyan-400 underline hover:text-cyan-300 transition-colors">
            Check out the CLI version!
          </a>
        </motion.p>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
         <span className="text-[20rem] font-bold text-slate-700 leading-none">PHP</span>
      </div>
    </section>
  );
};

export default Hero;