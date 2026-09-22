import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Gestão de Produto",
    skills: [
      "Gestão de Ciclo de Vida (Discovery & Delivery)",
      "Gestão de Roadmaps Estratégicos",
      "Definição e Gestão de OKRs & KPIs",
      "Análise de Mercado e Benchmarking",
    ],
  },
  {
    title: "Frameworks de Priorização",
    skills: ["WSJF (SAFe)", "MoSCoW", "Impacto vs. Esforço", "Business Value Score"],
  },
  {
    title: "Metodologias & Governança",
    skills: ["Scrum, Kanban & Lean", "Liderança e Governança Ágil", "Gestão de Portfólio & PMO", "Reports Executivos"],
  },
  {
    title: "Tecnologia & Otimização",
    skills: ["Otimização de Processos com IA", "Integração de Sistemas & APIs", "Automação de Processos", "Dashboards de Performance"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <SectionHeading
            index="03"
            eyebrow="Ferramentas de trabalho"
            title="Habilidades & frameworks"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="border-r border-b border-border p-6 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground leading-snug flex gap-2">
                      <span className="text-accent">–</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
