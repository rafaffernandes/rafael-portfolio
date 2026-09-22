import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/rafael-photo.jpg";

const stats = [
  { value: "7+", label: "anos em produtos digitais" },
  { value: "4", label: "montadoras integradas em escala" },
  { value: "-25%", label: "tempo de faturamento" },
  { value: "+R$1,5M", label: "receita recuperada / ano" },
];

const Hero = () => {
  return (
    <section id="home" className="relative bg-background bg-paper-grain overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-start">
          {/* Coluna de texto */}
          <div className="lg:col-span-8 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="eyebrow text-sm">Product Manager Sênior | Estratégia de Produto</span>

            <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.92] text-balance">
              Rafael
              <br />
              Fernandes
            </h1>

            <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-muted-foreground">
              Product Manager com +7 anos de experiência em produtos digitais de grande escala nos
              setores automotivo, varejo e entretenimento. Decisão orientada a dado, priorização com
              visão de negócio, ciclo completo de produto — do discovery ao delivery.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Button
                variant="hero"
                size="xl"
                onClick={() => window.open("https://wa.me/5511952508498", "_blank")}
                className="group"
              >
                Vamos Conversar
                <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-smooth border-b border-transparent hover:border-foreground/30 pb-1"
              >
                Ver trajetória
              </button>
            </div>
          </div>

          {/* Retrato — deslocado, com moldura fina */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative w-48 sm:w-56 lg:w-full lg:max-w-[280px]">
              <div className="absolute -top-3 -right-3 w-full h-full border border-accent" />
              <img
                src={profilePhoto}
                alt="Rafael Fernandes"
                className="relative w-full aspect-[4/5] object-cover grayscale-[15%] border border-foreground/15"
              />
            </div>
          </div>
        </div>

        {/* Faixa de números — estilo "by the numbers" editorial */}
        <div className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-4 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-border last:border-r-0 py-8 pr-4">
              <p className="font-display text-4xl sm:text-5xl font-bold text-foreground tabular-nums">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex justify-center pb-8 text-muted-foreground/50">
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
