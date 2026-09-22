import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import projectFaturamento from "@/assets/project-faturamento.jpg";
import projectCheckout from "@/assets/project-checkout.jpg";
import projectRecall from "@/assets/project-recall.jpg";
import projectCarrinho from "@/assets/project-carrinho.jpg";
import projectLeads from "@/assets/project-leads.jpg";
import projectPMO from "@/assets/project-pmo.jpg";

const projects = [
  {
    title: "Central de Faturamento",
    company: "Mobiauto",
    description: "Automação B2B que transformou a eficiência operacional, reduzindo drasticamente o tempo de processamento de cobranças.",
    image: projectFaturamento,
    tags: ["Automação com IA", "Integração de Sistemas", "B2B"],
    impact: "-25% tempo",
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
    tags: ["Automotivo", "Integração de Sistemas", "Nacional"],
    impact: "-40% tempo",
  },
  {
    title: "Recuperação de Receita",
    company: "Via Varejo",
    description: "Fluxo estratégico de carrinho esquecido que recuperou receita significativa através de automação inteligente.",
    image: projectCarrinho,
    tags: ["E-commerce", "Automação", "Receita"],
    impact: "+R$1,5M/ano",
  },
  {
    title: "SDR Agent — Qualificação de Leads",
    company: "Mobiauto",
    description: "Agente de IA criado do zero que qualifica leads sozinho, antes do vendedor entrar em cena — com guardrails e adequação LGPD.",
    image: projectLeads,
    tags: ["IA & Agentes", "LLM", "CRM"],
    impact: "+15% conversão",
  },
  {
    title: "Governança de Portfólio de TI",
    company: "Urbia Parques",
    description: "Estruturei portfólios e programas de TI priorizados com WSJF, Matriz Impacto × Esforço e Business Value Score, com comitês executivos e dashboards de OKRs, KPIs e SLAs.",
    image: projectPMO,
    tags: ["Governança", "PMO", "WSJF"],
    impact: "+30% eficiência",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <SectionHeading
            index="04"
            eyebrow="Estudos de caso"
            title="Projetos em destaque"
            intro="Seis entregas que demonstram impacto mensurável em escala — do agente de IA que qualifica leads sozinho à plataforma nacional de recall."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="group bg-background text-left flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <span className="absolute top-0 left-0 bg-background font-mono text-xs px-2 py-1 text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <p className="font-display text-3xl font-bold text-foreground tabular-nums mb-3">
                    {project.impact}
                  </p>
                  <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-[0.15em] text-accent mt-1.5 mb-3">
                    {project.company}
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mb-4">{project.tags.join(" / ")}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground border-b border-transparent group-hover:border-accent transition-smooth w-fit">
                    Ver estudo de caso
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
