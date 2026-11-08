import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

type Phase = 'loading' | 'exit' | 'done';

const DURATION = 1100;

export default function Intro() {
  const [phase, setPhase] = useState<Phase>(() => (prefersReducedMotion() ? 'done' : 'loading'));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (phase !== 'loading') return;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setPhase('exit');
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'exit') return;
    const timer = window.setTimeout(() => setPhase('done'), 900);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[60] flex flex-col justify-between bg-ink px-6 py-8 transition-transform duration-[900ms] ease-out md:px-10 md:py-10 ${
        phase === 'exit' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Portfolio / 2026</p>
      <div className="flex flex-col gap-6">
        <p className="font-display text-[11vw] font-bold uppercase leading-[1.2] tracking-[-0.03em] text-white md:text-7xl">
          Aatharshni B.
        </p>
        <div className="h-px w-full bg-line">
          <div className="h-px bg-accent transition-[width] duration-100 ease-linear" style={{ width: `${count}%` }} />
        </div>
      </div>
      <p className="self-end font-display text-7xl font-bold tabular-nums tracking-[-0.04em] text-accent md:text-9xl">
        {String(count).padStart(3, '0')}
      </p>
    </div>
  );
}
