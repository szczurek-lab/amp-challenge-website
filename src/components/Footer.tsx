import logoUpenn from "@/assets/logo-upenn.png";
import logoHelmholtz from "@/assets/logo-helmholtz.png";
import logoUW from "@/assets/logo-uw.png";

const Footer = () => (
  <footer className="py-10 border-t border-border/40">
    <div className="section-container flex flex-col items-center gap-8">
      {/* References */}
      <div className="w-full max-w-3xl">
        <h4 className="font-display font-semibold text-sm mb-3 text-center">References</h4>
        <ol className="space-y-2 text-xs text-muted-foreground leading-relaxed list-decimal list-inside">
          <li>
            Szymczak P., Zarzecki W., Wang J., Duan Y., Wang J., Coelho L.P., de la Fuente-Nunez C., Szczurek E.{" "}
            <em>AI-Driven Antimicrobial Peptide Discovery: Mining and Generation.</em>{" "}
            Accounts of Chemical Research, 2025, 58, 1831-1846.
          </li>
          <li>
            Moller-Larsen R., Izdebski A., Olszewski J., Gawade P., Kmicikiewicz M., Zarzecki W., Szczurek E.{" "}
            <em>seqme: a Python library for evaluating biological sequence design.</em>{" "}
            arXiv:2511.04239, 2025.
          </li>
        </ol>
      </div>

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <img src={logoHelmholtz} alt="Helmholtz Munich" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={logoUW} alt="University of Warsaw" className="h-14 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={logoUpenn} alt="University of Pennsylvania" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground w-full">
        <p>&copy; 2026-2027 AMP Challenge. All experimental data released under CC-BY 4.0.</p>
        <div className="flex gap-6">
          <a href="https://github.com/szczurek-lab/amp-challenge-2027" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
