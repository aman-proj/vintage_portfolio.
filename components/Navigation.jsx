// "use client";
// import { motion } from "framer-motion";

// export function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-transparent backdrop-blur-[2px]"
//     >
//       <div className="font-serif text-lg text-white tracking-widest uppercase">
//         AK
//       </div>
      
//       <div className="flex gap-8 md:gap-12">
//         {["Archive", "Case Files", "Practice"].map((item) => (
//           <button 
//             key={item}
//             className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors"
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       <div className="hidden md:block font-mono text-[10px] tracking-[0.2em] uppercase text-white/20">
//         LAT: 28.6139° N / LONG: 77.2090° E
//       </div>
//     </motion.nav>
//   );
// }

// export function Footer() {
//   return (
//     <footer className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
//         <div className="space-y-6">
//           <div className="font-serif text-4xl text-white tracking-widest uppercase">
//             Aman Kumar
//           </div>
//           <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase max-w-xs leading-relaxed">
//             Engineering systems with archival intent. Designed for the long term.
//           </p>
//         </div>

//         <div className="space-y-4">
//           <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
//             Contact / Transmission
//           </div>
//           <div className="flex flex-col gap-2">
//             {["Email", "GitHub", "LinkedIn", "X"].map((link) => (
//               <a 
//                 key={link}
//                 href="#"
//                 className="font-sans text-sm text-white/60 hover:text-white transition-colors flex items-center gap-4 group"
//               >
//                 {link}
//                 <span className="w-4 h-[1px] bg-white/10 group-hover:w-8 transition-all" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 font-mono text-[9px] text-white/10 tracking-[0.4em] uppercase">
//         <div>© 2024-2025 Aman Kumar / Personal Archive</div>
//         <div>All Systems Operational</div>
//       </div>
//     </footer>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Code2, Mail, ArrowUpRight, Globe, ShieldCheck } from "lucide-react";

export function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Archive", id: "archive" },
    { label: "Case Files", id: "case-files" },
    { label: "Practice", id: "practice" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-transparent backdrop-blur-[2px]"
    >
      <div className="font-serif text-xl text-white tracking-[0.2em] uppercase cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        AK<span className="text-white/20 group-hover:text-white transition-colors duration-500">_ARCHIVE</span>
      </div>
      
      <div className="flex gap-6 md:gap-12">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all duration-300 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
          </button>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-4 font-mono text-[9px] tracking-[0.2em] uppercase text-white/20">
        <div className="w-2 h-2 rounded-full bg-green-500/40 animate-pulse" />
        SYSTEM_ACTIVE // {new Date().getFullYear()}
      </div>
    </motion.nav>
  );
}

export function Footer() {
  return (
    <footer className="py-20 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.01] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="font-serif text-6xl md:text-8xl text-white tracking-tight uppercase leading-[0.8] mb-4">
                  Aman<br/><span className="text-white/20">Kumar</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-white/20" />
                  <span className="font-mono text-[10px] text-white/40 tracking-[0.5em] uppercase italic">EST. 2021 // VOL_IV</span>
                </div>
              </div>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-white/20 tracking-[0.5em] uppercase flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" />
                    Contact & Connectivity
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white uppercase tracking-tight">
                    Let's <span className="text-white/20 italic">Connect</span>
                  </h3>
                </div>

                  <div className="flex flex-wrap gap-8">
                    {[
                      { icon: <Github size={28} />, url: "https://github.com/aman-kumar", label: "GitHub" },
                      { icon: <Linkedin size={28} />, url: "#", label: "LinkedIn" },
                      { icon: <Instagram size={28} />, url: "#", label: "Instagram" },
                      { icon: <Code2 size={28} />, url: "#", label: "Codolio" },
                      { icon: <Mail size={28} />, url: "mailto:contact@aman.dev", label: "Email" }
                    ].map((social) => (
                    <a 
                      key={social.label}
                      href={social.url}
                      className="group relative flex flex-col items-center gap-5"
                      aria-label={social.label}
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-sm border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/60 group-hover:bg-white/[0.08] transition-all duration-700 overflow-hidden relative shadow-2xl">
                        {/* Interactive Scanline Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full -translate-y-full group-hover:translate-y-[200%] transition-transform duration-[1.5s] ease-in-out" />
                        
                        <div className="relative z-10 group-hover:scale-125 transition-transform duration-500 ease-out">
                          {social.icon}
                        </div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover:border-white/40 transition-all duration-300" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-white/40 transition-all duration-300" />
                      </div>
                      <span className="font-mono text-[10px] text-white/20 group-hover:text-white/80 tracking-[0.4em] uppercase transition-all duration-500 group-hover:translate-y-1">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
  
          <div className="md:col-span-3 space-y-10">
            <div className="font-mono text-[10px] text-white/20 tracking-[0.5em] uppercase flex items-center gap-3">
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              Navigation
            </div>
            <div className="flex flex-col gap-6">
              {[
                { name: "Archive Records", id: "archive" },
                { name: "System Case Files", id: "case-files" },
                { name: "Practice Log", id: "practice" },
                { name: "Terminal Start", id: "hero" }
              ].map((link) => (
                <button 
                  key={link.name}
                  onClick={() => {
                    const el = document.getElementById(link.id);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-mono text-[11px] text-white/50 hover:text-white transition-all duration-300 flex items-center gap-4 group text-left uppercase tracking-widest"
                >
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-10">
            <div className="font-mono text-[10px] text-white/20 tracking-[0.5em] uppercase flex items-center gap-3">
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              Technical Data
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest flex items-center gap-2">
                  <Globe size={12} /> Origin: Delhi, IN
                </div>
                <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest pl-5">
                  Node: Terminal_IIIT_K
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Security Status</div>
                  <ShieldCheck size={12} className="text-green-500/50" />
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="h-full bg-white/20"
                  />
                </div>
                <div className="font-mono text-[8px] text-white/20 uppercase tracking-[0.3em]">Encrypted_Transmission_Active</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 md:mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] text-white/10 tracking-[0.5em] uppercase">
          <div className="flex gap-12">
            <span>© {new Date().getFullYear()} Aman Kumar</span>
            <span className="hidden md:inline">Archival ID: AK-772090</span>
          </div>
          <div className="flex gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/30 animate-pulse" />
              System: Operational
            </div>
            <span>Build: 2.0.4-LATEST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
