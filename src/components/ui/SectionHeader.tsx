import type { ReactNode } from 'react';
import Reveal, { LineHeading } from '@/components/ui/Reveal';

interface SectionHeaderProps {
  index: string;
  label: string;
  lines: ReactNode[];
}

export default function SectionHeader({ index, label, lines }: SectionHeaderProps) {
  return (
    <div className="mb-16 flex flex-col gap-8 md:mb-20">
      <Reveal>
        <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent">{index}</span>
          <span className="h-px w-10 bg-line" aria-hidden />
          <span>{label}</span>
        </p>
      </Reveal>
      <LineHeading
        lines={lines}
        className="font-display text-[11vw] font-bold uppercase leading-[1.2] tracking-[-0.03em] md:text-[clamp(2.75rem,5.6vw,5.5rem)]"
      />
    </div>
  );
}
