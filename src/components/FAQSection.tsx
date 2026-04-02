import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can participate?",
    a: "Any research team or individual with a computational method for designing antimicrobial peptides is welcome. There are no restrictions on academic affiliation, career stage, or country. Both academic and industry teams may register.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. Participation is free. Peptide synthesis and experimental testing are covered by the organizers.",
  },
  {
    q: "How many peptides does each team get tested?",
    a: "Each qualifying team submits a ranked list of 100 candidates. A random subset of 25 peptides is drawn from the top 50 of this list and tested experimentally. This randomized selection prevents cherry-picking and ensures fair comparison.",
  },
  {
    q: "Can a team submit more than one entry?",
    a: "Each research group may submit one primary entry. If you have meaningfully different methods you would like to compare, please contact the organizers in advance.",
  },
  {
    q: "What happens if some of my peptides fail synthesis or quality control?",
    a: "Peptide orders are placed in advance based on submitted sequences. Sequences that fail synthesis, are insoluble, or do not pass identity and purity QC will not be retested. This makes careful sequence selection important.",
  },
  {
    q: "Do I need wet-lab expertise to participate?",
    a: "No. All experimental work (synthesis, MIC assays, and hemolysis measurements) is performed by the de la Fuente lab at the University of Pennsylvania using standardized protocols. Teams only need to provide their peptide sequences and computational submissions.",
  },
  {
    q: "What computational resources are required?",
    a: "There is no minimum resource requirement. Methods ranging from lightweight scoring functions to large-scale generative models are welcome. The benchmark is intentionally method-agnostic.",
  },
  {
    q: "When will experimental results be released?",
    a: "Results are expected to be communicated to teams within approximately 4-6 months of the submission deadline, subject to synthesis and assay timelines. All data will be publicly released under CC-BY 4.0 following joint publication.",
  },
  {
    q: "How is co-authorship on the benchmarking paper determined?",
    a: "Teams that meet the Full Requirements (including a public repository, permissive license, fixed random seed, and full training data disclosure) are eligible for co-authorship. Teams meeting only the Minimum Requirements receive their experimental results but are not listed as co-authors.",
  },
  {
    q: "Can organizer-affiliated teams compete?",
    a: "Yes, but organizer-affiliated teams are not eligible for prizes or rankings. Their peptides are tested using a separate experimental pool outside the budget allocated to competing teams, under the same protocols.",
  },
  {
    q: "What if more teams register than experimental capacity allows?",
    a: "If qualifying submissions exceed experimental capacity, teams are ranked by computational evaluation of their 50,000-member library and top-100 candidate list. A maximum of 20 teams advance to experimental validation.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
      >
        <span className="font-display font-semibold text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-secondary/30">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-4"
      >
        Frequently Asked Questions
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Prospective answers to common questions. If something is not covered here, open an issue on{" "}
        <a
          href="https://github.com/szczurek-lab/amp-challenge-2027/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
        .
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 md:p-8 max-w-3xl mx-auto"
      >
        {faqs.map((item) => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
