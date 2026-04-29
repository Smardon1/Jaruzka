'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  target: number;
  suffix?: string;
  duration?: number;
  isFloat?: boolean;
}

export default function StatCounter({ target, suffix = '', duration = 2200, isFloat = false }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = eased * target;
              setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
              if (progress < 1) requestAnimationFrame(animate);
              else setCount(target);
            };
            requestAnimationFrame(animate);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, isFloat]);

  return (
    <span ref={ref} className="stat-number">
      {isFloat ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}
