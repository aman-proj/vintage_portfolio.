"use client";
import { motion } from "framer-motion";

const TOOL_CATEGORIES = [
  {
    title: "Core_Architectures",
    items: ["C++", "Python", "JavaScript", "Java", "PHP", "Go"]
  },
  {
    title: "Framework_Engines",
    items: ["Next.js", "React", "Node.js", "FastAPI", "Express"]
  },
  {
    title: "Data_Registries",
    items: ["MongoDB", "PostgreSQL", "Neon", "Pinecone", "Redis"]
  },
  {
    title: "Specialized_Intelligence",
    items: ["LangChain", "TensorFlow", "NumPy", "Scikit-Learn"]
  },
  {
    title: "System_Protocols",
    items: ["Git", "Linux", "Docker", "AWS", "OpenMP", "MPI"]
  }
];

export function Tools() {
  return (
    <section className="py-40 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-px bg-white/20" />
               <span className="font-mono text-[10px] tracking-[0.6em] uppercase text-white/40">Technical Index // Folder_04</span>
            </div>
            <h2 className="font-serif text-6xl md:text-9xl text-white uppercase tracking-tighter leading-none">
              Tool<br /><span className="text-white/40 italic">Drawer</span>
            </h2>
          </div>
          <div className="max-w-xs text-right">
             <p className="font-mono text-[9px] text-white/20 uppercase tracking-widest leading-loose">
               The following modules represent the current operational stack utilized for systems engineering and architectural development.
             </p>
          </div>
        </div>

        <div className="space-y-px bg-white/5 border border-white/5">
          {TOOL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 bg-[#0a0a0a] group"
            >
              {/* Category Label */}
              <div className="md:col-span-3 p-8 border-r border-white/5 flex flex-col justify-between group-hover:bg-white/[0.02] transition-colors">
                <div className="font-mono text-[8px] text-white/20 uppercase tracking-[0.5em]">Class_{String(idx + 1).padStart(2, '0')}</div>
                <div className="font-mono text-xs text-white/60 group-hover:text-white uppercase tracking-widest transition-colors">
                  {category.title}
                </div>
              </div>

              {/* Items Grid */}
              <div className="md:col-span-9 p-8 flex flex-wrap gap-4 items-center group-hover:bg-white/[0.01] transition-colors">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 border border-white/10 rounded-full font-mono text-[10px] text-white/40 hover:text-white hover:border-white/40 transition-all cursor-crosshair bg-white/[0.02]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specification Footer */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="font-serif text-2xl text-white/60 leading-relaxed italic">
              "Architecting scalability through <span className="text-white not-italic">algorithmic precision</span> and structural integrity."
            </div>
            <div className="flex gap-16">
               <div className="space-y-2">
                 <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Efficiency</div>
                 <div className="font-mono text-xl text-white/80">O(log n)</div>
               </div>
               <div className="space-y-2">
                 <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Availability</div>
                 <div className="font-mono text-xl text-white/80">99.9%</div>
               </div>
               <div className="space-y-2">
                 <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Concurrency</div>
                 <div className="font-mono text-xl text-white/80">Parallel</div>
               </div>
            </div>
          </div>

          <div className="relative border border-white/5 p-12 bg-white/[0.01] flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/10 uppercase tracking-widest">
              AK_SYS_SPEC_2025
            </div>
            <p className="font-mono text-[10px] text-white/30 leading-loose uppercase tracking-widest">
              SYSTEM_LOG: All tools are verified for production environments. 
              The stack is optimized for low-latency distribution and high-availability AI agent deployment. 
              Continuous integration and deployment protocols are strictly enforced.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-green-500/20 flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
               </div>
               <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">Systems Status: Optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[30rem] text-white/[0.01] pointer-events-none select-none -ml-40">
        TOOLS
      </div>
    </section>
  );
}
