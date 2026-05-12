import Link from "next/link";

const links = [
  { label: "Work",      href: "/work" },
  { label: "About",     href: "/about" },
  { label: "Views",     href: "/views" },
  { label: "Resources", href: "/resources" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-10 max-w-[1280px] mx-auto"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="flex flex-wrap gap-6">
          <Link href="/" className="display text-sm transition-opacity duration-200 hover:opacity-50" style={{ color: "var(--stone)" }}>
            Liliana Kowalski
          </Link>
          <a href="mailto:lilianakowalskipolicy@gmail.com" className="text-sm font-sans transition-opacity duration-200 hover:opacity-50" style={{ color: "var(--stone)" }}>
            lilianakowalskipolicy@gmail.com
          </a>
        </div>
        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-sans transition-opacity duration-200 hover:opacity-50" style={{ color: "var(--stone)" }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
