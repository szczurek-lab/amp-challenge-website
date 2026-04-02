import { motion } from "framer-motion";

const gramNeg = [
  "A. baumannii ATCC 19606",
  "A. baumannii ATCC BAA-1605 (CGTPACCIMRA) [MDR]",
  "E. cloacae ATCC 13047",
  "E. coli ATCC 11775",
  "E. coli AIC221",
  "E. coli AIC222 (CRE) [MDR]",
  "E. coli ATCC BAA-3170 (CRE) [MDR]",
  "E. coli K-12 BW25113",
  "K. pneumoniae ATCC 13883",
  "K. pneumoniae ATCC BAA-2342 (EIRK) [MDR]",
  "P. aeruginosa PAO1",
  "P. aeruginosa PA14",
  "P. aeruginosa ATCC BAA-3197 (FBCRP) [MDR]",
  "S. enterica ATCC 9150",
  "S. enterica Typhimurium ATCC 700720",
];

const gramPos = [
  "B. subtilis ATCC 23857",
  "S. aureus ATCC 12600",
  "S. aureus ATCC BAA-1556 (MRSA) [MDR]",
  "E. faecalis ATCC 700802 (VRE) [MDR]",
  "E. faecium ATCC 700221 (VRE) [MDR]",
];

const mdrStrains = [
  "A. baumannii BAA-1605",
  "E. coli AIC222",
  "E. coli BAA-3170",
  "K. pneumoniae BAA-2342",
  "P. aeruginosa BAA-3197",
  "S. aureus BAA-1556 (MRSA)",
  "E. faecalis ATCC 700802 (VRE)",
  "E. faecium ATCC 700221 (VRE)",
];

const definitions = [
  {
    term: "MIC",
    meaning: "Minimum Inhibitory Concentration, recorded in micromolar (\u00b5M). The highest tested concentration is 64 \u00b5M. For strains where no growth inhibition is observed at this limit, MIC is recorded as >64 \u00b5M.",
  },
  {
    term: "HC50",
    meaning: "Half-maximal hemolytic concentration, recorded in micromolar (\u00b5M). For non-hemolytic peptides reaching the assay limit, HC50 is recorded as >128 \u00b5M.",
  },
  {
    term: "Potency Threshold",
    meaning: "A peptide is considered active if its MIC \u2264 16 \u00b5M.",
  },
  {
    term: "Success Rate",
    meaning: "The percentage of tested strains within a specified panel (Overall, Gram-positive, Gram-negative, or MDR) where the candidate peptide meets the Potency Threshold.",
  },
  {
    term: "MIC50",
    meaning: "The median MIC value across all strains in the relevant panel (50th percentile).",
  },
  {
    term: "MIC90",
    meaning: "The MIC value at the 90th percentile across all strains in the relevant panel.",
  },
  {
    term: "Safety Window (SW)",
    meaning: "Calculated as SW = HC50 / MIC50 across all 20 strains. For non-hemolytic peptides reaching the 128 \u00b5M assay limit, HC50 is recorded as >128 \u00b5M, yielding an inequality for the SW.",
  },
];

const protocols = [
  "All tested peptides are synthesized under the same vendor workflow (AAPPtec) and subjected to the same minimum quality control for identity and purity.",
  "Peptide synthesis is purchased by the Ewa Szczurek lab at Helmholtz Munich and the University of Warsaw.",
  "Wet-lab work is conducted by the Cesar de la Fuente group at the University of Pennsylvania.",
  "All MIC measurements use the same broth microdilution protocol, inoculum size, media, solvent policy, and incubation conditions for all teams.",
  "Appropriate positive and negative controls are included in every experimental batch.",
  "All experimental samples are blinded to team identity and tested in randomized order.",
];

const StrainItem = ({ s }: { s: string }) => (
  <li className="text-xs text-surface-foreground font-mono leading-5">
    {s.includes("[MDR]") ? (
      <>
        {s.replace(" [MDR]", "")}
        <span className="ml-1 text-[10px] bg-accent/15 text-accent px-1 py-0.5 rounded font-semibold">MDR</span>
      </>
    ) : s}
  </li>
);

const BacterialPanelSection = () => (
  <section id="bacterial-panel" className="py-14 md:py-20 bg-secondary/30">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-2xl md:text-3xl text-center mb-2"
      >
        Official Bacterial Panel
      </motion.h2>
      <p className="text-center text-muted-foreground text-sm mb-8">20 clinically relevant strains</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6 items-start">
        {/* Strains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-5"
        >
          <h3 className="font-display font-semibold text-sm mb-2">
            Gram-Negative <span className="text-muted-foreground font-normal text-xs">(15)</span>
          </h3>
          <ul className="space-y-0.5 mb-5">
            {gramNeg.map((s) => <StrainItem key={s} s={s} />)}
          </ul>

          <h3 className="font-display font-semibold text-sm mb-2">
            Gram-Positive <span className="text-muted-foreground font-normal text-xs">(5)</span>
          </h3>
          <ul className="space-y-0.5 mb-5">
            {gramPos.map((s) => <StrainItem key={s} s={s} />)}
          </ul>

          <h3 className="font-display font-semibold text-sm mb-2">
            MDR Subset <span className="text-muted-foreground font-normal text-xs">(8 strains scored in the MDR category)</span>
          </h3>
          <ul className="space-y-0.5">
            {mdrStrains.map((s) => (
              <li key={s} className="text-xs text-surface-foreground font-mono leading-5">{s}</li>
            ))}
          </ul>
        </motion.div>

        {/* Definitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5"
        >
          <h3 className="font-display font-semibold text-sm mb-4">Definitions and Parameters</h3>
          <div className="space-y-3">
            {definitions.map((d) => (
              <div key={d.term}>
                <span className="font-semibold text-xs text-primary">{d.term}:</span>{" "}
                <span className="text-xs text-muted-foreground leading-relaxed">{d.meaning}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Wet-lab protocols */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <h3 className="font-display font-semibold text-lg mb-5">Standardized Wet-Lab Validation Protocols</h3>
        <ul className="space-y-3">
          {protocols.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary shrink-0">{"•"}</span>
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default BacterialPanelSection;
