"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ArchiveNote() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="py-40 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* High Quality Vintage Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ha.jpeg" 
          alt="Technical Drawing"
          className="w-full h-full object-cover opacity-15 grayscale mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large Background Text for Depth */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none select-none overflow-hidden py-20">
          <motion.h2 
            style={{ x: x1 }}
            className="font-serif text-[15vw] leading-none text-white/[0.02] uppercase whitespace-nowrap -ml-40"
          >
            Technical Precision — Engineering — Systems
          </motion.h2>
          <motion.h2 
            style={{ x: x2 }}
            className="font-serif text-[15vw] leading-none text-white/[0.02] uppercase whitespace-nowrap ml-40"
          >
            Architecture — Innovation — Distributed
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Creative Layout 01: Vertical Info Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 flex lg:flex-col gap-12 items-start"
          >
            <div className="space-y-2">
              <span className="font-mono text-[8px] text-white/20 uppercase tracking-[1em]">Log No.</span>
              <div className="font-serif text-4xl text-white/80">001</div>
            </div>
            <div className="w-[1px] h-24 bg-white/10 hidden lg:block" />
            <div className="space-y-6">
              <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest leading-loose">
                AUTHENTICATED RECORDS<br />
                IIIT-K // 2025<br />
                PRIORITY: HIGH
              </div>
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center rotate-45">
                 <div className="w-1 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Creative Layout 02: Main Content with Unique Placements */}
          <div className="lg:col-span-9 space-y-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Offset Heading */}
              <h3 className="font-serif text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.9] max-w-4xl">
                Bridging computation <br />
                <span className="md:ml-32 text-white/40 italic flex items-center gap-6">
                  <div className="h-px w-16 bg-white/10" />
                  with intuition
                </span>
              </h3>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="font-sans text-xl text-white/60 leading-relaxed font-light">
                  In a world of noise, I build systems that whisper. My focus lies in the intersection of high-performance backend architecture and intuitive AI-driven user experiences. 


                </p>
                
                <div className="space-y-8">
                  <p className="font-sans text-xl text-white/60 leading-relaxed font-light">
                    My work is shaped by competitive programming, data structures, and real-world system constraints, complemented by full-stack development and emerging AI technologies. I value clean abstractions, measurable impact, and systems that endure under scale.
                  </p>
                  <div className="pt-8 border-t border-white/5 flex gap-12">
                    <div className="space-y-1">
                      <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Registry</div>
                      <div className="font-mono text-[10px] text-white/60 uppercase">AK-ARCHIVE-01</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Status</div>
                      <div className="font-mono text-[10px] text-white/60 uppercase">Operational</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Creative Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 shadow-2xl">
              {[
  { label: "DSA Problems", value: "500+", detail: "Solved" },
  { label: "Systems Built", value: "10+", detail: "Full-Stack" },
  { label: "Performance", value: "40–50%", detail: "Optimized" }
]
.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="font-mono text-[8px] text-white/20 uppercase tracking-[0.5em] mb-4">{stat.label}</div>
                  <div className="font-serif text-5xl text-white mb-2">{stat.value}</div>
                  <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{stat.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
