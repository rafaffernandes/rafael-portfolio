import { Download, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            index="01"
            eyebrow="Sobre"
            title="Minha trajetória"
          />

          {/* Texto principal — coluna de leitura, não centralizado */}
          <p className="max-w-3xl font-display text-2xl sm:text-3xl leading-snug text-foreground/90 text-balance">
            Como Product Manager Sênior com mais de 6 anos de experiência, eu transformo desafios de
            negócio em produtos digitais que geram eficiência operacional e crescimento acelerado —
            com forte atuação nos setores automotivo e de varejo.
          </p>
          <p className="max-w-2xl text-muted-foreground leading-relaxed -mt-10">
            Minha carreira é marcada pela entrega de soluções de alto impacto: automação de processos
            (incluindo IA) e integração de sistemas que reduziram em 25% o tempo de faturamento de uma
            operação, e a otimização da jornada de compra que aumentou em 10% a conversão de um dos
            maiores e-commerces do país. Abordagem orientada a dados, liderando times multidisciplinares
            para construir roadmaps que entregam valor real.
          </p>

          {/* Blocos de destaque — sem sombra, com traço fino */}
          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
            <div className="bg-background p-8 space-y-5">
              <div className="flex items-center gap-3 text-accent">
                <Target className="w-5 h-5" />
                <span className="eyebrow">Superpoder</span>
              </div>
              <p className="font-display text-xl font-semibold text-foreground">
                Otimização de processos e eficiência operacional
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Traduzo a visão de negócio em produtos digitais que melhoram e automatizam operações
                complexas, gerando ganhos mensuráveis de tempo e receita.
              </p>
              <ul className="space-y-3 pt-2 border-t border-border">
                {[
                  <>Central de Faturamento que reduziu o tempo médio em <strong className="text-foreground font-semibold">25%</strong> com automação</>,
                  <>Governança de portfólios no PMO com <strong className="text-foreground font-semibold">+30%</strong> de eficiência na alocação de recursos</>,
                  <>Plataforma de recall BMW que reduziu o tempo de agendamento em <strong className="text-foreground font-semibold">40%</strong></>,
                  <>Gestão inteligente de boxes e agendas para concessionários</>,
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-accent shrink-0">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 space-y-5">
              <div className="flex items-center gap-3 text-accent">
                <Briefcase className="w-5 h-5" />
                <span className="eyebrow">Domínio de atuação</span>
              </div>
              <p className="font-display text-xl font-semibold text-foreground">
                Automotivo e Varejo (E-commerce)
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Experiência profunda que permite navegar com fluidez pelas complexidades e necessidades
                específicas desses mercados.
              </p>

              <div className="pt-2 border-t border-border space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Automotivo</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Estratégia de produtos <strong className="text-foreground font-semibold">Mobigestor e Primeira Mão</strong>
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Gestor focal do cliente <strong className="text-foreground font-semibold">BMW</strong>, plataforma nacional de recall
                  </li>
                </ul>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Varejo / E-commerce</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Jornada de compra digital na <strong className="text-foreground font-semibold">Via Varejo</strong> (Casas Bahia / Ponto Frio)
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Redesenho de Checkout com <strong className="text-foreground font-semibold">+10%</strong> de conversão
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Fluxo de Carrinho Esquecido recuperando <strong className="text-foreground font-semibold">R$ 1,5M</strong>/ano
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <Button variant="outline" size="lg" className="group">
              <Download className="group-hover:translate-y-0.5 transition-transform" />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
