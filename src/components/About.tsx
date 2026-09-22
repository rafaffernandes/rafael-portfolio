import { Download, Sparkles, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <SectionHeading
            index="01"
            eyebrow="Sobre"
            title="Minha trajetória"
          />

          {/* Texto principal — coluna de leitura, não centralizado */}
          <p className="max-w-4xl font-display text-3xl sm:text-4xl leading-snug text-foreground/90 text-balance font-medium">
            Product Manager com +7 anos de experiência em produtos digitais nos setores automotivo,
            varejo e entretenimento. Minha especialidade é simples: entender a dor do negócio e
            transformar isso em entrega.
          </p>
          <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed -mt-8">
            Conduzo o ciclo completo de produto: discovery com usuário real, roadmap, integração de
            sistemas via API, automação de processo, liderança de squad. Sou especialista certificado
            pela Tera em AI Product Building — hoje é a minha principal frente, projetando e escalando
            produtos que resolvem um problema real de negócio.
          </p>

          {/* Blocos de destaque — sem sombra, com traço fino */}
          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
            <div className="bg-background p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 text-accent">
                <Sparkles className="w-5 h-5" />
                <span className="eyebrow">Especialidade atual</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">
                AI Product Management
              </p>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Lidero o Time de IA da Mobiauto: projeto e escalo agentes que resolvem problemas
                reais de negócio.
              </p>
              <ul className="space-y-3 pt-2 border-t border-border">
                {[
                  <>Criei o <strong className="text-foreground font-semibold">SDR Agent</strong> do zero — qualifica leads sozinho, antes do vendedor</>,
                  <>Processo de avaliação de qualidade e alucinação de LLMs, com scoring automatizado em lote</>,
                  <>Guardrails e adequação LGPD definidos junto ao jurídico</>,
                  <>OCR para leitura e aprovação de documentos sem etapa manual</>,
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-accent shrink-0">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 text-accent">
                <Target className="w-5 h-5" />
                <span className="eyebrow">Superpoder</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">
                Otimização de processos e eficiência operacional
              </p>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Traduzo visão de negócio em produto que automatiza operação complexa. O ganho
                aparece em tempo e receita, como nos exemplos abaixo.
              </p>
              <ul className="space-y-3 pt-2 border-t border-border">
                {[
                  <>Central de Faturamento que reduziu o tempo médio em <strong className="text-foreground font-semibold">25%</strong> com automação</>,
                  <>4 montadoras conectadas em escala via Salesforce/Mulesoft</>,
                  <>Plataforma de recall BMW que reduziu o tempo de agendamento em <strong className="text-foreground font-semibold">40%</strong></>,
                  <>Gestão de leads com Kanban inteligente — <strong className="text-foreground font-semibold">+15%</strong> de conversão</>,
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-accent shrink-0">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 text-accent">
                <Briefcase className="w-5 h-5" />
                <span className="eyebrow">Domínio de atuação</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">
                Automotivo, Varejo e Educação
              </p>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Experiência concentrada em Automotivo, com passagens por Varejo e Educação. Três
                setores, um padrão: escala que precisa virar produto.
              </p>

              <div className="pt-2 border-t border-border space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Automotivo</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">Mobiauto</strong> — IA, agentes e integração de montadoras
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Gestor focal do cliente <strong className="text-foreground font-semibold">BMW</strong> — plataforma nacional de recall
                  </li>
                </ul>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Varejo &amp; Educação</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Jornada de compra digital na <strong className="text-foreground font-semibold">Via</strong> (Casas Bahia / Ponto Frio) — selo RA 1000
                  </li>
                  <li className="text-sm text-muted-foreground leading-relaxed">
                    Squad de LMS na <strong className="text-foreground font-semibold">Universidade Cruzeiro do Sul</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="/cv-rafael-fernandes.pdf" download="Rafael Fernandes - CV.pdf">
                <Download className="group-hover:translate-y-0.5 transition-transform" />
                Download CV (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
