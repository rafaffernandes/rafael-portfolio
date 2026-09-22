import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactCards = [
    {
      icon: Mail,
      title: "E-mail",
      description: "rafael.andes2@gmail.com",
      href: "mailto:rafael.andes2@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "(11) 95250-8498",
      href: "https://wa.me/5511952508498",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Conecte-se comigo",
      href: "https://www.linkedin.com/in/rafael-fernandes-49aa9095/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Vamos Trabalhar Juntos?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground">
              Entre em contato para discutir oportunidades e projetos
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactCards.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="h-full shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:scale-105 group-hover:border-accent cursor-pointer">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {contact.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
