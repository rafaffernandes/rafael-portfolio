interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ index, eyebrow, title, intro, align = "left" }: SectionHeadingProps) => {
  return (
    <div className={`space-y-5 ${align === "center" ? "text-center mx-auto" : ""}`}>
      <div className={`flex items-baseline gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="section-index text-base">{index}</span>
        <span className="eyebrow text-sm">{eyebrow}</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {intro && (
        <p className={`text-muted-foreground text-xl leading-relaxed ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
