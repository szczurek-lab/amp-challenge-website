import { motion } from "framer-motion";

const gramNeg = [
  "A. baumannii ATCC 19606",
  "A. baumannii BAA-1605 [MDR]",
  "E. cloacae ATCC 13047",
  "E. coli ATCC 11775",
  "E. coli AIC221",
  "E. coli AIC222 (CRE) [MDR]",
  "E. coli BAA-3170 (CRE) [MDR]",
  "E. coli K-12 BW25113",
  "K. pneumoniae ATCC 13883",
  "K. pneumoniae BAA-2342 [MDR]",
  "P. aeruginosa PAO1",
  "P. aeruginosa PA14",
  "P. aeruginosa BAA-3197 [MDR]",
  "S. enterica ATCC 9150",
  "S. enterica Typhimurium ATCC 700720",
];

const gramPos = [
  "B. subtilis ATCC 23857",
  "S. aureus ATCC 12600",
  "S. aureus BAA-1556 (MRSA) [MDR]",
  "E. faecalis ATCC 700802 (VRE) [MDR]",
  "E. faecium ATCC 700221 (VRE) [MDR]",
];

const BacterialPanelSection = () => (
  <section className="py-24 md:py-32 bg-secondary/30">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-4"
      >
        Official Bacterial Panel
      </motion.h2>
      <p className="text-center text-muted-foreground mb-16">20 clinically relevant strains</p>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-5"
        >
          <h3 className="font-display font-semibold text-sm mb-2">
            Gram-Negative <span className="text-muted-foreground font-normal text-xs">(15)</span>
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5">
            {gramNeg.map((s) => (
              <li key={s} className="text-xs text-surface-foreground font-mono leading-5">
                {s.includes("[MDR]") ? (
                  <>
                    {s.replace(" [MDR]", "")}
                    <span className="ml-1 text-[10px] bg-accent/15 text-accent px-1 py-0.5 rounded font-semibold">MDR</span>
                  </>
                ) : s}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5"
        >
          <h3 className="font-display font-semibold text-sm mb-2">
            Gram-Positive <span className="text-muted-foreground font-normal text-xs">(5)</span>
          </h3>
          <ul className="space-y-0.5">
            {gramPos.map((s) => (
              <li key={s} className="text-xs text-surface-foreground font-mono leading-5">
                {s.includes("[MDR]") ? (
                  <>
                    {s.replace(" [MDR]", "")}
                    <span className="ml-1 text-[10px] bg-accent/15 text-accent px-1 py-0.5 rounded font-semibold">MDR</span>
                  </>
                ) : s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BacterialPanelSection;
