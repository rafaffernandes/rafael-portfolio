import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Gestão de Produto",
    skills: [
      "Product Discovery & Delivery",
      "Roadmap Estratégico",
      "User Stories",
      "Ecossistemas de Leads e CRM",
    ],
  },
  {
    title: "Frameworks de Priorização",
    skills: ["WSJF (SAFe)", "JTBD", "Impacto vs. Esforço", "Business Value Score"],
  },
  {
    title: "Liderança & Governança",
    skills: ["OKRs e KPIs", "Liderança de Squads Ágeis", "Gestão de Portfólio & PMO", "Reports Executivos"],
  },
  {
    title: "AI Product Management",
    skills: [
      "AI Agents & Prompt Engineering",
      "LLM Evals & Guardrails",
      "API Integration (Salesforce / Mulesoft)",
      "LGPD e Compliance de IA",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <SectionHeading
            index="03"
            eyebrow="Ferramentas de trabalho"
            title="Habilidades & frameworks"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="border-r border-b border-border p-7 space-y-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-[15px] text-muted-foreground leading-snug flex gap-2">
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
