import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import viewsData from "../../content/views.json";

export default function ViewsPage() {
  const { intro, views } = viewsData;

  return (
    <main>
      <PageHeader label="Views" title="What I Believe" subtitle="On policy, access, and the gap between what laws say and what they do." />
      <section className="px-6 md:px-12 py-20 max-w-[1280px] mx-auto">
        <FadeIn>
          <p className="text-base font-sans leading-relaxed mb-16 max-w-xl" style={{ color: "var(--stone)" }}>
            {intro}
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
