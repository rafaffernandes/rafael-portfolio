import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/rafael-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Rafael Fernandes Dos Santos Souza"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-primary-foreground shadow-card-hover transition-smooth hover:scale-105"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
              Rafael Fernandes
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 font-medium">
              Product Manager Sênior | Product Leadership | IA |
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Especialista em transformar dores de stakeholders em crescimento previsível para produtos SaaS do setor Automotivo e Marketplaces de Varejo.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Meu foco é escalar esses negócios através da automação com IA e da integração de sistemas, entregando novos produtos e funcionalidades que geram valor real.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open("https://wa.me/5511952508498", "_blank")}
              className="group"
            >
              Vamos Conversar
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
