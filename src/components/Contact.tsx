import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const contactLinks = [
  {
    title: "E-mail",
    value: "rafael.andes2@gmail.com",
    href: "mailto:rafael.andes2@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "(11) 95250-8498",
    href: "https://wa.me/5511952508498",
  },
  {
    title: "LinkedIn",
    value: "rafael-fernandes-49aa9095",
    href: "https://www.linkedin.com/in/rafael-fernandes-49aa9095/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <SectionHeading
            index="05"
            eyebrow="Contato"
            title="Vamos trabalhar juntos?"
            intro="Aberto a conversas sobre oportunidades, desafios de produto e novos projetos."
          />

          <div className="border-t border-border">
            {contactLinks.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-6 border-b border-border transition-smooth hover:pl-3"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {contact.title}
                  </p>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-accent transition-smooth">
                    {contact.value}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground shrink-0 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
