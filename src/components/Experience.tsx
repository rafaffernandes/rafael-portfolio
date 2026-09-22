import SectionHeading from "@/components/SectionHeading";

type BulletGroup = { title: string; items: string[] };
type Impact = { metric: string; description: string };

interface Role {
  title: string;
  company: string;
  period: string;
  duration: string;
  summary: string;
  bulletGroups?: BulletGroup[];
  bullets?: string[];
  impacts?: Impact[];
}

const roles: Role[] = [
  {
    title: "Product Manager",
    company: "Mobiauto",
    period: "Out 2023 — Presente",
    duration: "~3 anos",
    summary:
      "Lidero o Time de IA e o Time de Integrações com Montadoras na Mobiauto. Meu trabalho vai da estratégia — priorização, roadmap, decisão orientada a dado — até a execução: dos agentes de IA em produção às integrações que conectam a Mobiauto a Stellantis, BMW, Volkswagen e Renault.",
    bulletGroups: [
      {
        title: "IA & Agentes",
        items: [
          "Criei o SDR Agent do zero: qualifica leads sozinho, antes do vendedor entrar em cena, e converte mais de 28% deles hoje",
          "Implementei OCR para ler, entender e aprovar documentos sem etapa manual: já responde por 30% de toda a análise da Central de Faturamento, com 65% de taxa de aprovação automática",
          "Toco o portfólio de agentes do MobiGestor",
          "Montei o processo de avaliação de qualidade e alucinação das LLMs, com scoring automatizado em lote",
          "Defini guardrails e adequação LGPD do SDR Agent junto com o jurídico",
          "Liderei a migração de modelos de LLM para versões mais atuais, sem deixar o custo explodir",
          "Levei o Studio 360 (IA de tratamento de fundo em fotos de veículos) da POC à especificação de produção",
          "MobiInteligente: IA proprietária que é consultora de vendedores e lojistas",
        ],
      },
      {
        title: "Integrações",
        items: [
          "Conecto montadoras ao MobiGestor em escala via Salesforce/Mulesoft: Stellantis, BMW, Volkswagen (incl. Banco VW) e Renault",
          "Portais integrados: Mercado Livre, OLX e EasyCar",
          "Implementei o CheckPrice do discovery ao delivery, com dois produtos: consulta veicular (Capivara) e consulta de recall — mapeando toda a integração de APIs",
          "Atuo na priorização dos produtos core da companhia para mover KPIs conforme a necessidade do negócio",
        ],
      },
      {
        title: "MobiGestor & Primeira Mão (2023–2025)",
        items: [
          "Conduzi o Primeira Mão do discovery ao delivery: hipóteses validadas, escrita de US, definição de produto, priorização de backlog e roadmap",
          "Central de Faturamento: módulo criado do zero, automatizando boleto e consórcio",
          "Redesenhei a gestão de leads com Kanban inteligente e qualificação automática",
          "Check-in de Visitas com QR Code e geolocalização: valida presença contra fraude e credita o vendedor certo",
          "Integrei Quiver, Fandi e Auto Avaliar via API — vendedor trabalha numa tela só",
          "Lancei o Módulo de Entrega de Veículos: rastreabilidade e conformidade no pós-venda",
        ],
      },
    ],
    impacts: [
      { metric: "-25%", description: "tempo médio de faturamento (2025)" },
      { metric: "+15%", description: "conversão de leads" },
      { metric: "4", description: "montadoras conectadas em escala" },
    ],
  },
  {
    title: "Senior Product Owner",
    company: "Universidade Cruzeiro do Sul",
    period: "Jan — Ago 2023",
    duration: "8 meses",
    summary:
      "Liderança estratégica da Squad de LMS, gerenciando o ciclo de vida completo dos produtos de destaque da universidade — do backlog ao roadmap, com relatórios diretos à diretoria.",
    bullets: [
      "Priorização e gestão do backlog, otimizando a eficiência do fluxo de trabalho da squad",
      "Colaboração com a área de negócios para alinhamento de roadmap e definição da visão do produto",
      "Formulação de requisitos técnicos e funcionais para o desenvolvimento de épicos e features",
      "Facilitação das cerimônias Scrum e apresentação de relatórios de progresso à diretoria",
    ],
  },
  {
    title: "Senior Project Manager",
    company: "Urbia Parques",
    period: "Set 2022 — Jan 2023",
    duration: "5 meses",
    summary:
      "Estruturei a governança de portfólio de TI da companhia: comitês executivos, rituais de priorização, dashboards para a diretoria. Tática e estratégia, ao mesmo tempo.",
    bullets: [
      "Estruturei portfólios e programas de TI priorizados com WSJF, Matriz Impacto × Esforço e Business Value Score",
      "Conduzi comitês executivos, reportando status, riscos e dependências para apoiar decisões",
      "Implantei e acompanhei OKRs, KPIs e SLAs com dashboards executivos para diretoria",
      "Liderei squads multidisciplinares e mentorei líderes de projeto, elevando a maturidade ágil",
    ],
    impacts: [{ metric: "+30%", description: "eficiência de alocação de recursos" }],
  },
  {
    title: "Product Owner",
    company: "Via (Via Varejo — Casas Bahia / Ponto Frio)",
    period: "Mai 2019 — Ago 2022",
    duration: "3 anos e 4 meses",
    summary:
      "Produtos digitais em um dos maiores varejistas do Brasil. Decisão orientada por dado, não por opinião — testava hipótese em A/B antes de escalar qualquer coisa.",
    bullets: [
      "Redesenho completo da página de Checkout, com aumento direto de retenção e conversão digital",
      "Fluxo de Carrinho Esquecido com cupons personalizados: recuperação de receita e reengajamento",
      "Validação de hipóteses via testes A/B, acompanhando NPS, conversão, funil digital e churn em tempo real",
      "Integração com Reclame Aqui e conquista do selo RA 1000",
      "Integração multicanal com visão 360º do cliente e dashboards executivos",
    ],
    impacts: [
      { metric: "+10%", description: "conversão do e-commerce (checkout)" },
      { metric: "+R$1,5M", description: "recuperação anual (carrinho esquecido)" },
      { metric: "RA1000", description: "selo conquistado com integração Reclame Aqui" },
    ],
  },
  {
    title: "Analista de Negócios de Projetos",
    company: "DevPartner (Cliente BMW)",
    period: "Fev 2018 — Abr 2019",
    duration: "1 ano e 3 meses",
    summary:
      "Meu primeiro papel de produto: gestor focal do cliente BMW, na interface entre negócio, tecnologia e governança. Product Owner de um lado, PMO do outro.",
    bullets: [
      "Refinamento de requisitos funcionais e técnicos, backlog estruturado com critérios de aceite",
      "Defini visão e roadmap da Plataforma Nacional de Recall, conectando clientes, concessionárias e mecânicos",
      "Acompanhamento de métricas de agendamento, capacidade e cumprimento de prazos legais",
      "Relatórios executivos e comitês de direção com a BMW",
    ],
    impacts: [{ metric: "-40%", description: "tempo médio de agendamento de recall" }],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <SectionHeading
            index="02"
            eyebrow="Trajetória profissional | 7+ anos"
            title="De analista de negócios a Product Manager de IA"
            intro="Cinco papéis em cinco empresas. Comecei escrevendo requisito e organizando backlog; hoje lidero um time de IA. O escopo cresceu a cada troca."
          />

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden sm:block" />

            {roles.map((role, index) => (
              <div key={role.company + role.period} className="relative sm:pl-12 pb-20 last:pb-0">
                <div className="hidden sm:block absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <span className="font-mono text-base text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                    {role.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-base">
                  <span className="font-semibold text-foreground/80">{role.company}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {role.period} <span className="text-muted-foreground/60">({role.duration})</span>
                  </span>
                </div>

                <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-8">{role.summary}</p>

                {role.bulletGroups ? (
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 mb-8">
                    {role.bulletGroups.map((group) => (
                      <div key={group.title}>
                        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-3">
                          {group.title}
                        </h4>
                        <ul className="space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item} className="text-lg text-muted-foreground leading-relaxed flex gap-2.5">
                              <span className="text-accent shrink-0">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  role.bullets && (
                    <ul className="max-w-3xl space-y-2.5 mb-8">
                      {role.bullets.map((item) => (
                        <li key={item} className="text-lg text-muted-foreground leading-relaxed flex gap-2.5">
                          <span className="text-accent shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}

                {role.impacts && (
                  <div className="flex flex-wrap gap-x-12 gap-y-5 border-t border-border pt-6">
                    {role.impacts.map((impact) => (
                      <div key={impact.description} className="max-w-[240px]">
                        <p className="font-display text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
                          {impact.metric}
                        </p>
                        <p className="text-sm text-muted-foreground leading-snug mt-1">{impact.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
