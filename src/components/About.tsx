import { Download, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Minha Trajetória</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Text */}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-center">
              Como um Product Manager Sênior com mais de 6 anos de experiência, eu me especializo em transformar desafios de negócio em produtos digitais que geram eficiência operacional e crescimento acelerado. Com forte atuação nos setores automotivo e de varejo, minha carreira é marcada pela entrega de soluções de alto impacto, como a automação de processos (incluindo IA) e integração de sistemas que reduziu em 25% o tempo de faturamento em uma operação, e a otimização da jornada de compra que aumentou em 10% a conversão de um dos maiores e-commerces do país. Minha abordagem é orientada a dados e focada em liderar times multidisciplinares para construir roadmaps estratégicos que entregam valor real para o cliente e para a empresa.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Superpoder Card */}
            <Card className="shadow-card hover:shadow-card-hover transition-smooth border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary text-2xl">
                  <Target className="w-7 h-7 flex-shrink-0" />
                  Superpoder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground font-semibold text-lg">
                  Otimização de Processos e Eficiência Operacional
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Traduzo consistentemente a visão de negócio em produtos digitais que não apenas entregam novas funcionalidades, mas que fundamentalmente melhoram e automatizam operações complexas, gerando ganhos mensuráveis de tempo e receita.
                </p>
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-foreground">Evidências:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Central de Faturamento que reduziu o tempo médio de faturamento em <strong className="text-foreground">25%</strong> através da automação de processos</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Governança de portfólios no PMO com aumento de <strong className="text-foreground">30%</strong> na eficiência de alocação de recursos</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Plataforma de gestão de recall BMW que reduziu o tempo de agendamento em <strong className="text-foreground">40%</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Implementação de gestão inteligente de boxes e agendas para concessionários</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Domínio de Atuação Card */}
            <Card className="shadow-card hover:shadow-card-hover transition-smooth border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary text-2xl">
                  <Briefcase className="w-7 h-7 flex-shrink-0" />
                  Domínio de Atuação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground font-semibold text-lg">
                  Especialização em Automotivo e Varejo (E-commerce)
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experiência profunda que permite navegar com fluidez pelas complexidades e necessidades específicas desses mercados.
                </p>
                
                {/* Automotivo */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Automotivo
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Estratégia de produtos <strong className="text-foreground">Mobigestor e Primeira Mão</strong>, maximizando valor para clientes e concessionárias</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Gestor focal do cliente <strong className="text-foreground">BMW</strong>, liderando plataforma nacional de gestão de recall de veículos</span>
                    </li>
                  </ul>
                </div>

                {/* Varejo / E-commerce */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Varejo / E-commerce
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground pl-4">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Evolução da jornada de compra digital na <strong className="text-foreground">Via Varejo</strong> (Casas Bahia / Ponto Frio)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Redesenho da página de Checkout com aumento de <strong className="text-foreground">10%</strong> na taxa de conversão</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Fluxo de "Carrinho Esquecido" recuperando <strong className="text-foreground">R$ 1,5 milhão</strong> em receita anual</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center pt-4">
            <Button variant="default" size="lg" className="group shadow-card-hover">
              <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
