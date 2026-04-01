import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: FlaskConical,
    title: "Free Wet-Lab Validation",
    desc: "25 peptides per team are synthesized and tested at no cost — MIC assays against 20 bacterial strains and HC50 measurements by the de la Fuente lab at UPenn.",
  },
  {
    icon: ShieldCheck,
    title: "Truly Controlled Comparison",
    desc: "Same protocols, same bacterial panel, blinded to team identity, randomized order. Every variable except the model is held constant.",
  },
  {
    icon: BarChart3,
    title: "Open Benchmark Dataset",
    desc: "All experimental data released under CC-BY 4.0 — both successful and unsuccessful peptides to reduce publication bias.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
          Why AMP Challenge?
        </h2>
        <p className="text-surface-foreground leading-relaxed">
          Antimicrobial resistance is one of healthcare's most pressing crises.
          AMPs offer a promising new class of therapeutics, and generative AI is
          increasingly used to design them — but which approaches actually work?
          Without controlled comparisons under matched conditions, it's
          impossible to benchmark real progress.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <h.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-3">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
