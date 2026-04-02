import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, BarChart3, Database, BookOpen, TestTubes, FileSearch, Layers } from "lucide-react";

const highlights = [
  {
    icon: FlaskConical,
    title: "Free Wet-Lab Validation",
    desc: "25 peptides per team are synthesized and tested at no cost. MIC assays against 20 bacterial strains and HC50 measurements are performed by the de la Fuente lab at UPenn.",
  },
  {
    icon: ShieldCheck,
    title: "Truly Controlled Comparison",
    desc: "Same protocols, same bacterial panel, blinded to team identity, randomized order. Every variable except the model is held constant.",
  },
  {
    icon: BarChart3,
    title: "Open Benchmark Dataset",
    desc: "All experimental data released under CC-BY 4.0, including both successful and unsuccessful peptides to reduce publication bias.",
  },
];

const outcomes = [
  {
    icon: Database,
    title: "Benchmark Dataset",
    desc: "An open dataset pairing computational metrics with standardized experimental MIC data.",
  },
  {
    icon: Layers,
    title: "Public Model Repository",
    desc: "Submitted methods, trained weights, code, and detailed usage documentation from all participating teams.",
  },
  {
    icon: BookOpen,
    title: "Benchmarking Paper",
    desc: "A jointly authored paper reporting the first controlled, head-to-head comparison of generative approaches for AMP design.",
  },
  {
    icon: FileSearch,
    title: "Metric Validation",
    desc: "Empirical evidence identifying which computational metrics, ranking strategies, and filtering rules are actually associated with experimental antimicrobial efficacy.",
  },
  {
    icon: TestTubes,
    title: "Curated Peptide Set",
    desc: "A set of both successful and unsuccessful experimentally tested peptides, essential for reducing publication bias and improving future model development.",
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
        <p className="text-surface-foreground leading-relaxed mb-4">
          Antimicrobial resistance is one of healthcare's most pressing crises.
          AMPs offer a promising new class of therapeutics, and generative AI is
          increasingly used to design them. But the field currently faces a
          reproducibility problem: published studies rely on different training
          data, different bacterial strains, different assay conditions, different
          levels of human post hoc curation, and different definitions of success.
        </p>
        <p className="text-surface-foreground leading-relaxed">
          As a result, it is frequently unclear whether an apparent success
          reflects the quality of the model itself or the quality of the manual
          selection process. AMP Challenge addresses this through a common
          benchmark design, a shared experimental pipeline, and transparent
          reporting requirements.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
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

      {/* Expected Outcomes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-10"
      >
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
          Expected Outcomes
        </h3>
        <p className="text-muted-foreground">
          The competition will produce the following deliverables for the research community.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {outcomes.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-7 hover:border-primary/40 transition-colors group"
          >
            <o.icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-semibold mb-2">{o.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
