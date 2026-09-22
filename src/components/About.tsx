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
            Product Manager com +7 anos de experiência em produtos digitais de grande escala nos
            setores automotivo, varejo e entretenimento. Minha especialidade é entender a dor do
            negócio, decidir com base em dado e priorizar com visão estratégica.
          </p>
          <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed -mt-8">
            Gerencio o ciclo completo de produto como especialista: do Discovery com usuários reais
            ao Delivery, passando por roadmap estratégico, integrações sistêmicas via APIs, automação
            de fluxos operacionais e liderança de squads multidisciplinares. Tenho domínio em
            estratégia de produto, ecossistemas de leads e AI Product Building com LLMs — hoje sou
            especialista certificado pela Tera nessa frente, uma parte da minha atuação, não o todo.
          </p>

          {/* Blocos de destaque — sem sombra, com traço fino */}
          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
            <div className="bg-background p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 text-accent">
                <Target className="w-5 h-5" />
                <span className="eyebrow">Superpoder</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">
                Estratégia de produto orientada a dado
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Traduzo dor de negócio em decisão de roadmap, priorização e execução — sempre
                apoiado em dado, não em opinião.
              </p>
              <ul className="space-y-3 pt-2 border-t border-border">
                {[
                  <>Central de Faturamento (2025): <strong className="text-foreground font-semibold">-25%</strong> no tempo médio, com boleto e consórcio automatizados</>,
                  <>4 montadoras conectadas em escala via Salesforce/Mulesoft — backend robusto, não automação por IA</>,
                  <>Plataforma de recall BMW: <strong className="text-foreground font-semibold">-40%</strong> no tempo médio de agendamento</>,
                  <>Gestão de leads com Kanban inteligente e priorização por dado — <strong className="text-foreground font-semibold">+15%</strong> de conversão</>,
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="font-mono text-accent shrink-0">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 text-accent">
                <Sparkles className="w-5 h-5" />
                <span className="eyebrow">Aplicação atual</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">
                Produtos de IA na Mobiauto
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lidero o Time de IA e o Time de Integrações com Montadoras — aplicando a mesma
                leitura estratégica em contexto de automação inteligente.
              </p>
              <ul className="space-y-3 pt-2 border-t border-border">
                {[
                  <>Criei o <strong className="text-foreground font-semibold">SDR Agent</strong> do zero — converte mais de <strong className="text-foreground font-semibold">28%</strong> dos leads sozinho</>,
                  <>OCR responsável por <strong className="text-foreground font-semibold">30%</strong> da análise de documentos, com <strong className="text-foreground font-semibold">65%</strong> de aprovação automática</>,
                  <>Processo de avaliação de qualidade e alucinação de LLMs, com scoring automatizado em lote</>,
                  <>Guardrails e adequação LGPD definidos junto ao jurídico</>,
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
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
              <p className="text-muted-foreground leading-relaxed text-lg">
                Experiência concentrada em Automotivo, com passagens por Varejo e Educação. Três
                setores, um padrão: escala que precisa virar produto.
              </p>

              <div className="pt-2 border-t border-border space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Automotivo</h4>
                <ul className="space-y-2">
                  <li className="text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">Mobiauto</strong> — IA, agentes e integração de montadoras
                  </li>
                  <li className="text-base text-muted-foreground leading-relaxed">
                    Gestor focal do cliente <strong className="text-foreground font-semibold">BMW</strong> — plataforma nacional de recall
                  </li>
                </ul>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Varejo &amp; Educação</h4>
                <ul className="space-y-2">
                  <li className="text-base text-muted-foreground leading-relaxed">
                    Jornada de compra digital na <strong className="text-foreground font-semibold">Via</strong> (Casas Bahia / Ponto Frio) — selo RA 1000
                  </li>
                  <li className="text-base text-muted-foreground leading-relaxed">
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
