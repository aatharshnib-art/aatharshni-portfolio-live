import { useEffect, useRef, useState } from 'react';
import { canUseCustomCursor } from '@/lib/motion';

const TRAIL_LENGTH = 6;
const TRAIL_SIZE = 6;
const INTERACTIVE_SELECTOR = 'a, button, [role="button"], label, summary, select, [data-cursor="hover"]';
const TEXT_SELECTOR = 'input, textarea, [contenteditable="true"]';

interface Point {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [enabled] = useState(canUseCustomCursor);
  const layerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const layer = layerRef.current;
    const head = headRef.current;
    const trailEls = trailRefs.current;
    if (!enabled || !layer || !head) return;

    document.documentElement.classList.add('custom-cursor-active');

    const target: Point = { x: 0, y: 0 };
    const position: Point = { x: 0, y: 0 };
    const trail: Point[] = trailEls.map(() => ({ x: 0, y: 0 }));
    let visible = false;
    let frame = 0;

    const clamp = (value: number, max: number) => Math.min(Math.max(value, 0), max);

    const show = () => {
      visible = true;
      position.x = target.x;
      position.y = target.y;
      trail.forEach((point) => Object.assign(point, target));
      layer.style.opacity = '1';
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      target.x = clamp(event.clientX, window.innerWidth);
      target.y = clamp(event.clientY, window.innerHeight);
      if (!visible) show();
    };

    const onPointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      layer.dataset.mode = event.target.closest(TEXT_SELECTOR) ? 'text' : 'default';
      head.dataset.hover = event.target.closest(INTERACTIVE_SELECTOR) ? 'true' : 'false';
    };

    const onPointerDown = () => {
      head.dataset.pressed = 'true';
    };

    const onPointerUp = () => {
      head.dataset.pressed = 'false';
    };

    const onPointerLeave = () => {
      visible = false;
      layer.style.opacity = '0';
    };

    const tick = () => {
      const prevX = position.x;
      const prevY = position.y;
      position.x += (target.x - position.x) * 0.25;
      position.y += (target.y - position.y) * 0.25;
      head.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;

      let leadX = position.x;
      let leadY = position.y;
      trail.forEach((point, index) => {
        const ease = 0.3 - index * 0.04;
        point.x += (leadX - point.x) * ease;
        point.y += (leadY - point.y) * ease;
        leadX = point.x;
        leadY = point.y;
        const el = trailEls[index];
        if (el) {
          const scale = 1 - index * 0.12;
          el.style.transform = `translate3d(${point.x - TRAIL_SIZE / 2}px, ${point.y - TRAIL_SIZE / 2}px, 0) scale(${scale})`;
        }
      });

      const lookX = Math.max(-2, Math.min(2, (position.x - prevX) * 0.4));
      const lookY = Math.max(-2, Math.min(2, (position.y - prevY) * 0.4));
      head.style.setProperty('--eye-x', `${lookX}px`);
      head.style.setProperty('--eye-y', `${lookY}px`);

      frame = requestAnimationFrame(tick);
    };

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('pointerup', onPointerUp, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('pointerup', onPointerUp);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="custom-cursor-layer pointer-events-none fixed inset-0 z-[80] overflow-hidden"
      style={{ opacity: 0 }}
    >
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => (
        <span
          key={index}
          ref={(el) => {
            trailRefs.current[index] = el;
          }}
          className="absolute left-0 top-0 rounded-full bg-accent"
          style={{
            width: `${TRAIL_SIZE}px`,
            height: `${TRAIL_SIZE}px`,
            opacity: 0.6 - index * 0.09,
            boxShadow: '0 0 10px 2px rgba(240, 75, 50, 0.4)',
          }}
        />
      ))}

      <div ref={headRef} className="group absolute left-0 top-0 h-0 w-0">
        <div className="absolute -left-[13px] -top-[13px] h-[26px] w-[26px] rounded-[8px] border border-white/85 bg-ink-raised shadow-[0_0_16px_rgba(240,75,50,0.25)] transition-[transform,border-color,box-shadow] duration-300 ease-out group-data-[hover=true]:scale-[1.45] group-data-[hover=true]:border-accent group-data-[hover=true]:shadow-[0_0_24px_rgba(240,75,50,0.55)] group-data-[pressed=true]:scale-90">
          <span className="absolute -top-[7px] left-1/2 h-[5px] w-px -ml-px bg-white/80" />
          <span className="cursor-pulse absolute -top-[10px] left-1/2 h-[6px] w-[6px] -ml-[3px] rounded-full bg-accent" />

          <span
            className="absolute left-[5px] top-[8px] h-[4px] w-[6px]"
            style={{ transform: 'translate(var(--eye-x, 0px), var(--eye-y, 0px))' }}
          >
            <span className="cursor-eye block h-full w-full bg-accent" />
          </span>
          <span
            className="absolute left-[15px] top-[8px] h-[4px] w-[6px]"
            style={{ transform: 'translate(var(--eye-x, 0px), var(--eye-y, 0px))' }}
          >
            <span className="cursor-eye block h-full w-full bg-accent" />
          </span>

          <span className="absolute left-[8px] top-[16px] h-px w-[10px] bg-white/60 transition-all duration-300 group-data-[hover=true]:h-[2px] group-data-[hover=true]:bg-accent" />
        </div>
      </div>
    </div>
  );
}
