import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Reveal, { LineHeading } from '@/components/ui/Reveal';
import { HERO_ROLES } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-20 items-center pb-20 pt-32 md:pt-36">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="order-2 flex flex-col gap-10 lg:order-1 lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="h-px w-10 bg-accent" aria-hidden />
              Portfolio / 2026
            </p>
          </Reveal>

          <LineHeading
            as="h1"
            delay={150}
            lines={[
              'THINK BEYOND.',
              <span key="build" className="text-accent">
                BUILD FORWARD.
              </span>,
            ]}
            className="font-display text-[10.5vw] font-bold uppercase leading-[1.2] tracking-[-0.04em] md:text-[clamp(3.5rem,5.6vw,5.75rem)]"
          />

          <Reveal delay={500} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-display text-xl font-bold uppercase tracking-[-0.01em] md:text-2xl">Aatharshni B.</p>
              <ul className="flex flex-col gap-1 font-mono text-sm text-muted">
                {HERO_ROLES.map((role, index) => (
                  <li key={role} className="flex items-center gap-3">
                    <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <p className="max-w-xl text-base leading-normal text-muted md:text-lg">
              Exploring ideas across science, technology, communication and business &mdash; driven by curiosity,
              independence and the desire to create meaningful opportunities.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-white"
              >
                Explore My Journey
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                View My Projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="order-1 lg:order-2 lg:col-span-5">
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 border border-accent md:translate-x-6 md:translate-y-6"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
              <img
                src="/images/profile.jpg"
                alt="Professional portrait of Aatharshni B. in a black suit"
                width={1122}
                height={1402}
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-muted">
              <span>Aatharshni B.</span>
              <span>Bioinformatics &amp; Data Science</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
