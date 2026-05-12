"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

type Cat = "All" | "Reproductive Care" | "Immigration" | "Legal Aid" | "Mental Health";

const resources = [
  { name: "Planned Parenthood", cat: "Reproductive Care" as Cat, desc: "Comprehensive reproductive healthcare, telehealth, and referrals nationwide.", url: "plannedparenthood.org", note: "Find a health center" },
  { name: "National Abortion Federation Hotline", cat: "Reproductive Care" as Cat, desc: "Financial assistance and logistical support for people seeking abortion care.", url: "prochoice.org", note: "1-800-772-9100" },
  { name: "National Network of Abortion Funds", cat: "Reproductive Care" as Cat, desc: "Connects people to local funds covering abortion costs, travel, and lodging.", url: "abortionfunds.org" },
  { name: "Aid Access", cat: "Reproductive Care" as Cat, desc: "Telehealth consultations and medication abortion by mail for people in the U.S.", url: "aidaccess.org" },
  { name: "If/When/How", cat: "Reproductive Care" as Cat, desc: "Reproductive justice legal support and a legal defense hotline.", url: "ifwhenhow.org", note: "Repro Legal Helpline: 1-844-868-2812" },
  { name: "Reprocare Healthline", cat: "Reproductive Care" as Cat, desc: "Support navigating care, including travel logistics and financial assistance.", url: "reprocarehealthline.org", note: "1-833-226-7821" },
  { name: "RAICES", cat: "Immigration" as Cat, desc: "Immigration legal services, family reunification, and policy advocacy.", url: "raicestexas.org" },
  { name: "National Immigration Law Center", cat: "Immigration" as Cat, desc: "Advances the rights of low-income immigrants through policy and legal support.", url: "nilc.org" },
  { name: "ACLU Immigrants' Rights Project", cat: "Immigration" as Cat, desc: "Litigates cases challenging unlawful immigration enforcement and detention.", url: "aclu.org/immigrants-rights" },
  { name: "United We Dream", cat: "Immigration" as Cat, desc: "Undocumented youth–led network with advocacy resources and community support.", url: "unitedwedream.org" },
  { name: "Immigration Legal Resource Center", cat: "Immigration" as Cat, desc: "Training and resources for advocates, legal aid providers, and community members.", url: "ilrc.org" },
  { name: "Vera Institute of Justice", cat: "Immigration" as Cat, desc: "Research and direct services for immigrants detained or facing deportation.", url: "vera.org" },
  { name: "ACLU", cat: "Legal Aid" as Cat, desc: "Civil rights and civil liberties litigation, advocacy, and know-your-rights resources.", url: "aclu.org" },
  { name: "Legal Services Corporation", cat: "Legal Aid" as Cat, desc: "The largest funder of free civil legal aid in the U.S.", url: "lsc.gov" },
  { name: "NAACP Legal Defense Fund", cat: "Legal Aid" as Cat, desc: "Racial justice litigation and advocacy through law.", url: "naacpldf.org" },
  { name: "Lambda Legal", cat: "Legal Aid" as Cat, desc: "Legal advocacy for LGBTQ+ people and people living with HIV.", url: "lambdalegal.org" },
  { name: "National Women's Law Center", cat: "Legal Aid" as Cat, desc: "Legal advocacy and resources for gender equity across sectors.", url: "nwlc.org" },
  { name: "Disability Rights Advocates", cat: "Legal Aid" as Cat, desc: "Non-profit disability rights legal center representing people with all disabilities.", url: "dralegal.org" },
  { name: "Crisis Text Line", cat: "Mental Health" as Cat, desc: "Free, 24/7 crisis support by text with trained counselors.", url: "crisistextline.org", note: "Text HOME to 741741" },
  { name: "988 Suicide & Crisis Lifeline", cat: "Mental Health" as Cat, desc: "Free crisis support by phone or chat, available 24/7.", url: "988lifeline.org", note: "Call or text 988" },
  { name: "SAMHSA National Helpline", cat: "Mental Health" as Cat, desc: "Free, confidential treatment referrals for mental health and substance use.", url: "samhsa.gov", note: "1-800-662-4357" },
  { name: "The Trevor Project", cat: "Mental Health" as Cat, desc: "Crisis intervention and suicide prevention for LGBTQ+ youth.", url: "thetrevorproject.org", note: "1-866-488-7386" },
  { name: "Trans Lifeline", cat: "Mental Health" as Cat, desc: "Trans-led peer support hotline run by and for trans people.", url: "translifeline.org", note: "US: 877-565-8860" },
  { name: "Therapy for Black Girls", cat: "Mental Health" as Cat, desc: "Directory of therapists and resources for Black women and girls.", url: "therapyforblackgirls.com" },
];

const cats: Cat[] = ["All", "Reproductive Care", "Immigration", "Legal Aid", "Mental Health"];

export default function ResourcesPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? resources : resources.filter((r) => r.cat === active);

  return (
    <main>
      <PageHeader label="Resources" title="Access &amp; Support" subtitle="Curated organizations for people who need them. Verify contact information directly — things change." />
      <section className="px-6 md:px-12 py-16 max-w-[1280px] mx-auto">

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6" style={{ borderBottom: "1px solid var(--rule)" }}>
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-sm font-sans px-4 py-1.5 rounded-full transition-all duration-200"
              style={
                active === cat
                  ? { background: "var(--ink)", color: "var(--parchment)" }
                  : { color: "var(--stone)", border: "1px solid var(--rule)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rows */}
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
