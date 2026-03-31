import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Submit",
    desc: "Generate 50,000 AMP sequences and rank your top 100 candidates. Any generative approach is welcome.",
  },
  {
    num: "02",
    title: "Computational Screening",
    desc: "Libraries evaluated for diversity, novelty, and physicochemical properties using the seqme framework. Top 15 teams advance if capacity is exceeded.",
  },
  {
    num: "03",
    title: "Experimental Validation",
    desc: "Peptides randomly sampled from your top 100 are synthesized and tested for MIC and HC50 by the de la Fuente group at UPenn.",
  },
  {
    num: "04",
    title: "Results & Publication",
    desc: "Winners announced at the GEM Workshop (ICLR 2027, Singapore). Joint benchmarking paper for teams meeting full requirements.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-16"
      >
        How It Works
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative glass-card p-8"
          >
            <span className="font-mono text-5xl font-bold text-primary/15 absolute top-4 right-6">
              {s.num}
            </span>
            <h3 className="font-display font-semibold text-lg mb-3 mt-6">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
