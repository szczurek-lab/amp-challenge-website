import { motion } from "framer-motion";
import { Globe, ArrowUpRight, ArrowDownRight, ShieldAlert, Activity } from "lucide-react";

const categories = [
  { icon: Globe, title: "Broad-Spectrum Activity", desc: "Ranked by team average of Overall Success Rate × Geometric Mean RP across all 20 strains." },
  { icon: ArrowUpRight, title: "Gram-Positive Activity", desc: "Success Rate × Geometric Mean RP across the 5 Gram-positive strains." },
  { icon: ArrowDownRight, title: "Gram-Negative Activity", desc: "Success Rate × Geometric Mean RP across the 15 Gram-negative strains." },
  { icon: ShieldAlert, title: "MDR ESKAPE Activity", desc: "Success Rate × Geometric Mean RP against 8 multi-drug resistant ESKAPE isolates." },
  { icon: Activity, title: "Optimal Selectivity", desc: "Therapeutic Index (HC50 / Geometric Mean MIC) weighted by Success Rate for active peptides." },
];

const CategoriesSection = () => (
  <section id="categories" className="py-24 md:py-32">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-4"
      >
        Competition Categories
      </motion.h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Teams compete across five categories. A peptide is classified as active if its Relative Potency RP ≥ 0.25.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-7 hover:border-primary/40 transition-colors group"
          >
            <c.icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-semibold mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
