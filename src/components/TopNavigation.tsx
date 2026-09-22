import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "Trajetória" },
  { id: "experience", label: "Experiências" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contatos" },
];

const TopNavigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-1 px-2 sm:px-4 py-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-smooth ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : isScrolled
                  ? "text-foreground hover:bg-secondary hover:text-foreground"
                  : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TopNavigation;
