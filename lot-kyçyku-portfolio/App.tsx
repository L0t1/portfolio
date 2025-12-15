import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Mascot, { MascotHandle } from './components/Mascot';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { MascotState } from './types';

// Register ScrollTrigger globally to ensure it's available before any React lifecycle
gsap.registerPlugin(ScrollTrigger);

function App() {
  useSmoothScroll();
  const mascotRef = useRef<MascotHandle>(null);
  const mascotContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Setup the mascot timeline
      const mm = gsap.matchMedia();

      // Desktop Animations
      mm.add("(min-width: 768px)", () => {
        // Check if refs are available
        if (!mascotContainerRef.current || !containerRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          }
        });

        // Initial State (Hero)
        gsap.set(mascotContainerRef.current, { 
          xPercent: -50, 
          yPercent: -50, 
          left: "50%", 
          top: "80vh", // Start at bottom of hero
          scale: 1.2
        });
        
        // 1. Hero -> About
        // Move mascot from center bottom to left side
        tl.to(mascotContainerRef.current, {
          top: "150vh", // Moves into About section vertically
          left: "25%",  // Moves to the left column
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
          onStart: () => mascotRef.current?.setState(MascotState.READING),
          onReverseComplete: () => mascotRef.current?.setState(MascotState.IDLE)
        });

        // 2. About -> Skills
        // Move across to the right side
        tl.to(mascotContainerRef.current, {
          top: "250vh",
          left: "85%",
          scale: 0.8,
          duration: 1,
          ease: "power2.inOut",
          onStart: () => mascotRef.current?.setState(MascotState.BUILDING),
          onReverseComplete: () => mascotRef.current?.setState(MascotState.READING)
        });

        // 3. Skills -> Experience
        // Move to the left to align with timeline
        tl.to(mascotContainerRef.current, {
          top: "350vh",
          left: "15%",
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut",
          onStart: () => mascotRef.current?.setState(MascotState.THINKING),
          onReverseComplete: () => mascotRef.current?.setState(MascotState.BUILDING)
        });

        // 4. Experience -> Projects
        // Move to bottom right corner peeking
        tl.to(mascotContainerRef.current, {
          top: "450vh",
          left: "90%",
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
          onStart: () => mascotRef.current?.setState(MascotState.READING),
          onReverseComplete: () => mascotRef.current?.setState(MascotState.THINKING)
        });

        // 5. Projects -> Contact
        // Center for goodbye
        tl.to(mascotContainerRef.current, {
          top: "550vh", // Adjust based on total height approximation
          left: "50%",
          scale: 1.5,
          duration: 1,
          ease: "power2.out",
          onStart: () => mascotRef.current?.setState(MascotState.WAVING),
          onReverseComplete: () => mascotRef.current?.setState(MascotState.READING)
        });
      });

      // Mobile Animations (Simplified)
      mm.add("(max-width: 767px)", () => {
         if (!mascotContainerRef.current) return;

         gsap.set(mascotContainerRef.current, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            left: 'auto',
            top: 'auto',
            scale: 0.6,
            zIndex: 100
         });
         
         // Simply change states on scroll trigger without moving x/y heavily
         ScrollTrigger.create({
            trigger: "#about",
            start: "top center",
            onEnter: () => mascotRef.current?.setState(MascotState.READING),
            onLeaveBack: () => mascotRef.current?.setState(MascotState.IDLE)
         });
         
         ScrollTrigger.create({
            trigger: "#skills",
            start: "top center",
            onEnter: () => mascotRef.current?.setState(MascotState.BUILDING),
            onLeaveBack: () => mascotRef.current?.setState(MascotState.READING)
         });

         ScrollTrigger.create({
            trigger: "#contact",
            start: "top bottom",
            onEnter: () => mascotRef.current?.setState(MascotState.WAVING),
            onLeaveBack: () => mascotRef.current?.setState(MascotState.BUILDING)
         });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-950 min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navigation />
      
      {/* The Mascot Layer - Fixed position initially, moved by GSAP */}
      <div 
        ref={mascotContainerRef}
        className="fixed pointer-events-none z-50 will-change-transform"
        style={{ width: '0', height: '0', overflow: 'visible' }} // Container shouldn't block clicks
      >
        <Mascot ref={mascotRef} className="pointer-events-auto cursor-help" />
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[60] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}

export default App;