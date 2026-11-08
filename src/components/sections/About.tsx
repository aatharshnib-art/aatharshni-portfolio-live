import Reveal, { LineHeading } from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { DIMENSIONS } from '@/data/portfolio';

const PARAGRAPHS = [
  'I have never been interested in limiting myself to a predefined identity. I am driven by curiosity, independence and the desire to explore possibilities beyond familiar boundaries.',
  'I enjoy understanding complex ideas, communicating them clearly, bringing people together and turning possibilities into action.',
  'Science and technology challenge me to question, analyse and discover. Communication and leadership allow me to connect, influence and execute. Entrepreneurship encourages me to think independently, recognise opportunities and create value.',
  'Through research projects, innovation initiatives, scientific presentations, event leadership and independent exploration, I continue to discover what I can build and contribute.',
  'I believe growth should extend beyond personal achievement. It should create opportunities, meaningful work and possibilities for others.',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="01"
          label="About"
          lines={['I WAS NEVER MADE TO FIT ONE BOX.', 'BUILT BY CURIOSITY.', 'DRIVEN BY AMBITION.']}
        />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-6">
            {PARAGRAPHS.map((paragraph, index) => (
              <Reveal key={index} delay={index * 80}>
                <p className="text-base leading-normal text-muted md:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <div className="flex flex-col">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Four dimensions</p>
              <ol className="flex flex-col">
                {DIMENSIONS.map((dimension, index) => (
                  <li
                    key={dimension}
                    className="group flex items-baseline gap-6 border-t border-line py-6 last:border-b transition-colors duration-300 hover:bg-ink-soft"
                  >
                    <span className="font-mono text-xs text-accent">0{index + 1}</span>
                    <span className="font-display text-xl font-bold uppercase leading-[1.2] tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">
                      {dimension}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <div className="mt-28 border-t border-line pt-16 md:mt-36">
          <LineHeading
            lines={[
              'MULTIPLE INTERESTS.',
              'ONE DIRECTION.',
              <span key="direction" className="text-accent">
                TO BUILD. TO LEAD. TO CREATE.
              </span>,
            ]}
            className="font-display text-[10vw] font-bold uppercase leading-[1.2] tracking-[-0.03em] md:text-[clamp(2.5rem,6.4vw,6.5rem)]"
          />
        </div>
      </div>
    </section>
  );
}
