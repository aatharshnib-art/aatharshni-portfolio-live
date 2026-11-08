import Reveal, { LineHeading } from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { LEADERSHIP_GROUPS } from '@/data/portfolio';

export default function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-20 border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="04"
          label="Leadership and Communication"
          lines={['BEHIND EVERY IDEA IS THE ABILITY TO MAKE IT HAPPEN.']}
        />

        <Reveal className="mb-20 max-w-2xl md:mb-28">
          <p className="text-base leading-normal text-muted md:text-lg">
            I enjoy being in environments where ideas are exchanged, people come together and something meaningful takes
            shape.
          </p>
        </Reveal>

        <ol className="relative flex flex-col gap-16 md:gap-20">
          {LEADERSHIP_GROUPS.map((group, groupIndex) => (
            <li key={group.title} className="grid gap-8 md:grid-cols-12 md:gap-10">
              <Reveal className="relative md:col-span-5 md:sticky md:top-32 md:self-start">
                <span className="mb-4 block font-mono text-xs text-accent">{String(groupIndex + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl font-bold uppercase leading-[1.2] tracking-[-0.01em] md:text-3xl">
                  {group.title}
                </h3>
              </Reveal>

              <div className="relative border-l border-line pl-8 md:col-span-6 md:col-start-7">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-accent" aria-hidden />
                <ul className="flex flex-col">
                  {group.items.map((item, itemIndex) => (
                    <li key={item}>
                      <Reveal delay={itemIndex * 70}>
                        <div className="group flex gap-5 border-b border-line py-5 first:pt-0">
                          <span className="pt-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-accent">
                            {String(itemIndex + 1).padStart(2, '0')}
                          </span>
                          <p className="text-base leading-normal text-muted transition-colors duration-300 group-hover:text-white md:text-lg">
                            {item}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-28 border-t border-line pt-16 md:mt-36">
          <LineHeading
            lines={[
              'SPEAK WITH PURPOSE.',
              'LEAD WITH RESPONSIBILITY.',
              <span key="execute" className="text-accent">
                EXECUTE WITH INTENTION.
              </span>,
            ]}
            className="font-display text-[10vw] font-bold uppercase leading-[1.2] tracking-[-0.03em] md:text-[clamp(2.5rem,6vw,6rem)]"
          />
        </div>
      </div>
    </section>
  );
}
