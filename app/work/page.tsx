import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import workData from "../../content/work.json";

export default function WorkPage() {
  const { projects } = workData;

  return (
    <main>
      <PageHeader label="Work" title="Research &amp; Writing" subtitle="Computational analysis, policy papers, and legislative research." />
      <section className="px-6 md:px-12 py-20 max-w-[1280px] mx-auto">
        {(projects as Array<typeof projects[0] & { cover?: string; url?: string; attachment?: string }>).map((p, i) => (
          <FadeIn key={p.num} delay={i * 80}>
            <article className="py-16" style={{ borderBottom: "1px solid var(--rule)" }}>
            {p.cover && (
              <div className="mb-10 overflow-hidden rounded-sm" style={{ maxHeight: "420px" }}>
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full object-cover"
                  style={{ maxHeight: "420px" }}
                />
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div>
                <p className="text-xs font-sans mb-2" style={{ color: "var(--rule)" }}>{p.num}</p>
                <p className="text-xs font-sans" style={{ color: "var(--stone)" }}>{p.category}</p>
                <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--rule)" }}>
                  <p className="text-xs tracking-[0.2em] uppercase font-sans mb-3" style={{ color: "var(--stone)" }}>Method</p>
                  <ul className="space-y-1">
                    {p.method.map((m) => (
                      <li key={m} className="text-sm font-sans leading-relaxed" style={{ color: "var(--stone)" }}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="display text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.15] tracking-[-0.01em] mb-6" style={{ color: "var(--ink)" }}>
                  {p.title}
                </h2>
                <p className="text-base font-sans leading-relaxed mb-8" style={{ color: "var(--stone)" }}>{p.desc}</p>
                {p.finding && (
                  <div className="pt-6" style={{ borderTop: "1px solid var(--rule)" }}>
                    <p className="text-xs tracking-[0.2em] uppercase font-sans mb-3" style={{ color: "var(--clay)" }}>Key Findings</p>
                    <p className="text-sm font-sans leading-relaxed" style={{ color: "var(--stone)" }}>{p.finding}</p>
                  </div>
                )}
                {(p.url || p.attachment) && (
                  <div className="flex flex-wrap gap-6 pt-6" style={{ borderTop: "1px solid var(--rule)" }}>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="aul text-sm font-sans" style={{ color: "var(--ink)" }}>
                        Read paper ↗
                      </a>
                    )}
                    {p.attachment && (
                      <a href={p.attachment} target="_blank" rel="noopener noreferrer" className="aul text-sm font-sans" style={{ color: "var(--ink)" }}>
                        Download PDF ↓
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            </article>
          </FadeIn>
        ))}
      </section>
    </main>
  );
}
