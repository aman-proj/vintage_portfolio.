"use client";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    period: "JUNE 2025 — AUG 2025",
    role: "Freelance Developer",
    company: "FinFriend",
    details: "Built a production-ready financial content platform. Improved page load time by 35-45% through SEO and rendering optimization."
  },
  {
    period: "MAY 2025 — JULY 2025",
    role: "UI/UX Intern",
    company: "Unifindss",
    details: "Delivered 12+ responsive UI screens and applied usability testing, improving user flow efficiency by 30%."
  },
  {
    period: "SEP 2024 — AUG 2025",
    role: "Sub-Lead (Technical)",
    company: "Beta Labs IIIT-K",
    details: "Coordinated multi-team projects, conducted code reviews, and mentored juniors in the technical club."
  },
  {
    period: "AUG 2024 — AUG 2025",
    role: "Sub-Lead (Cultural)",
    company: "Trendles IIIT-K",
    details: "Organized large-scale events and managed sponsorships, strengthening leadership and cross-team efforts."
  }
];

export function Timeline() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/40">
              Folder_03 / History
            </span>
            <h2 className="font-serif text-6xl md:text-8xl text-white uppercase tracking-tighter">
              Timeline of<br />Practice
            </h2>
          </div>
          <div className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase max-w-[200px] text-right">
            Systematic documentation of professional evolution and technical contributions.
          </div>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
          
          <div className="space-y-24 md:space-y-32">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8 md:gap-0`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 md:px-12">
                  <div className={`p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group hover:bg-white/[0.04] transition-colors duration-500 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-1 h-full bg-white/10 group-hover:bg-white/40 transition-colors`} />
                    
                    <div className="font-mono text-[9px] text-white/30 tracking-[0.3em] mb-4 uppercase">
                      [{exp.period}]
                    </div>
                    <h4 className="font-serif text-3xl text-white mb-2 uppercase tracking-tight group-hover:tracking-wide transition-all duration-500">
                      {exp.role}
                    </h4>
                    <div className="font-mono text-[11px] text-white/60 tracking-widest mb-6 uppercase italic">
                      // {exp.company}
                    </div>
                    <p className={`font-sans text-sm text-white/40 leading-relaxed max-w-sm ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      {exp.details}
                    </p>
                  </div>
                </div>

                {/* Point on Line */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-black border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                </div>

                {/* Empty Side (for Desktop layout spacing) */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Stamp */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-mono text-[20rem] text-white/[0.02] font-bold pointer-events-none select-none -translate-x-1/3 rotate-90">
        PRACTICE
      </div>
    </section>
  );
}
