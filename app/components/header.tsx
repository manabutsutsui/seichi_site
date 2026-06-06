"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "機能", href: "#features" },
  { label: "スクリーンショット", href: "#screenshots" },
  { label: "ダウンロード", href: "#download" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-black/5 bg-white/70 shadow-sm backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80">
          <Image src="/icon.png" alt="Seichi" width={48} height={48} className="rounded-[9px] shadow-sm" priority />
          <span className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${scrolled ? "text-zinc-900" : "text-white drop-shadow-sm"}`}>Seichi</span>
        </Link>
   

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`rounded-full px-3 py-1.5 text-sm font-bold transition-colors duration-300 sm:px-4 ${scrolled ? "text-zinc-600 hover:bg-sky-50 hover:text-sky-600" : "text-white/90 hover:bg-white/15 hover:text-white"}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
