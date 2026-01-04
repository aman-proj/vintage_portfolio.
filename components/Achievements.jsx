"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACHIEVEMENTS = [
  {
    id: "01",
    edition: "THE ARCHIVE VOGUE",
    headline: "SIH 2025: AMAN KUMAR REDEFINES TECHNICAL EXCELLENCE",
    role: "Lead Systems Architect",
    description: "Leading the charge at the Smart India Hackathon 2025, Aman Kumar demonstrated unparalleled technical leadership. His team's architecture for critical national infrastructure was hailed for its precision, scalability, and high-performance algorithmic integrity. A true masterclass in engineering.",
    date: "WINTER 2025",
    image: "/sih.jpeg",
    metadata: "REF_DOC_2025_SIH_FINALIST",
    tags: ["LEADERSHIP", "INNOVATION", "CORE"]
  },
  {
    id: "02",
    edition: "TECHNO ELEGANCE",
    headline: "HACKZILLA GLORY: THE ENGINEER'S TRIUMPH",
    role: "Principal Systems Engineer",
    description: "Securing the 2nd Runner-Up position at Hackzilla, Aman Kumar proved that elegance and performance go hand in hand. With over 500+ documented solutions, his workflow remains a benchmark for the modern developer community.",
    date: "SUMMER 2025",
    image: "/hackzilla.jpeg",
    metadata: "REF_DOC_2025_HACKZILLA_RUNNERUP",
    tags: ["ALGORITHMS", "PRECISION", "UI/UX"]
  }
];

export function Achievements() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage((prev) => (prev + newDirection + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  };

  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      rotate: direction > 0 ? 15 : -15,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      rotate: direction < 0 ? 15 : -15,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    })
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.02] rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.01] rounded-full blur-[120px] md:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.6em] uppercase text-white/40 italic">
              Curation : Honors & Recognition
            </span>
            <h2 className="font-serif text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.8]">
              Editorial<br/><span className="text-white/20">Archive</span>
            </h2>
          </div>
          
          <div className="flex gap-4 self-end">
            <button 
              onClick={() => paginate(-1)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-500 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-500 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        <div className="relative min-h-[600px] md:h-[750px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.3 },
                rotate: { duration: 0.6 },
                scale: { duration: 0.4 }
              }}
              className="w-full h-full flex flex-col md:grid md:grid-cols-12 bg-white text-black shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden rounded-sm"
            >
              {/* Magazine Left: High-Impact Visual */}
              <div className="md:col-span-7 relative h-[300px] md:h-full overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
                <img 
                  src={ACHIEVEMENTS[currentPage].image} 
                  alt="Editorial Cover"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                
                {/* Vertical Metadata */}
                <div className="absolute left-6 bottom-12 z-20 hidden md:block">
                  <div className="rotate-[-90deg] origin-left font-mono text-[9px] tracking-[0.5em] text-white/80 uppercase">
                    ISSUE_{ACHIEVEMENTS[currentPage].id} // {ACHIEVEMENTS[currentPage].metadata}
                  </div>
                </div>

                {/* Edition Badge */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                  <div className="bg-black text-white px-3 py-1 md:px-4 md:py-1.5 font-serif text-[8px] md:text-[10px] tracking-widest uppercase italic">
                    {ACHIEVEMENTS[currentPage].edition}
                  </div>
                </div>
              </div>

              {/* Magazine Right: Editorial Content */}
              <div className="md:col-span-5 flex flex-col p-6 md:p-16 bg-[#f9f9f9] relative overflow-y-auto">
                {/* Text Texture */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <div className="font-serif text-[10px] font-bold tracking-[0.3em] uppercase border-b border-black pb-1">
                      {ACHIEVEMENTS[currentPage].date}
                    </div>
                    <div className="font-serif text-[10px] italic">Exclusive Coverage</div>
                  </div>

                  <h3 className="font-serif text-3xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-6 md:mb-10">
                    {ACHIEVEMENTS[currentPage].headline}
                  </h3>

                  <div className="space-y-6 md:space-y-8 flex-1">
                    <div className="space-y-4 md:space-y-6">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold italic">
                        Editorial Analysis —
                      </div>
                      <p className="font-serif text-base md:text-xl leading-snug text-black/80 font-medium italic">
                        "{ACHIEVEMENTS[currentPage].description}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {ACHIEVEMENTS[currentPage].tags?.map(tag => (
                        <span key={tag} className="px-2 py-0.5 md:px-3 md:py-1 bg-black text-white font-mono text-[7px] md:text-[8px] tracking-widest uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-black/10 flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="font-mono text-[8px] uppercase tracking-widest text-black/40">Verified Professional</div>
                      <div className="font-serif text-xs md:text-sm font-black uppercase tracking-tight">{ACHIEVEMENTS[currentPage].role}</div>
                    </div>
                    
                    <div className="w-12 h-12 md:w-16 md:h-16 border border-black/20 flex items-center justify-center rounded-full">
                      <div className="w-8 h-8 md:w-12 md:h-12 border border-black flex items-center justify-center font-serif text-[6px] md:text-[8px] font-bold rotate-12">
                        ARCHIVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Magazine Footnote */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 md:gap-8 font-mono text-[9px] md:text-[10px] text-white/20 tracking-[0.4em] uppercase">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500/50" />
            DIGITAL_COLLECTION_VOL_I
          </div>
          <div>STATUS: AUTHENTICATED_BY_SYSTEM</div>
        </div>
      </div>
    </section>
  );
}
