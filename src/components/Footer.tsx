import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Rafael Fernandes</h3>
              <p className="text-primary-foreground/80 text-sm">
                Product Manager Sênior especializado em Varejo e Automotivo
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Navegação</h4>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
                >
                  Experiência
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
                >
                  Projetos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold">Conecte-se</h4>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => window.open('https://www.linkedin.com/in/rafael-fernandes-49aa9095/', '_blank')}
              >
                <Linkedin className="mr-2 w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Rafael Fernandes Dos Santos Souza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
