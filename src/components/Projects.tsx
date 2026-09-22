import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectFaturamento from "@/assets/project-faturamento.jpg";
import projectCheckout from "@/assets/project-checkout.jpg";
import projectRecall from "@/assets/project-recall.jpg";
import projectCarrinho from "@/assets/project-carrinho.jpg";
import projectLeads from "@/assets/project-leads.jpg";
import projectPMO from "@/assets/project-pmo.jpg";

const projects = [
  {
    title: "Central de Faturamento",
    company: "MIDIAUTO",
    description: "Automação B2B que transformou a eficiência operacional, reduzindo drasticamente o tempo de processamento de cobranças.",
    image: projectFaturamento,
    tags: ["Automação com IA", "Integração de Sistemas", "B2B"],
    impact: "-25% tempo de faturamento",
  },
  {
    title: "Redesenho do Checkout",
    company: "Via Varejo",
    description: "Otimização da jornada de compra digital que resultou em aumento significativo da taxa de conversão.",
    image: projectCheckout,
    tags: ["E-commerce", "Otimização", "UX"],
    impact: "+10% conversão",
  },
  {
    title: "Plataforma de Recall",
    company: "BMW",
    description: "Plataforma nacional de gestão inteligente de recall com integração de concessionárias e otimização de agendas.",
    image: projectRecall,
    tags: ["Automotivo", "Integração de Sistemas", "Plataforma Nacional"],
    impact: "-40% tempo de agendamento",
  },
  {
    title: "Recuperação de Receita",
    company: "Via Varejo",
    description: "Fluxo estratégico de carrinho esquecido que recuperou receita significativa através de automação inteligente.",
    image: projectCarrinho,
    tags: ["E-commerce", "Automação", "Recuperação de Receita"],
    impact: "+R$ 1.5M/ano",
  },
  {
    title: "Gestor de Leads",
    company: "MIDIAUTO",
    description: "Sistema de qualificação e distribuição inteligente de leads quentes que maximizou a eficiência comercial.",
    image: projectLeads,
    tags: ["Automação", "CRM", "Otimização"],
    impact: "+15% conversão",
  },
  {
    title: "Governança de PMO",
    company: "Urbia Parques",
    description: "Estruturação completa de governança de portfólio e PMO com aumento significativo na alocação de recursos.",
    image: projectPMO,
    tags: ["Governança", "PMO", "Gestão de Portfólio"],
    impact: "+30% eficiência",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Projetos em Destaque
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Portfólio de projetos que demonstram impacto mensurável em escala
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-card-hover transition-smooth overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="font-bold">
                      {project.impact}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full group/btn"
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver Estudo de Caso
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
