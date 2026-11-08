import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT } from '@/data/portfolio';

const SOCIALS = [
  { label: 'Email', href: CONTACT.emailHref, icon: Mail },
  { label: 'LinkedIn', href: CONTACT.linkedinHref, icon: Linkedin },
  { label: 'GitHub', href: CONTACT.githubHref, icon: Github },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="flex flex-col gap-4">
          <p className="font-display text-3xl font-bold uppercase tracking-[-0.02em] md:text-4xl">Aatharshni B.</p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Think beyond. <span className="text-accent">Build forward.</span>
          </p>
        </div>

        <ul className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="group flex h-12 w-12 items-center justify-center border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 font-mono text-xs uppercase tracking-[0.12em] text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>&copy; {new Date().getFullYear()} Aatharshni B. All rights reserved.</p>
          <a href="#home" className="group inline-flex items-center gap-2 transition-colors hover:text-white">
            Back to top
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
