import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

const experience = [
  {
    period: "2024–2026",
    title: "Legislative Intern",
    org: "Madison Government Relations Firm",
    bullets: ["Analyze state legislation and prepare policy briefings across healthcare, transportation, and regulatory domains", "Track legislative developments and summarize policy implications for client portfolios"],
  },
];

const education = [
  {
    period: "2022–2026",
    title: "B.A. Political Science & Public Policy",
    org: "University of Wisconsin–Madison",
    bullets: ["Senior Thesis: Networks of Influence — Legislative Text Diffusion in State Abortion Policy After Dobbs", "Coursework: American Politics, Quantitative Methods, Policy Design, Legislative Process"],
  },
];

const skills = [
  { label: "Research", items: ["Legislative analysis", "Policy briefing", "Computational text analysis", "Quantitative methods"] },
  { label: "Technical", items: ["Python", "R", "LaTeX", "Stata"] },
  { label: "Policy Areas", items: ["Healthcare access", "Reproductive rights", "Federal–state coordination", "Regulatory compliance"] },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader label="About" title="Liliana Kowalski" subtitle="Political scientist building toward federal legislative counsel work." />

      {/* Human */}
      <section className="px-6 md:px-12 py-20 max-w-[1280px] mx-auto" style={{ borderBottom: "1px solid var(--rule)" }}>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <p className="text-xs tracking-[0.3em] uppercase font-sans pt-1" style={{ color: "var(--stone)" }}>Hello</p>
            <div className="space-y-6 max-w-2xl">
              <p className="display-i text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.3] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                &ldquo;We&rsquo;re living in the same world, at the same time. That alone is enough to connect over.&rdquo;
              </p>
              <p className="text-base font-sans leading-relaxed" style={{ color: "var(--stone)" }}>
                I think about connection a lot — not just in the abstract, but in the texture of how I try to show up. In research, in practice, in conversation. The most interesting problems I&rsquo;ve encountered aren&rsquo;t primarily technical. They&rsquo;re about what it takes for people to trust each other across difference, and what gets in the way.
              </p>
              <p className="text-base font-sans leading-relaxed" style={{ color: "var(--stone)" }}>
                Outside of policy, I&rsquo;m drawn to the moments where systems reveal themselves — the legislative hearing where someone&rsquo;s whole life gets reduced to a line item, the community meeting where things get honest in ways no official document captures.
              </p>
              <p className="text-base font-sans leading-relaxed" style={{ color: "var(--stone)" }}>
                I don&rsquo;t think you need to share someone&rsquo;s exact circumstances to care about what happens to them. We&rsquo;re here at the same time. That&rsquo;s the baseline.{" "}
                <a href="mailto:lilianakowalskipolicy@gmail.com" className="aul" style={{ color: "var(--ink)" }}>I&rsquo;d love to hear from you.</a>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Professional */}
      <section className="px-6 md:px-12 py-20 max-w-[1280px] mx-auto" style={{ borderBottom: "1px solid var(--rule)" }}>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-sans mb-6" style={{ color: "var(--stone)" }}>Currently Seeking</p>
              <ul className="space-y-2 mb-10">
                {["Legislative Counsel", "Policy Research", "Government Affairs"].map((r) => (
                  <li key={r} className="display text-2xl tracking-[-0.01em]" style={{ color: "var(--ink)" }}>{r}</li>
                ))}
              </ul>
              <p className="text-xs tracking-[0.3em] uppercase font-sans mb-4" style={{ color: "var(--stone)" }}>Focus Areas</p>
              <ul className="space-y-1.5">
                {["Healthcare Access", "Reproductive Rights", "Federal–State Policy", "Legislative Drafting", "Policy Diffusion", "Quantitative Methods"].map((f) => (
                  <li key={f} className="text-sm font-sans" style={{ color: "var(--stone)" }}>— {f}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              {["As a political science and public policy student at UW–Madison, I've spent four years studying how laws are written, borrowed, and transformed — and why it matters who does the writing.",
                "My senior thesis uses computational text analysis to trace how abortion legislation spread across states after Dobbs v. Jackson Women's Health Organization — mapping template diffusion through advocacy networks and uncovering the infrastructure behind both protective and restrictive policy responses.",
                "I'm building toward federal legislative work focused on healthcare access, reproductive rights, and federal–state coordination."
              ].map((t, i) => (
                <p key={i} className="text-base font-sans leading-relaxed" style={{ color: "var(--stone)" }}>{t}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Resume */}
      <section className="px-6 md:px-12 py-20 max-w-[1280px] mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="display text-2xl tracking-[-0.01em]" style={{ color: "var(--ink)" }}>Resume</h2>
            <a href="/LilianaKowalski_CV.pdf" className="aul text-sm font-sans" style={{ color: "var(--stone)" }}>Download PDF →</a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">
            <div>
              {[{ label: "Experience", items: experience }, { label: "Education", items: education }].map((section) => (
                <div key={section.label} className="mb-10">
                  <p className="text-xs tracking-[0.3em] uppercase font-sans mb-1" style={{ color: "var(--stone)" }}>{section.label}</p>
                  {section.items.map((item, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-10 py-7" style={{ borderTop: "1px solid var(--rule)" }}>
                      <p className="text-sm font-sans" style={{ color: "var(--stone)" }}>{item.period}</p>
                      <div>
                        <h4 className="display text-lg tracking-[-0.01em] mb-1" style={{ color: "var(--ink)" }}>{item.title}</h4>
                        <p className="text-sm font-sans mb-3" style={{ color: "var(--clay)" }}>{item.org}</p>
                        <ul className="space-y-1.5">
                          {item.bullets.map((b, j) => (
                            <li key={j} className="text-sm font-sans leading-relaxed flex gap-2" style={{ color: "var(--stone)" }}>
                              <span style={{ color: "var(--rule)" }}>—</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-sans mb-6" style={{ color: "var(--stone)" }}>Skills</p>
              <div className="space-y-8">
                {skills.map((g) => (
                  <div key={g.label}>
                    <p className="text-xs font-sans mb-3" style={{ color: "var(--stone)", opacity: 0.6 }}>{g.label}</p>
                    <ul className="space-y-1.5">
                      {g.items.map((item) => (
                        <li key={item} className="text-sm font-sans" style={{ color: "var(--stone)" }}>— {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
