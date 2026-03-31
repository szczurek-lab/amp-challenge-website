import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const minimum = [
  "An abstract summarizing the method",
  "50,000 designed AMP sequences for computational evaluation",
  "Ranked top-100 candidate list with selection documentation",
  "Training data summary and disclosure of external databases",
];

const full = [
  "Public GitHub repository with trained weights, inference code, and docs",
  "Permissive OSI-approved license (MIT, BSD-3, Apache 2.0)",
  "Dockerfile for self-contained environment",
  "Single entry-point script producing identical output with fixed seed",
  "Full training data disclosure and release",
];

const constraints = [
  "20 standard proteinogenic amino acids only",
  "Length: 8–50 residues",
  "Linear peptides only",
  "No terminal modifications (including amidation)",
  "No non-canonical AAs, stapled peptides, or specialized chemistries",
];

const SubmissionSection = () => (
  <section id="submission" className="py-24 md:py-32">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-4"
      >
        Submission Requirements
      </motion.h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Any generative approach is welcome: language models, diffusion, VAEs, GFlowNets, RL, Bayesian optimization, evolutionary methods, or hybrids.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Minimum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Minimum Requirements</h3>
          <p className="text-xs text-muted-foreground mb-5">Benchmark participation</p>
          <ul className="space-y-3">
            {minimum.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-surface-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Full */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 border-primary/30"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Full Requirements</h3>
          <p className="text-xs text-primary mb-5">Co-authorship eligibility</p>
          <ul className="space-y-3">
            {full.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-surface-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Design constraints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <h3 className="font-display font-semibold text-lg mb-5">Peptide Design Constraints</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {constraints.map((c) => (
            <div key={c} className="flex gap-3 text-sm text-surface-foreground">
              <span className="text-primary">—</span>
              {c}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SubmissionSection;
