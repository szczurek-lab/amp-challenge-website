import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Overlay */}
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 section-container text-center py-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
          International Competition
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6 text-glow">
          AMP Challenge
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-surface-foreground leading-relaxed mb-10">
          The first standardized, head-to-head benchmarking competition for
          generative AI in antimicrobial peptide design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/cgDqw7cZe49awwRv6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Submit Your Model
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center font-semibold border border-border text-foreground px-8 py-3.5 rounded-lg text-base hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>

    </div>
  </section>
);

export default HeroSection;
