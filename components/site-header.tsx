"use client";

import Link from "next/link";

const links = ["about", "skills", "experience", "projects", "achievements", "contact"];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-12">
        <Link href="#home" className="font-display text-white">Sujith S M</Link>
        <nav className="hidden gap-5 text-sm text-white/70 md:flex">
          {links.map((l) => <Link key={l} href={`#${l}`} className="hover:text-white">{l}</Link>)}
        </nav>
        <span className="text-xs tracking-[0.2em] text-white/45">PORTFOLIO</span>
      </div>
    </header>
  );
}
