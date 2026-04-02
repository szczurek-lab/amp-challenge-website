import { motion } from "framer-motion";
import { Award, Database, Scale } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Co-authorship",
    desc: "All teams advancing to the experimental validation phase will be co-authors on the jointly published benchmarking paper and will receive full experimental results for all tested peptides.",
  },
  {
    icon: Database,
    title: "Public Archival",
    desc: "Models and code will be archived in a public repository cited in the paper. All tested peptides will be deposited to the DBAASP and APD3 databases.",
  },
  {
    icon: Scale,
    title: "Data Sharing and IP",
    desc: "All results will be made public, including submitted sequences and all MIC and HC50 measurements across all tested strains. Raw and processed experimental data will be released after the challenge under a CC-BY 4.0 license to maximize community reuse. Data sharing will follow University of Pennsylvania guidelines.",
  },
];

const RecognitionSection = () => (
  <section id="recognition" className="py-24 md:py-32">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-16"
      >
        Recognition & Data Sharing
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RecognitionSection;
