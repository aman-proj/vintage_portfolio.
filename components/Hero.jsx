"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section id="hero" ref={containerRef} className="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Vintage Background */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
          alt="Vintage Technical Background"
          className="w-full h-full object-cover grayscale brightness-[0.2] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
        {/* Animated Dust/Particles */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse" />
        </div>
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
          
          {/* Top Left Metadata */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="col-span-12 md:col-span-4 flex flex-col justify-start pt-12"
          >
            <div className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/40 mb-2">
              Access_Level: Restricted
            </div>
            <div className="w-12 h-[1px] bg-white/20 mb-8" />
            <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest leading-loose">
              Ref: AK_ARCHIVE_2025<br />
              Log_001 // Initialization<br />
              System_Status: Operational
            </div>
          </motion.div>

          {/* Main Title - Offset Layout */}
          <div className="col-span-12 md:col-span-8 relative flex flex-col items-end md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1 className="font-serif text-[18vw] md:text-[12rem] leading-[0.75] text-white uppercase tracking-tighter filter drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                Aman<br />
                <span className="md:ml-24 text-white/80">Kumar</span>
              </h1>
              
              {/* Vertical Text Decoration */}
              <div className="absolute -left-12 top-0 h-full hidden md:flex items-center">
                 <span className="font-mono text-[8px] uppercase tracking-[1em] text-white/10 [writing-mode:vertical-lr] rotate-180">
                   Engineering Precision
                 </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row Information */}
          <div className="col-span-12 mt-12 md:mt-24 grid grid-cols-12 gap-8 items-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="col-span-12 md:col-span-5"
            >
              <p className="font-serif text-2xl md:text-3xl text-white/50 leading-tight max-w-sm italic">
                Architecting silent systems with technical <span className="text-white/80 not-italic">mastery</span>.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="col-span-12 md:col-span-7 flex flex-col md:flex-row justify-end items-start md:items-center gap-12"
            >
              <div className="flex gap-6">
                <div className="space-y-1">
                  <div className="font-mono text-[7px] text-white/20 uppercase tracking-widest">Specialization</div>
                  <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest px-3 py-1 border border-white/5 rounded-sm bg-white/[0.02]">
                    C++ Problem Engineer
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[7px] text-white/20 uppercase tracking-widest">Focus</div>
                  <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest px-3 py-1 border border-white/5 rounded-sm bg-white/[0.02]">
                    AI Engineering
                  </div>
                </div>
              </div>

              <div className="font-mono text-[9px] text-right text-white/20 tracking-[0.4em] uppercase leading-relaxed">
                PATNA, BR — IN<br />
                25.5941° N, 85.1376° E
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-12 font-mono text-[8px] text-white/10 uppercase tracking-[0.5em]">
        © 2025 ARCHIVE // AK
      </div>

      {/* Modern Archival Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 hidden md:flex items-center gap-4"
      >
        <span className="font-mono text-[7px] text-white/30 uppercase tracking-[0.8em]">Scroll to Explore</span>
        <div className="w-12 h-px bg-white/20" />
      </motion.div>

      <div className="absolute inset-0 vignette pointer-events-none" />
    </section>
  );
}
