interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ index, eyebrow, title, intro, align = "left" }: SectionHeadingProps) => {
  return (
    <div className={`space-y-4 ${align === "center" ? "text-center mx-auto" : ""}`}>
      <div className={`flex items-baseline gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="section-index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {intro && (
        <p className={`text-muted-foreground text-lg leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
