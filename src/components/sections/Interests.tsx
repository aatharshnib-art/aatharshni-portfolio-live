import Reveal from '@/components/ui/Reveal';
import { INTERESTS } from '@/data/portfolio';

const SIZE_CLASSES = [
  'text-4xl md:text-6xl lg:text-7xl',
  'text-2xl md:text-4xl lg:text-5xl',
  'text-3xl md:text-5xl lg:text-6xl',
];

export default function Interests() {
  return (
    <section id="interests" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-10 bg-accent" aria-hidden />
            Interests and Continuous Learning
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb-16 max-w-4xl font-display text-3xl font-bold uppercase leading-[1.2] tracking-[-0.02em] md:mb-24 md:text-5xl">
            Curiosity doesn&apos;t follow a <span className="text-accent">single discipline.</span>
          </h2>
        </Reveal>

        <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 md:gap-x-10">
          {INTERESTS.map((interest, index) => (
            <li key={interest}>
              <Reveal delay={index * 50}>
                <span
                  className={`inline-block cursor-default font-display font-bold uppercase leading-[1.2] tracking-[-0.03em] text-white transition-all duration-500 ease-out hover:translate-x-2 hover:text-accent ${
                    SIZE_CLASSES[index % SIZE_CLASSES.length]
                  }`}
                >
                  {interest}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
