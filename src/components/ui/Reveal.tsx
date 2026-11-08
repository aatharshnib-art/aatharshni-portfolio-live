import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

interface LineHeadingProps {
  lines: ReactNode[];
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function LineHeading({ lines, as: Tag = 'h2', delay = 0, className = '' }: LineHeadingProps) {
  const [ref, inView] = useInView<HTMLHeadingElement>(0.2);
  return (
    <Tag ref={ref} className={`${className} ${inView ? 'is-visible' : ''}`}>
      {lines.map((line, index) => (
        <span key={index} className="line-mask">
          <span className="line-inner" style={{ '--reveal-delay': `${delay + index * 120}ms` } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
