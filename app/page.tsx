import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import homeData from "../content/home.json";
import workData from "../content/work.json";

const workItems = workData.projects.slice(0, 3);
const { featuredBeliefs, gridBeliefs, process: processSteps } = homeData;

export default function Home() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-[100svh] flex flex-col px-6 md:px-12 pt-32 pb-14 max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-20 pt-4" style={{ borderTop: "1px solid var(--rule)" }}>
          <p className="display-i text-base" style={{ color: "var(--stone)" }}>Liliana Kowalski</p>
          <p className="text-xs tracking-[0.3em] uppercase font-sans" style={{ color: "var(--stone)" }}>Policy Researcher</p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="display text-[clamp(3.4rem,9.5vw,10rem)] leading-[0.98] tracking-[-0.03em] mb-16"
            style={{ color: "var(--ink)", maxWidth: "14ch" }}
          >
            Reimagining how policy serves{" "}
            <span className="display-i" style={{ color: "var(--clay)" }}>people.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">
            <p className="text-base font-sans leading-relaxed" style={{ color: "var(--stone)", maxWidth: "36ch" }}>
              Working at the intersection of legislative process and human dignity — I research how policy is made, borrowed, and deployed, and why that matters.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/work"      className="aul display text-2xl" style={{ color: "var(--ink)" }}>My Work →</Link>
              <Link href="/about"     className="aul display text-2xl" style={{ color: "var(--stone)" }}>About Me →</Link>
              <Link href="/resources" className="aul display text-2xl" style={{ color: "var(--stone)" }}>Resources →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Work ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-28 max-w-[1280px] mx-auto" style={{ borderTop: "1px solid var(--rule)" }}>
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="display text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              The Work
            </h2>
            <Link href="/work" className="aul text-sm font-sans" style={{ color: "var(--stone)" }}>All research →</Link>
          </div>
        </FadeIn>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {workItems.map((item, i) => (
            <FadeIn key={item.num} delay={i * 65}>
              <Link
                href="/work"
                className="group grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_180px] gap-4 md:gap-10 py-9 items-start hover:opacity-55 transition-opacity duration-200"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                <span className="display text-xl pt-0.5" style={{ color: "var(--clay)" }}>{item.num}</span>
                <div>
                  <h3 className="display text-[clamp(1.4rem,2.8vw,2.2rem)] tracking-[-0.01em] mb-2 leading-snug" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: "var(--stone)" }}>{item.desc}</p>
                </div>
                <span className="text-xs font-sans mt-1 hidden md:block text-right" style={{ color: "var(--clay)" }}>{item.category}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── How I Work ───────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-28" style={{ background: "var(--linen)", borderTop: "1px solid var(--rule)" }}>
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="mb-16">
            <h2 className="display text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              How I Work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 55}>
                <div style={{ borderTop: "2px solid var(--clay)", paddingTop: "1.5rem" }}>
                  <p className="display text-4xl leading-none mb-5 select-none" style={{ color: "var(--clay)", opacity: 0.35 }}>{s.num}</p>
                  <h3 className="display text-xl leading-snug mb-3 tracking-[-0.01em]" style={{ color: "var(--ink)" }}>{s.title}</h3>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: "var(--stone)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── I believe ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-28 max-w-[1280px] mx-auto" style={{ borderTop: "1px solid var(--rule)" }}>
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="display text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.02em]" style={{ color: "var(--ink)" }}>I believe…</h2>
            <Link href="/views" className="aul text-sm font-sans" style={{ color: "var(--stone)" }}>Read my views →</Link>
          </div>
        </FadeIn>

        <FadeIn delay={40}>
          <div className="mb-12" style={{ borderTop: "1px solid var(--rule)", paddingTop: "2rem" }}>
            {featuredBeliefs.map((b, i) => (
              <p key={i} className="display-i text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.2] tracking-[-0.02em] mb-4" style={{ color: "var(--ink)" }}>
                {b}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 pt-8" style={{ borderTop: "1px solid var(--rule)" }}>
            {gridBeliefs.map((b, i) => (
              <p key={i} className="display-i text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.5]" style={{ color: "var(--stone)" }}>
                &ldquo;{b}&rdquo;
              </p>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Connect ──────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-28" style={{ background: "var(--linen)", borderTop: "1px solid var(--rule)" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase font-sans mb-8" style={{ color: "var(--stone)" }}>Get Connected</p>
            <h2 className="display text-[clamp(2.8rem,6.5vw,6.5rem)] leading-[1.0] tracking-[-0.03em]" style={{ color: "var(--ink)" }}>
              Let&rsquo;s work<br />
              <span className="display-i" style={{ color: "var(--clay)" }}>together.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="text-base font-sans leading-relaxed mb-10 max-w-sm" style={{ color: "var(--stone)" }}>
              Seeking positions in legislative counsel, policy research, and government affairs. Open to collaborators working on healthcare access, reproductive rights, or strategic policy reform.
            </p>
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {[
                { label: "lilianakowalskipolicy@gmail.com", href: "mailto:lilianakowalskipolicy@gmail.com", arrow: "↗" },
                { label: "LinkedIn", href: "https://linkedin.com/in/liliana-kowalski", arrow: "↗" },
                { label: "Download CV", href: "/LilianaKowalski_CV.pdf", arrow: "↓" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-5 hover:opacity-50 transition-opacity duration-200"
                  style={{ borderBottom: "1px solid var(--rule)", color: "var(--ink)" }}
                >
                  <span className="display text-xl">{item.label}</span>
                  <span className="font-sans text-sm" style={{ color: "var(--stone)" }}>{item.arrow}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
