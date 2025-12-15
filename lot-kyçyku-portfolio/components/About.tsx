import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 md:px-20 lg:px-32 relative bg-slate-900/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
        
        {/* Left side empty for Mascot to inhabit during scroll */}
        <div className="hidden md:block"></div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            More Than Just <br/> <span className="text-emerald-400">Code.</span>
          </h2>
          
          <div className="prose prose-lg prose-invert text-slate-300">
            <p>
              Based in Prizren, Kosovo, I’m a full-stack engineer with a strong backend specialization. I focus on designing and building the systems that power applications behind the scenes—prioritizing performance, security, scalability, and long-term maintainability.
            </p>
            <p>
              I enjoy working on complex problems such as optimizing database queries, designing clean and scalable architectures, and building reliable APIs and microservices. I’m equally comfortable bridging backend logic with modern frontend technologies to ensure smooth, end-to-end user experiences.
            </p>
            <p>
              Beyond writing code, I value clean architecture, automation, and developer experience. From setting up CI/CD pipelines to improving system reliability and performance, I aim to deliver solutions that are not only functional, but robust and future-proof.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white">4+</h3>
              <p className="text-sm text-slate-400">Years Experience</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-sm text-slate-400">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;