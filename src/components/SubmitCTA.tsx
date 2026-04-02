import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SubmitCTA = () => (
  <section id="submit" className="py-24 md:py-32 bg-secondary/30">
    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Ready to Compete?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Submit your generative model and get free wet-lab validation for your designed AMPs.
          Submission deadline: <span className="text-primary font-semibold">September 1, 2026 (AOE)</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/cgDqw7cZe49awwRv6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Submit via Google Forms
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/szczurek-lab/amp-challenge-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold border border-border text-foreground px-8 py-3.5 rounded-lg text-base hover:bg-secondary transition-colors"
          >
            GitHub Template
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SubmitCTA;
