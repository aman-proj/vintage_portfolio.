"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: "SK-01",
    type: "PROJECT",
    title: "SkillAmigo",
    description: "AI-powered gig booking platform with semantic skill discovery using Pinecone and RAG-based conversational AI agents.",
    tech: ["Next.js", "FastAPI", "Pinecone", "LangChain"],
    image: "/skillamigo.png",
    type:"img",
    link: "https://github.com/aman-proj/SkillAmigo",
    github: "https://github.com/aman-proj/SkillAmigo",
    demo: "https://youtu.be/VWP0shIGQPQ?si=QWg1rPgx0KV2tqmD"

  },
  {
    id: "FF-02",
    type: "PROJECT",
    title: "FinFriend",
    description: "FinFriend is a production-ready, SEO-optimized financial content platform that combines automated news aggregation with a moderated writer ecosystem, secure publishing workflows, real-time reader–writer messaging, and an admin-controlled CMS delivering fast, discoverable, and interactive financial insights at scale.",
    tech: ["React", "Next.js", "WebSockets", "Lexical"],
    image: "/finfriend.mp4",
    type:"vid",
    link: "https://github.com/aman-proj/finfriend",
    github: "https://github.com/aman-proj/finfriend",
    demo:"https://www.finfriend-dt.com/"
  },
  {
    id: "UF-03",
    type: "PROJECT",
    title: "Farmmitra",
    description: "FarmMitra is an AI-powered marketplace connecting farmers with eco-conscious companies to convert agricultural waste into value. An integrated AI chatbot, learning hub, and community forum support listings, pricing guidance, and sustainable practices, while AI-driven insights estimate fair value, recommend reuse pathways, and track carbon savings for ESG impact.",
    tech: ["React", "Tailwind", "Figma","MERN"],
    image: "/farmmitra.mp4",
    link: "https://github.com/aman-proj/mitra-farm",
    github: "https://github.com/aman-proj/mitra-farm"
  },
  {
    id: "UF-03",
    type: "PROJECT",
    title: "Aquasense",
    description: "AquaSense is an AI + IoT–driven water management platform that monitors water quality in real time, applies ML for intelligent reuse decisions, enables smart routing, and supports operations through AI agents, analytics dashboards, and a built-in community learning system.",
    tech: ["React", "Tailwind", "Python","Next.js"],
    image: "/aquasense.png",
    link: "https://github.com/aman-proj/aqua_sense/",
    github: "https://github.com/aman-proj/aqua_sense/"
  },
  {
    id: "RV-04",
    type: "REVIEW",
    title: "Client Feedback",
    description: "Documented testimony from global collaborators regarding system reliability and execution precision.",
    tech: ["Testimonial", "Verified"],
    image: "/review.mp4",
    type:"vid",
    link: "#",
    isReview: true
  }
];

