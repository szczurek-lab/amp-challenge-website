import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Recognition", href: "#recognition" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Submission", href: "#submission" },
  { label: "Evaluation", href: "#categories" },
  { label: "Bacterial Panel", href: "#bacterial-panel" },
  { label: "Organizers", href: "#organizers" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-lg tracking-tight text-foreground">
          AMP Challenge <span className="text-primary">2027</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#submit"
            className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/40 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#submit"
              onClick={() => setOpen(false)}
              className="inline-block text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg"
            >
              Submit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
