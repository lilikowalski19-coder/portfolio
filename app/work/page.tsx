import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    num: "01",
    category: "Senior Thesis · 2026",
    title: "Networks of Influence: Legislative Text Diffusion in State Abortion Policy After Dobbs",
    desc: "A computational analysis of 188 state abortion bills introduced in 2023, tracing how legislative templates spread through advocacy networks following Dobbs v. Jackson Women's Health Organization. Using TF-IDF text similarity across 104,000+ n-gram features, the study maps diffusion patterns and identifies the structural factors that shape legislative novelty across states.",
    method: ["Computational Text Analysis", "TF-IDF Vectorization", "OLS Regression", "Clustered SE by State", "Policy Diffusion Theory"],
    finding: "Protective bills show coordinated diffusion through national advocacy networks. Professional legislatures adapt rather than copy. Both unified Democratic and unified Republican governments produce more novel legislation than divided ones.",
  },
  {
    num: "02",
    category: "Policy Paper · 2025",
    title: "Mandatory Waiting Periods and Abortion Access",
    desc: "An analysis of mandatory waiting period requirements and their documented effects on abortion access, procedure delays, and health outcomes — with focus on the compounded burdens placed on patients in states with limited provider availability.",
    method: ["Policy Analysis", "Literature Review"],
    finding: null,
  },
];

export default function WorkPage() {
  return (
    <main>
      <PageHeader label="Work" title="Research &amp; Writing" subtitle="Computational analysis, policy papers, and legislative research." />
      <section className="px-6 md:px-12 py-20 max-w-[1280px] mx-auto">
        {projects.map((p, i) => (
          <FadeIn key={p.num} delay={i * 80}>
            <article className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 py-16" style={{ borderBottom: "1px solid var(--rule)" }}>
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
              </div>
            </article>
          </FadeIn>
        ))}
      </section>
    </main>
  );
}
