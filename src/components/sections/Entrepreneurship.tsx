import Reveal, { LineHeading } from '@/components/ui/Reveal';

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="scroll-mt-20 bg-accent text-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]">
            <span>06</span>
            <span className="h-px w-10 bg-ink" aria-hidden />
            <span>Entrepreneurship</span>
          </p>
        </Reveal>

        <LineHeading
          lines={['I DON\u2019T WANT TO JUST MAKE A LIVING.', 'I WANT TO BUILD SOMETHING THAT LASTS.']}
          className="font-display text-[10.5vw] font-bold uppercase leading-[1.2] tracking-[-0.035em] md:text-[clamp(2.75rem,7vw,7rem)]"
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-2xl font-bold uppercase leading-[1.2] tracking-[-0.01em] md:text-3xl">
              Curious about business. Fascinated by opportunities. Driven by the freedom to create, own and build.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-normal md:text-lg">
              From digital ventures to new business models, I&apos;m exploring how ideas become value, and how value
              becomes something bigger.
            </p>
            <p className="font-mono text-xs uppercase leading-normal tracking-[0.14em]">
              This section reflects my aspirations and ongoing exploration, not an established business.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-28 border-t border-ink pt-12 md:mt-36">
          <p className="font-display text-[9vw] font-bold uppercase leading-[1.2] tracking-[-0.035em] md:text-[clamp(2.5rem,8vw,8.5rem)]">
            Not just earning.
          </p>
          <p className="font-display text-[9vw] font-bold uppercase leading-[1.2] tracking-[-0.035em] md:text-[clamp(2.5rem,8vw,8.5rem)]">
            Building. Owning. Growing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
