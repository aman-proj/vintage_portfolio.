"use client";
import { Hero } from "../components/Hero";
import { ArchiveNote } from "../components/ArchiveNote";
import { CaseFiles } from "../components/CaseFiles";
import { Timeline } from "../components/Timeline";
import { Tools } from "../components/Tools";
import { Achievements } from "../components/Achievements";
import { Navbar, Footer } from "../components/Navigation";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-[#0a0a0a] min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      {/* Global Grain & Dust Overlays */}
      <div className="grain-overlay" />
      <div className="dust-overlay" />
      
      {/* Scroll Progress Bar (Minimal) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1px] bg-white/20 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ margin: "-100px" }}
        >
          <div id="archive">
          <ArchiveNote />
          </div>
        </motion.div>
<div id="case-files">
        <CaseFiles />
        </div>
        <div id="practice">
        <Timeline />
        </div>
        <Tools />
        
        <Achievements />
        
        <Footer />
      </div>

      {/* Archival Border */}
      <div className="fixed inset-0 border-[1px] border-white/5 pointer-events-none z-[70] m-4 md:m-8" />
    </main>
  );
}
