import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

const views = [
  { topic: "On abortion access", headline: "The geography of rights is a policy failure.", body: "After Dobbs, my research tracked how 46 states introduced abortion legislation in a single year. What that data reveals isn't just about abortion — it shows how quickly fundamental rights become dependent on your zip code. Federal policy has an obligation to set a floor, not a ceiling. Rights that vary by state aren't rights — they're privileges." },
  { topic: "On legislative language", headline: "The words in laws determine who gets protected — and who gets erased.", body: "Most people will never read the bills that govern their lives. That's not inevitable — it's a design choice. Vague, inaccessible, or deliberately ambiguous legislative language creates gaps that are exploited by those with the resources to do so. Clear drafting is a form of equity." },
  { topic: "On immigration policy", headline: "Our immigration systems should protect people, not process them.", body: "The gap between what immigration law says and what it does to real people is enormous — and often deliberate. Legal status shouldn't determine whether someone has access to basic human dignity. I believe in building toward policy that treats every person who interacts with it as fully human." },
  { topic: "On advocacy and policy change", headline: "Durable change comes from the intersection of organizing and drafting.", body: "My research showed that the most influential actors in post-Dobbs state policy weren't just lawmakers — they were the advocacy networks writing the bills. Legislative strategy divorced from community organizing produces policies that pass but don't land. The two have to move together." },
];

export default function ViewsPage() {
  return (
    <main>
      <PageHeader label="Views" title="What I Believe" subtitle="On policy, access, and the gap between what laws say and what they do." />
      <section className="px-6 md:px-12 py-20 max-w-[1280px] mx-auto">
        <FadeIn>
          <p className="text-base font-sans leading-relaxed mb-16 max-w-xl" style={{ color: "var(--stone)" }}>
            These are my perspectives — not position papers, not academic arguments. Just what I believe, shaped by research, organizing, and years of watching policy land (and fail to land) on real people.
          </p>
        </FadeIn>

        {views.map((v, i) => (
          <FadeIn key={i} delay={i * 60}>
            <article className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16 py-14" style={{ borderTop: "1px solid var(--rule)" }}>
              <p className="text-xs tracking-[0.25em] uppercase font-sans pt-1" style={{ color: "var(--stone)" }}>{v.topic}</p>
              <div>
                <h2 className="display text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em] mb-5" style={{ color: "var(--ink)" }}>{v.headline}</h2>
                <p className="text-base font-sans leading-relaxed max-w-2xl" style={{ color: "var(--stone)" }}>{v.body}</p>
              </div>
            </article>
          </FadeIn>
        ))}

        <FadeIn>
          <div className="pt-14 flex flex-col sm:flex-row sm:items-center gap-5" style={{ borderTop: "1px solid var(--rule)" }}>
            <p className="text-sm font-sans leading-relaxed max-w-sm" style={{ color: "var(--stone)" }}>
              Working at the intersection of policy, access, and legislative reform? Let&rsquo;s connect.
            </p>
            <a href="mailto:lilianakowalskipolicy@gmail.com" className="aul display text-xl shrink-0" style={{ color: "var(--ink)" }}>
              Get in touch →
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
