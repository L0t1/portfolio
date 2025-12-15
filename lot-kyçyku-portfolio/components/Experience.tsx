import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 md:px-20 lg:px-32 relative flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center md:text-left">Career Path</h2>
        
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-16">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 box-content shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
              
              <div className="bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-slate-600 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {job.role}
                    </h3>
                    <span className="text-emerald-400 font-mono">{job.company}</span>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center text-slate-500 font-mono text-sm bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                    <Briefcase className="w-3 h-3 mr-2" />
                    {job.period.includes('∞') ? (
                      <>
                        2021 - <span style={{ display: 'inline-block', width: '0.5em' }}></span><span style={{ fontSize: '1.5em', lineHeight: '1', verticalAlign: 'middle' }}>∞</span>
                      </>
                    ) : job.period}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {job.description.map((point, i) => (
                    <li key={i} className="text-slate-400 leading-relaxed flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1.5">›</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;