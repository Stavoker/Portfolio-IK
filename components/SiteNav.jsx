"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav() {
  function scrollToSection(event) {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = window.scrollY + target.getBoundingClientRect().top - 16;
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <nav className="home-nav" aria-label="Sections">
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={scrollToSection}>
          {link.label}
        </a>
      ))}
      <a href="mailto:ivanlisovenko90@gmail.com">e-mail ivanlisovenko90@gmail.com</a>
    </nav>
  );
}
