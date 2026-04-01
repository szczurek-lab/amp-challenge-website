import { motion } from "framer-motion";
import { Globe, Plus, Minus, ShieldAlert, Activity } from "lucide-react";

const categories = [
  { icon: Globe, title: "Broad-Spectrum Activity", desc: "Ranked by team average of Overall Success Rate across all 20 strains, with ties broken by MIC90." },
  { icon: ArrowUpRight, title: "Gram-Positive Activity", desc: "Ranked by team average of Gram-positive Success Rate, with ties broken by MIC50 across Gram-positive strains." },
  { icon: ArrowDownRight, title: "Gram-Negative Activity", desc: "Ranked by team average of Gram-negative Success Rate, with ties broken by MIC50 across Gram-negative strains." },
  { icon: ShieldAlert, title: "MDR ESKAPE Activity", desc: "Ranked by team average of MDR Success Rate against 8 multi-drug resistant ESKAPE isolates, with ties broken by MIC50." },
  { icon: Activity, title: "Optimal Selectivity", desc: "Ranked by team average of Safety Window (HC50 / MIC50). Peptides must meet the Potency Threshold in at least one strain to qualify." },
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
        Teams compete across five categories. A peptide is classified as active if its MIC ≤ 16 µM (Potency Threshold).
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
