import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-20 lg:px-32 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">Selected Works</h2>
          <p className="text-slate-400 mt-4 md:mt-0">Showcasing backend excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <h3 className="text-3xl font-bold text-slate-700 group-hover:text-emerald-500/20 transition-colors uppercase tracking-widest">{project.title.substring(0, 3)}</h3>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} className="flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="flex items-center text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;