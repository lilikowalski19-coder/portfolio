interface Props { label: string; title: string; subtitle?: string; }

export default function PageHeader({ label, title, subtitle }: Props) {
  return (
    <section
      className="pt-40 pb-20 px-6 md:px-12 max-w-[1280px] mx-auto"
      style={{ borderBottom: "1px solid var(--rule)" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase font-sans mb-10" style={{ color: "var(--stone)" }}>
        {label}
      </p>
      <h1
        className="display text-[clamp(2.5rem,7.5vw,7.5rem)] leading-[1.0] tracking-[-0.03em]"
        style={{ color: "var(--ink)" }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="mt-7 text-base font-sans leading-relaxed max-w-lg" style={{ color: "var(--stone)" }}>
          {subtitle}
        </p>
      )}
    </section>
  );
}
