import { motion } from "framer-motion";

const organizers = [
  { name: "Paulina Szymczak", affiliation: "Helmholtz Munich" },
  { name: "Rasmus Møller Larsen", affiliation: "Helmholtz Munich" },
  { name: "Bruno Puczko-Szymański", affiliation: "University of Warsaw" },
  { name: "Marcelo Der Torossian Torres", affiliation: "University of Pennsylvania" },
  { name: "Cesar de la Fuente", affiliation: "University of Pennsylvania" },
  { name: "Ewa Szczurek", affiliation: "Helmholtz Munich / University of Warsaw" },
];

const OrganizersSection = () => (
  <section id="organizers" className="py-24 md:py-32">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-center mb-16"
      >
        Organizing Committee
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {organizers.map((o, i) => (
          <motion.div
            key={o.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-display font-bold text-primary text-lg">
                {o.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <h3 className="font-display font-semibold text-sm">{o.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{o.affiliation}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OrganizersSection;
