import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    company: "MIDIAUTO LTDA",
    products: "Mobigestor e Primeira Mão",
    focus: "Liderança da estratégia e roadmap para escalar a operação, automatizar processos (com IA) e integrar sistemas no setor automotivo.",
    impacts: [
      { metric: "-25%", description: "tempo médio de faturamento" },
      { metric: "+15%", description: "conversão de vendas em leads quentes" },
    ],
  },
  {
    company: "Urbia Parques",
    products: "PMO e Governança de TI",
    focus: "Liderança do PMO e estruturação da governança de portfólios de TI.",
    impacts: [{ metric: "+30%", description: "eficiência de alocação de recursos" }],
  },
  {
    company: "Via Varejo (Casas Bahia / Ponto Frio)",
    products: "E-commerce e Plataformas Digitais",
    focus: "Condução da evolução da jornada de compra digital e integração de plataformas.",
    impacts: [
      { metric: "+10%", description: "conversão do e-commerce (checkout)" },
      { metric: "+R$1,5M", description: "recuperação anual (carrinho esquecido)" },
      { metric: "RA1000", description: "selo conquistado com integração Reclame Aqui" },
    ],
  },
  {
    company: "DEV PARTNER (Cliente BMW)",
    products: "Plataforma Nacional de Recall",
    focus: "Gestão focal do cliente BMW, liderando a plataforma nacional de gestão de recall e integrando concessionárias.",
    impacts: [
      { metric: "-40%", description: "tempo médio de agendamento de recall" },
      { metric: "Nacional", description: "gestão inteligente de boxes e agendas" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <SectionHeading
            index="02"
            eyebrow="Trajetória profissional"
            title="Prova de impacto"
          />

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden sm:block" />

            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative sm:pl-10 pb-14 last:pb-0">
                <div className="hidden sm:block absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                    {exp.company}
                  </h3>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-2">{exp.products}</p>
                <p className="max-w-2xl text-muted-foreground leading-relaxed mb-6">{exp.focus}</p>

                <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-5">
                  {exp.impacts.map((impact) => (
                    <div key={impact.description} className="max-w-[220px]">
                      <p className="font-display text-2xl sm:text-3xl font-semibold text-foreground tabular-nums">
                        {impact.metric}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-snug mt-1">
                        {impact.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
