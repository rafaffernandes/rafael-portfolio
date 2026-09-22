import { Building2, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "MIDIAUTO LTDA",
    products: "Mobigestor e Primeira Mão",
    focus: "Liderança da estratégia e roadmap para escalar a operação, automatizar processos (com IA) e integrar sistemas no setor automotivo",
    impacts: [
      { metric: "-25%", description: "tempo médio de faturamento (Central de Faturamento)" },
      { metric: "+15%", description: "taxa de conversão de vendas (Novo fluxo de leads quentes)" }
    ],
    icon: Building2,
  },
  {
    company: "Urbia Parques",
    products: "PMO e Governança de TI",
    focus: "Liderança do PMO e estruturação da governança de portfólios de TI",
    impacts: [
      { metric: "+30%", description: "eficiência de alocação de recursos" }
    ],
    icon: Users,
  },
  {
    company: "Via Varejo (Casas Bahia / Ponto Frio)",
    products: "E-commerce e Plataformas Digitais",
    focus: "Condução da evolução da jornada de compra digital e integração de plataformas",
    impacts: [
      { metric: "+10%", description: "taxa de conversão do e-commerce (Redesenho do Checkout)" },
      { metric: "+R$ 1,5M", description: "recuperação anual (Fluxo Carrinho Esquecido)" },
      { metric: "RA1000", description: "selo conquistado com integração Reclame Aqui" }
    ],
    icon: TrendingUp,
  },
  {
    company: "DEV PARTNER (Cliente BMW)",
    products: "Plataforma Nacional de Recall",
    focus: "Gestão focal do cliente BMW, liderando a plataforma nacional de gestão de recall e integrando concessionárias",
    impacts: [
      { metric: "-40%", description: "tempo médio de agendamento de recall" },
      { metric: "Nacional", description: "gestão inteligente de boxes e agendas para concessionários" }
    ],
    icon: Building2,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trajetória Profissional e Prova de Impacto
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-card-hover transition-smooth border-l-4 border-l-primary"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-2xl">{exp.company}</CardTitle>
                        <CardDescription className="text-base font-medium">
                          {exp.products}
                        </CardDescription>
                        <p className="text-muted-foreground">{exp.focus}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Impacto & Resultados:</h4>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exp.impacts.map((impact, idx) => (
                          <div key={idx} className="space-y-1">
                            <Badge variant="secondary" className="text-base px-3 py-1 font-bold">
                              {impact.metric}
                            </Badge>
                            <p className="text-sm text-muted-foreground">{impact.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
