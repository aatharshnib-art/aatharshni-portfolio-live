import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Reveal, { LineHeading } from '@/components/ui/Reveal';
import { CONTACT } from '@/data/portfolio';

const CHANNELS = [
  { label: 'Email', value: CONTACT.email, href: CONTACT.emailHref, icon: Mail },
  { label: 'LinkedIn', value: 'Profile link to be added', href: CONTACT.linkedinHref, icon: Linkedin },
  { label: 'GitHub', value: 'Profile link to be added', href: CONTACT.githubHref, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">07</span>
            <span className="h-px w-10 bg-line" aria-hidden />
            <span>Contact</span>
          </p>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-10 lg:col-span-7">
            <LineHeading
              lines={['GOOD THINGS HAPPEN WHEN', <span key="curious" className="text-accent">CURIOUS MINDS CONNECT.</span>]}
              className="font-display text-[10vw] font-bold uppercase leading-[1.2] tracking-[-0.035em] md:text-[clamp(2.5rem,5.6vw,5.5rem)]"
            />
            <Reveal delay={200}>
              <p className="max-w-xl text-base leading-normal text-muted md:text-lg">
                Whether it&apos;s an idea, a collaboration, a new opportunity or simply a meaningful conversation &mdash;
                I&apos;m always open to connecting with people who think beyond boundaries.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a
                href={CONTACT.emailHref}
                className="group inline-flex items-center gap-3 bg-accent px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-white"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <ul className="flex flex-col border-t border-line">
              {CHANNELS.map(({ label, value, href, icon: Icon }) => (
                <li key={label} className="border-b border-line">
                  <a
                    href={href}
                    className="group flex items-center justify-between gap-6 py-6 transition-colors duration-300 hover:text-accent"
                  >
                    <span className="flex items-center gap-5">
                      <Icon className="h-5 w-5 text-accent" aria-hidden />
                      <span className="flex flex-col gap-1">
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</span>
                        <span className="break-all text-base text-white transition-colors group-hover:text-accent">{value}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
