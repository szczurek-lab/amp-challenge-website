import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Submit",
    desc: "Generate 50,000 AMP sequences and rank your top 100 candidates. Any generative approach is welcome: language models, diffusion models, VAEs, GFlowNets, RL, Bayesian optimization, evolutionary methods, or hybrids.",
  },
  {
    num: "02",
    title: "Compliance Check",
    desc: "All submissions undergo an automated compliance screening that verifies sequence validity, amino acid alphabet, length limits, duplicate detection, and metadata completeness. Training data sources, non-public data releases, and repository licenses are also verified. Teams that do not pass are notified and given a fixed window to resolve issues before disqualification.",
  },
  {
    num: "03",
    title: "Computational Screening",
    desc: "Full 50,000-sequence libraries are evaluated using the seqme framework for sequence diversity, novelty relative to known AMP databases, and physicochemical property distributions. Sequences are also screened for exact and near-exact matches against established AMP repositories (DBAASP, dbAMP, APD) to quantify genuinely novel designs versus previously known peptides. If the number of teams exceeds experimental capacity, teams are ranked by this phase and the top 20 advance.",
  },
  {
    num: "04",
    title: "Experimental Validation",
    desc: "From each advancing team's top 100 list, 25 peptides are selected at random, forming a total cohort of 500 peptides. All candidates in the top-100 list must have no more than 80% sequence identity to any peptide in the competition's reference database of known AMPs. Candidates exceeding this threshold are treated as invalid and replaced by the next valid candidate. This random selection ensures the evaluation reflects model robustness rather than a single lucky sequence.",
  },
  {
    num: "05",
    title: "Results & Publication",
    desc: "All MIC and HC50 measurements are performed in a single laboratory under identical protocols. Teams are ranked across five competition categories. Results will be shared at dedicated events (TBA). A joint benchmarking paper is planned for teams meeting full requirements.",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
