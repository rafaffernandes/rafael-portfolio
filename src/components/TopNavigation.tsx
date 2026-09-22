import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "Trajetória" },
  { id: "experience", label: "Experiências" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

const TopNavigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="font-display text-xl font-semibold tracking-tight text-foreground"
          >
            RF
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center px-3 py-2 font-mono text-sm uppercase tracking-[0.15em] transition-smooth ${
                    isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`border-b ${
                      isActive ? "border-accent" : "border-transparent group-hover:border-foreground/30"
                    } pb-0.5`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden font-mono text-sm uppercase tracking-[0.15em] text-accent"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
