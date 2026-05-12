"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import resourcesData from "../../content/resources.json";

type Cat = "All" | "Reproductive Care" | "Immigration" | "Legal Aid" | "Mental Health";
const cats: Cat[] = ["All", "Reproductive Care", "Immigration", "Legal Aid", "Mental Health"];

export default function ResourcesPage() {
  const [active, setActive] = useState<Cat>("All");
  const all = resourcesData.resources as Array<{
    name: string; cat: string; desc: string; url: string; note: string;
  }>;
  const filtered = active === "All" ? all : all.filter((r) => r.cat === active);

  return (
    <main>
      <PageHeader label="Resources" title="Access &amp; Support" subtitle="Curated organizations for people who need them. Verify contact information directly — things change." />
      <section className="px-6 md:px-12 py-16 max-w-[1280px] mx-auto">
        <div className="flex flex-wrap gap-2 mb-12 pb-6" style={{ borderBottom: "1px solid var(--rule)" }}>
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-sm font-sans px-4 py-1.5 rounded-full transition-all duration-200"
              style={active === cat
                ? { background: "var(--ink)", color: "var(--parchment)" }
                : { color: "var(--stone)", border: "1px solid var(--rule)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {filtered.map((r, i) => (
            <FadeIn key={r.name} delay={Math.min(i * 18, 300)}>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 py-6" style={{ borderBottom: "1px solid var(--rule)" }}>
                <div>
                  <div className="flex flex-wrap items-baseline gap-4 mb-1.5">
                    <h3 className="display text-xl tracking-[-0.01em]" style={{ color: "var(--ink)" }}>{r.name}</h3>
                    <span className="text-xs font-sans" style={{ color: "var(--rule)" }}>{r.cat}</span>
                  </div>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: "var(--stone)" }}>{r.desc}</p>
                  {r.note && <p className="text-sm font-sans mt-1" style={{ color: "var(--clay)" }}>{r.note}</p>}
                </div>
                <a
                  href={`https://${r.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aul text-sm font-sans self-start sm:self-center shrink-0"
                  style={{ color: "var(--stone)" }}
                >
                  {r.url} ↗
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-10 text-sm font-sans" style={{ color: "var(--stone)" }}>
          Know of an organization that should be here?{" "}
          <a href="mailto:lilianakowalskipolicy@gmail.com" className="aul" style={{ color: "var(--ink)" }}>Let me know.</a>
        </p>
      </section>
    </main>
  );
}
