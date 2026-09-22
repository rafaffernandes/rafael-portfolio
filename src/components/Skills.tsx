import { Package, Target, GitBranch, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Gestão de Produto",
    icon: Package,
    skills: [
      "Gestão de Ciclo de Vida (Discovery & Delivery)",
      "Gestão de Roadmaps Estratégicos",
      "Definição e Gestão de OKRS & KPIs",
      "Análise de Mercado e Benchmarking"
    ]
  },
  {
    title: "Frameworks de Priorização",
    icon: Target,
    skills: [
      "WSJF (SAFe)",
      "MOSCOW",
      "Impacto vs. Esforço",
      "Business Value Score"
    ]
  },
  {
    title: "Metodologias & Governança",
    icon: GitBranch,
    skills: [
      "Scrum & Kanban & Lean",
      "Liderança e Governança Ágil",
      "Gestão de Portfólio & PMO",
      "Reports Executivos"
    ]
  },
  {
    title: "Tecnologia & Otimização",
    icon: Brain,
    skills: [
      "Otimização de Processos com IA",
      "Integração de Sistemas & APIs",
      "Automação de Processos",
      "Dashboards de Performance"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Habilidades & Frameworks
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-card-hover transition-smooth group"
                >
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center gap-3 text-center">
                      <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
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

export default Skills;
