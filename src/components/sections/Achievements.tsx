import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { ACHIEVEMENTS, type AchievementType } from '@/data/portfolio';

const TYPE_STYLES: Record<AchievementType, string> = {
  Presentation: 'border-accent text-accent',
  Participation: 'border-line text-muted',
  Award: 'border-accent bg-accent text-ink',
  Course: 'border-line text-muted',
  Role: 'border-line text-muted',
  Workshop: 'border-line text-muted',
  Publication: 'border-accent text-accent',
};

const LEGEND_TYPES = Object.keys(TYPE_STYLES) as AchievementType[];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="03" label="Achievements" lines={['EVERY STEP BUILDS THE NEXT.']} />

        <ul className="mb-12 flex flex-wrap gap-2" aria-label="Achievement type labels">
          {LEGEND_TYPES.map((type) => (
            <li
              key={type}
              className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] ${TYPE_STYLES[type]}`}
            >
              {type}
            </li>
          ))}
        </ul>

        <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 80} className={groupIndex === 0 ? 'md:col-span-2 lg:col-span-2' : ''}>
              <article className="group relative flex h-full flex-col gap-8 bg-ink p-8 transition-colors duration-500 hover:bg-ink-soft md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-display text-2xl font-bold uppercase leading-[1.2] tracking-[-0.01em] md:text-3xl">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-accent">{String(groupIndex + 1).padStart(2, '0')}</span>
                </div>

                <ul className="flex flex-col">
                  {group.items.map((item) => (
                    <li
                      key={item.text}
                      className="flex flex-col gap-3 border-t border-line py-5 first:border-t-0 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                    >
                      <p className="text-sm leading-normal text-white md:text-base">{item.text}</p>
                      <span
                        className={`shrink-0 self-start border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${TYPE_STYLES[item.type]}`}
                      >
                        {item.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
