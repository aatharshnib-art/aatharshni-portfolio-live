import { useEffect, useState } from 'react';
import { Dna, Menu, X } from 'lucide-react';
import { NAV_IDS, NAV_ITEMS } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
        scrolled || open ? 'border-line bg-ink/95 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10" aria-label="Primary">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.12em]">
          <Dna className="h-5 w-5 text-accent" strokeWidth={2.25} aria-hidden />
          <span>Aatharshni B.</span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`group relative font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                  active === item.id ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-accent transition-transform duration-500 ease-out ${
                    active === item.id ? 'w-full scale-x-100' : 'w-full origin-left scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-line text-white transition-colors hover:border-accent xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-ink transition-[opacity,visibility] duration-500 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-10 md:px-10">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.id} className="border-b border-line">
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`flex items-baseline justify-between py-5 font-display text-3xl font-bold uppercase tracking-[-0.02em] transition-all duration-500 ${
                  active === item.id ? 'text-accent' : 'text-white hover:text-accent'
                } ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: open ? `${index * 40}ms` : '0ms' }}
              >
                {item.label}
                <span className="font-mono text-xs tracking-[0.16em] text-muted">0{index + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
