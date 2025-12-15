import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MascotState } from '../types';

interface MascotProps {
  className?: string;
}

export interface MascotHandle {
  setState: (state: MascotState) => void;
}

const Mascot = forwardRef<MascotHandle, MascotProps>(({ className }, ref) => {
  const [state, setStateInternal] = useState<MascotState>(MascotState.IDLE);

  useImperativeHandle(ref, () => ({
    setState: (newState: MascotState) => {
      setStateInternal(newState);
    }
  }));

  // Simple bobbing animation for the idle state
  const floatTransition = {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const
    }
  };

  return (
    <div className={`pointer-events-none ${className}`} style={{ zIndex: 50 }}>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={floatTransition}
        className="relative w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Antenna */}
          <motion.g
            animate={state === MascotState.THINKING ? { rotate: [0, 15, -15, 0] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ originX: "100px", originY: "50px" }}
          >
            <path d="M100 50L100 20" stroke="#64748b" strokeWidth="4" />
            <circle cx="100" cy="15" r="8" fill="#10b981" className={state === MascotState.BUILDING ? "animate-pulse" : ""} />
          </motion.g>

          {/* Body/Head Container */}
          <g transform="translate(0, 10)">
            {/* Main Head Shape */}
            <rect x="40" y="40" width="120" height="100" rx="20" fill="#1e293b" stroke="#334155" strokeWidth="4" />
            
            {/* Screen Face */}
            <rect x="55" y="55" width="90" height="70" rx="10" fill="#0f172a" />

            {/* Eyes */}
            <AnimatePresence mode="wait">
              {state === MascotState.IDLE && (
                <motion.g key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <circle cx="80" cy="85" r="8" fill="#10b981" />
                  <circle cx="120" cy="85" r="8" fill="#10b981" />
                </motion.g>
              )}
              {state === MascotState.WAVING && (
                <motion.g key="waving" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <path d="M72 85 Q80 75 88 85" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                  <path d="M112 85 Q120 75 128 85" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                </motion.g>
              )}
              {state === MascotState.READING && (
                 <motion.g key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                   {/* Glasses */}
                   <circle cx="80" cy="85" r="12" stroke="#10b981" strokeWidth="2" fill="none"/>
                   <circle cx="120" cy="85" r="12" stroke="#10b981" strokeWidth="2" fill="none"/>
                   <line x1="92" y1="85" x2="108" y2="85" stroke="#10b981" strokeWidth="2"/>
                 </motion.g>
              )}
              {state === MascotState.THINKING && (
                 <motion.g key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                   <circle cx="80" cy="80" r="6" fill="#10b981" />
                   <rect x="110" y="82" width="20" height="4" fill="#10b981" />
                 </motion.g>
              )}
              {state === MascotState.BUILDING && (
                 <motion.g key="building" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <rect x="70" y="82" width="20" height="6" fill="#fbbf24" />
                    <rect x="110" y="82" width="20" height="6" fill="#fbbf24" />
                 </motion.g>
              )}
            </AnimatePresence>

            {/* Mouth */}
            <path d="M85 110 Q100 115 115 110" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Hands */}
          <motion.g animate={state === MascotState.WAVING ? { rotate: [0, 20, -10, 0], x: [0, 5, 0] } : {}} transition={{ duration: 0.5, repeat: state === MascotState.WAVING ? Infinity : 0 }}>
             <circle cx="30" cy="100" r="12" fill="#334155" />
          </motion.g>
          <circle cx="170" cy="100" r="12" fill="#334155" />
          
          {/* Accessories based on state */}
          <AnimatePresence>
            {state === MascotState.BUILDING && (
              <motion.g 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0 }}
                transform="translate(140, 60)"
              >
                <path d="M0 0 L20 20 M20 0 L0 20" stroke="#fbbf24" strokeWidth="4" />
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
      </motion.div>
    </div>
  );
});

Mascot.displayName = 'Mascot';
export default Mascot;