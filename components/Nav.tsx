"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { label: "Work",      href: "/work" },
  { label: "About",     href: "/about" },
  { label: "Views",     href: "/views" },
  { label: "Resources", href: "/resources" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(240,235,225,0.94)" : "rgba(240,235,225,0.0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between"
          style={{ height: "64px" }}
        >
          <Link
            href="/"
            className="display text-sm tracking-[0.12em] uppercase transition-colors duration-200"
            style={{ color: "var(--ink)", letterSpacing: "0.14em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clay)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
          >
            Liliana Kowalski
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-sans transition-colors duration-200"
                  style={{ color: active ? "var(--clay)" : "var(--stone)" }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "var(--ink)"; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "var(--stone)"; }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden p-1 transition-colors duration-200"
            style={{ color: "var(--ink)" }}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col justify-between px-8 pt-28 pb-14"
          style={{ background: "rgba(240,235,225,0.97)", backdropFilter: "blur(16px)" }}
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col gap-3">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="display text-[3.2rem] leading-tight tracking-[-0.02em]"
                style={{ color: pathname === href ? "var(--clay)" : "var(--ink)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-xs tracking-[0.25em] uppercase font-sans" style={{ color: "var(--stone)" }}>
            Policy Researcher
          </p>
        </div>
      )}
    </>
  );
}
