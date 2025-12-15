import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col justify-between py-20 px-6 md:px-20 lg:px-32 relative">
      <div className="max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold mb-8"
        >
          Let's Build Something <br/>
          <span className="text-emerald-500">Scalable.</span>
        </motion.h2>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl">
          I'm currently available for freelance projects and full-time opportunities. If you have a challenging backend problem or need a system architect, drop me a line.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <a href={`mailto:${SOCIALS.email}`} className="flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors">
            <Mail className="w-5 h-5 mr-3" />
            Say Hello
          </a>
          <div className="flex gap-4">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end mt-20 border-t border-slate-800 pt-8">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Lot Kyçyku. All rights reserved.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors text-sm font-mono"
        >
          Back to Top <ArrowUp className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Contact;