import { motion } from "framer-motion";

const milestones = [
  { date: "April 2026", label: "Competition call opens" },
  { date: "September 1, 2026 AOE", label: "Submission deadline" },
  { date: "September 2026", label: "Phase 1 computational evaluation" },
  { date: "Oct 2026 to Feb 2027", label: "Peptide synthesis window" },
  { date: "Mar to Apr 2027", label: "Experimental validation (MIC / HC50) and final data analysis" },
  { date: "TBA", label: "Results shared at dedicated events" },
  { date: "Late 2027", label: "Benchmarking paper submission" },
];

const TimelineSection = () => (
  <section id="timeline" className="py-24 md:py-32 bg-secondary/30">
    <div className="section-container max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-16"
      >
        Key Dates
      </motion.h2>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {milestones.map((m, i) => (
          <motion.div
            key={m.date}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative flex items-start gap-6 mb-10 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-10 md:ml-0" : "md:pl-10 md:ml-auto"
            }`}
          >
            {/* dot */}
            <div className="absolute left-0 md:left-auto md:right-[-7px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background z-10
              ${i % 2 === 0 ? '' : 'md:left-[-7px] md:right-auto'}" 
              style={i % 2 !== 0 ? { left: "-7px", right: "auto" } : {}}
            />
            <div className="ml-8 md:ml-0">
              <p className="font-mono text-sm text-primary mb-1">{m.date}</p>
              <p className="text-sm text-surface-foreground">{m.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
