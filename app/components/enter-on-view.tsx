"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type EnterOnViewProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export default function EnterOnView({ children, className = "", delayMs = 0 }: EnterOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={visible ? `animate-hero-enter motion-reduce:animate-none motion-reduce:opacity-100 ${className}` : `opacity-0 ${className}`} style={visible && delayMs > 0 ? { animationDelay: `${delayMs}ms` } : undefined}>
      {children}
    </div>
  );
}