export function CaseFiles() {
  const [activeChannel, setActiveChannel] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const nextChannel = () => {
    if (isSwitching) return;
    setIsSwitching(true);
    setReviewMode(false);
    
    setTimeout(() => {
      setActiveChannel((prev) => (prev + 1) % (PROJECTS.length - 1)); // Cycles through projects only
      setIsSwitching(false);
    }, 600);
  };

  const playReview = () => {
    if (isSwitching) return;
    setIsSwitching(true);
    
    setTimeout(() => {
      setActiveChannel(PROJECTS.length - 1); // Jump to review channel
      setReviewMode(true);
      setIsSwitching(false);
    }, 600);
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/40">
              Folder_02 / Projects
            </span>
            <h2 className="font-serif text-6xl md:text-8xl text-white uppercase tracking-tighter">
              Archive of<br />Case Files
            </h2>
          </div>
          <div className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase max-w-[250px] text-left md:text-right">
            A curated selection of technical deployments, system architectures, and digital experiments.
          </div>
        </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center w-full">
            
            {/* VINTAGE TV UNIT */}
            <div className="relative w-full lg:w-[65%] max-w-[800px]">
              {/* TV ANTENNA - HIDDEN ON SMALL MOBILE */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full hidden md:flex justify-center pointer-events-none">
                <div className="relative h-40 w-64">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-800 rounded-full border border-white/10" />
                  <motion.div 
                    animate={{ rotate: [20, 22, 20] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-4 left-[46%] w-[2px] h-48 bg-zinc-700 origin-bottom -rotate-[25deg]" 
                  />
                  <motion.div 
                    animate={{ rotate: [-30, -28, -30] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-4 left-[54%] w-[2px] h-56 bg-zinc-700 origin-bottom rotate-[30deg]" 
                  />
                </div>
              </div>

              {/* TV CASE */}
              <div className="relative bg-[#1a1a1a] p-4 md:p-14 rounded-[40px] md:rounded-[60px] shadow-[0_60px_120px_rgba(0,0,0,0.9)] border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[40px] md:rounded-[60px] pointer-events-none" />
                
                <div className="grid grid-cols-12 gap-6 md:gap-10">
                  {/* SCREEN SECTION */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="relative aspect-[4/3] bg-zinc-950 rounded-[20px] md:rounded-[40px] overflow-hidden border-[8px] md:border-[16px] border-[#111] shadow-[inset_0_0_60px_rgba(0,0,0,1)]">
                      <div className="absolute inset-0 bg-black">
                        <AnimatePresence mode="wait">
                          {!isSwitching ? (
                            <motion.div
                              key={activeChannel}
                              initial={{ opacity: 0, scale: 1.1, filter: "brightness(3) contrast(1.5) blur(15px)" }}
                              animate={{ opacity: 1, scale: 1, filter: "brightness(1) contrast(1.1) blur(0px)" }}
                              exit={{ opacity: 0, filter: "blur(5px) brightness(0.2)" }}
                              transition={{ duration: 0.5 }}
                              className="w-full h-full relative"
                            >
                              {/* <img 
                                src={PROJECTS[activeChannel].image} 
                                alt={PROJECTS[activeChannel].title}
                                className={`w-full h-full object-cover transition-all duration-700 ${PROJECTS[activeChannel].isReview ? 'brightness-125 saturate-200' : 'sepia-[0.4] saturate-[0.6] brightness-90 contrast-110'}`}
                              /> */}
                              {PROJECTS[activeChannel].image?.endsWith(".mp4") ? (
  <video
    src={PROJECTS[activeChannel].image}
    autoPlay

    loop
    playsInline
    className="w-full h-full object-cover transition-all duration-700 brightness-125 saturate-200"
  />
) : (
  <img
    src={PROJECTS[activeChannel].image}
    alt={PROJECTS[activeChannel].title}
    className="w-full h-full object-cover transition-all duration-700 sepia-[0.4] saturate-[0.6] brightness-90 contrast-110"
  />
)}

                              
                              {/* CRT OVERLAYS */}
                              <div className="absolute inset-0 scanline pointer-events-none" />
                              <div className="absolute inset-0 crt-flicker pointer-events-none opacity-40" />
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                              
                              <div className="absolute top-4 left-4 md:top-8 md:left-8 font-mono text-[8px] md:text-[11px] text-white/60 tracking-[0.4em] uppercase bg-black/60 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 flex items-center gap-2 md:gap-3 rounded-sm border border-white/5">
                                {PROJECTS[activeChannel].isReview ? 'LIVE REVIEW' : `CHANNEL ${activeChannel + 1}`}
                                {PROJECTS[activeChannel].isReview && (
                                  <motion.div 
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                                  />
                                )}
                              </div>
                            </motion.div>
                          ) : (
                            <div className="absolute inset-0 bg-white/20 noise mix-blend-screen opacity-50 animate-pulse" />
                          )}
                        </AnimatePresence>
                      </div>
                      
                      {/* AUDIO INDICATOR FOR REVIEWS */}
                      {PROJECTS[activeChannel].isReview && !isSwitching && (
                        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-1 md:gap-1.5 items-end h-4 md:h-6">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
                              transition={{ duration: 0.4 + i * 0.1, repeat: Infinity }}
                              className="w-[2px] md:w-[3px] bg-red-500/80 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* GLASS REFLECTION */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-[20px] md:rounded-[40px]" />
                    </div>
                  </div>
  
                  {/* CONTROL PANEL SECTION */}
                  <div className="col-span-12 md:col-span-3 flex md:flex-col justify-around md:justify-between items-center py-2 md:py-4 bg-[#111] md:bg-transparent rounded-2xl md:rounded-none p-4 md:p-0">
                    {/* CHANNEL DIAL - HIDDEN ON VERY SMALL */}
                    <div className="hidden sm:flex flex-col items-center gap-2 md:gap-3">
                      <div className="font-mono text-[7px] md:text-[8px] uppercase text-white/20 tracking-[0.4em]">Channel</div>
                      <div className="relative w-10 h-10 md:w-14 md:h-14 bg-[#0a0a0a] rounded-full border border-white/10 shadow-2xl flex items-center justify-center">
                        <motion.div 
                          animate={{ rotate: activeChannel * 45 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="w-6 md:w-8 h-[2px] bg-zinc-600 rounded-full relative"
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-1 md:h-1.5 bg-white/20 rounded-full" />
                        </motion.div>
                      </div>
                    </div>
  
                    {/* NEXT BUTTON */}
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                      <button
                        onClick={nextChannel}
                        className="group relative w-12 h-12 md:w-16 md:h-16 flex flex-col items-center justify-center transition-all active:scale-90"
                      >
                        <div className="absolute inset-0 bg-[#2a2a2a] rounded-full border-b-[3px] md:border-b-4 border-black/60 shadow-xl group-hover:bg-[#333]" />
                        <div className="relative z-10 font-mono text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest font-bold">NEXT</div>
                      </button>
                      <div className="font-mono text-[6px] md:text-[7px] uppercase text-white/10 tracking-widest">Project</div>
                    </div>
  
                    {/* REVIEW BUTTON */}
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                      <button
                        onClick={playReview}
                        className="group relative w-12 h-12 md:w-16 md:h-16 flex flex-col items-center justify-center transition-all active:scale-90"
                      >
                        <div className={`absolute inset-0 rounded-full border-b-[3px] md:border-b-4 border-black/60 shadow-xl transition-colors ${reviewMode ? 'bg-red-900/40' : 'bg-[#2a2a2a] group-hover:bg-[#333]'}`} />
                        <div className="relative z-10 font-mono text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest font-bold">PLAY</div>
                      </button>
                      <div className="font-mono text-[6px] md:text-[7px] uppercase text-white/10 tracking-widest">Review</div>
                    </div>
  
                    {/* SPEAKER GRILLE - HIDDEN ON MOBILE */}
                    <div className="hidden md:flex flex-col gap-2 w-full max-w-[50px]">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-[2px] w-full bg-black/80 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* TV LEGS */}
              <div className="flex justify-between px-16 md:px-28 -mt-2 md:-mt-4 relative z-0">
                <div className="w-6 h-10 md:w-8 md:h-16 bg-[#0f0f0f] rounded-b-xl md:rounded-b-2xl rotate-[15deg] shadow-2xl border border-white/5" />
                <div className="w-6 h-10 md:w-8 md:h-16 bg-[#0f0f0f] rounded-b-xl md:rounded-b-2xl -rotate-[15deg] shadow-2xl border border-white/5" />
              </div>
            </div>
  
            {/* PROJECT INFO */}
            <div className="w-full lg:w-[35%] space-y-8 md:space-y-10 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChannel}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/30 flex items-center gap-3">
                    <div className="w-6 h-px bg-white/10" />
                    Entry: {PROJECTS[activeChannel].id}
                  </span>
                  <h2 className="font-serif text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9]">
                    {PROJECTS[activeChannel].title}
                  </h2>
                </div>
                
                <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed font-light">
                  {PROJECTS[activeChannel].description}
                </p>
                
                <div className="flex flex-wrap gap-2.5">
                  {PROJECTS[activeChannel].tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/[0.03] border border-white/10 font-mono text-[9px] text-white/40 uppercase tracking-widest rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
<div className="pt-10 flex flex-col md:flex-row gap-8">
  {/* Demo Button (only if present) */}
  {PROJECTS[activeChannel].demo && (
    <a
      href={PROJECTS[activeChannel].demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 
                 font-mono text-[10px] 
                 tracking-[0.35em] uppercase 
                 text-white/60 hover:text-white 
                 transition"
    >
      <span className="w-8 h-px bg-white/20" />
      -Recorded Demonstration/Live link
    </a>
  )}
  </div>
                <div className="pt-10 flex flex-col md:flex-row gap-8">
                  {/* View Project Button */}
                  <a 
                    href={PROJECTS[activeChannel].link}
                    className="group flex items-center gap-6"
                  >
                    <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white transition-colors duration-500" />
                      <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                      <svg className="w-4 h-4 text-white group-hover:text-black transition-colors relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-mono text-[10px] text-white uppercase tracking-[0.4em]">Details</div>
                      <div className="h-px w-0 bg-white/30 group-hover:w-full transition-all duration-700" />
                    </div>
                  </a>

                  {/* GitHub Button */}
                  {PROJECTS[activeChannel].github && (
                    <a 
                      href={PROJECTS[activeChannel].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-6"
                    >
                      <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white transition-colors duration-500" />
                        <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                        <svg className="w-5 h-5 text-white group-hover:text-black transition-colors relative z-10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-mono text-[10px] text-white uppercase tracking-[0.4em]">Repository</div>
                        <div className="h-px w-0 bg-white/30 group-hover:w-full transition-all duration-700" />
                      </div>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
