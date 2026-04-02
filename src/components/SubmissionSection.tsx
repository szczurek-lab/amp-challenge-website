import { motion } from "framer-motion";
import { CheckCircle2, Info } from "lucide-react";

const minimum = [
  "An abstract summarizing the method",
  "A generated peptide library of 50,000 designed AMPs for computational evaluation",
  "A ranked candidate list of your top 100 AMPs with documentation of your selection and ranking procedure",
  "A short summary describing training data, external databases used, and any manual intervention or computational filters applied",
];

const full = [
  "A public GitHub repository following the provided template (https://github.com/szczurek-lab/amp-challenge-2027) containing trained model weights, inference code, and detailed usage documentation",
  "A permissive OSI-approved license (e.g., MIT, BSD-3-Clause, or Apache 2.0) specified in the repository",
  "A fixed default random seed such that running the generation script twice produces identical output",
  "Full training data disclosure: if any proprietary or non-public data is used, it must be released publicly under a permissive license as part of the submission",
];

const constraints = [
  "20 standard proteinogenic amino acids only",
  "Length: 8 to 50 residues",
  "Linear peptides only",
  "No terminal modifications (free termini), including amidation",
  "No non-canonical AAs, stapled peptides, lipidated, glycosylated, PEGylated, or dendrimeric constructs",
  "Unique sequences only (no duplicates)",
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
        Any generative approach is welcome: language models, diffusion models, VAEs, GFlowNets, RL, Bayesian optimization, evolutionary methods, or hybrids.
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
          <p className="text-xs text-muted-foreground mt-5">
            Teams that meet only the minimum requirements will be included in the experimental benchmark and receive their results, but will not be eligible for co-authorship.
          </p>
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
          <p className="text-xs text-muted-foreground mt-5">
            Commonly used public AMP databases such as DBAASP, APD, and Peptipedia provide open access to peptide data for research purposes. Teams should verify that their use of any data source complies with that source's terms of use.
          </p>
        </motion.div>
      </div>

      {/* Reproducibility */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 mb-8"
      >
        <h3 className="font-display font-semibold text-lg mb-3">Reproducibility Verification</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Organizers will verify reproducibility by running <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">uv sync</code> followed by the entry-point script. The output will be compared against the submitted library.
        </p>
      </motion.div>

      {/* Design constraints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 mb-8"
      >
        <h3 className="font-display font-semibold text-lg mb-5">Peptide Design Constraints</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          All submitted sequences (both the 50,000-member library and the top 100 list) must adhere to the following constraints:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {constraints.map((c) => (
            <div key={c} className="flex gap-3 text-sm text-surface-foreground">
              <span className="text-primary">{"•"}</span>
              {c}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Qualification and organizer note */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-start gap-3 mb-3">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <h3 className="font-display font-semibold text-lg">Qualification for Experimental Validation</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If the number of qualifying teams exceeds experimental capacity, teams will be ranked based on computational evaluation of the peptide library and the top candidate list. A maximum of 20 teams will advance to experimental validation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8"
        >
          <div className="flex items-start gap-3 mb-3">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <h3 className="font-display font-semibold text-lg">Organizer Participation</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Organizing Committee members may participate in the benchmark but are not eligible for prizes or rankings. Their peptides will be tested under the same protocols using a separate experimental pool outside the 500-peptide budget allocated to competing teams.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SubmissionSection;
