import { Linkedin } from "lucide-react";

const navLinks = [
  { id: "about", label: "Trajetória" },
  { id: "experience", label: "Experiência" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display text-lg font-semibold">Rafael Fernandes</p>
            <p className="text-background/60 text-sm mt-0.5">
              Product Manager Sênior — IA, Agentes &amp; Integrações
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-mono text-xs uppercase tracking-[0.15em] text-background/70 hover:text-accent transition-smooth"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href="https://www.linkedin.com/in/rafaelfernandes-pm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/70 hover:text-accent transition-smooth"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-[0.15em]">LinkedIn</span>
          </a>
        </div>

        <div className="max-w-5xl mx-auto border-t border-background/15 mt-8 pt-6">
          <p className="text-background/50 text-xs">
            © 2026 Rafael Fernandes Dos Santos Souza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
