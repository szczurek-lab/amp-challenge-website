const Footer = () => (
  <footer className="py-10 border-t border-border/40">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>© 2026–2027 AMP Challenge. All experimental data released under CC-BY 4.0.</p>
      <div className="flex gap-6">
        <a href="https://github.com/szczurek-lab/amp-challenge-2027" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          GitHub
        </a>
        <a href="https://www.gembio.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          GEM Workshop
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
