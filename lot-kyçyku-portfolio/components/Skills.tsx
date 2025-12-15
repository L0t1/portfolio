import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Server, Database, Container, Terminal, Code2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  server: <Server className="w-8 h-8 text-emerald-400" />,
  database: <Database className="w-8 h-8 text-blue-400" />,
  container: <Container className="w-8 h-8 text-orange-400" />,
  test: <Terminal className="w-8 h-8 text-purple-400" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:px-32 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 text-lg">The tools I use to build the future.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors group"
            >
              <div className="mb-4 p-3 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {iconMap[category.icon] || <Code2 className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-200">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-400">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;