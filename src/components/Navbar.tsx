import { useEffect, useState } from 'react';
import { Menu, X, CalendarHeart, Flower2 } from 'lucide-react';
import { siteImages } from '../data/siteContent';
import { fetchLogo } from '../lib/supabaseHelpers';

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let mounted = true;
    fetchLogo()
      .then((url) => {
        if (mounted && url) setLogoUrl(url);
      })
      .catch(() => {
        // ignore and keep default
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#accueil" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-bordeaux-700 text-cream-50 shadow-soft transition-transform duration-500 group-hover:rotate-12">
            {logoUrl || siteImages.logo ? (
              <img
                src={logoUrl ?? siteImages.logo}
                alt="Logo Caro Aesthetics"
                className="h-full w-full object-cover"
              />
            ) : (
              <Flower2 className="h-5 w-5" />
            )}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-wide text-bordeaux-900">
              Caro Aesthetics
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600">
              Clinic
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-bordeaux-800 transition-colors hover:text-bordeaux-950"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#rdv" className="btn-primary">
            <CalendarHeart className="h-4 w-4" />
            Prendre RDV
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-bordeaux-700/10 text-bordeaux-800 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-cream-50 p-5 shadow-soft">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-bordeaux-800 transition-colors hover:bg-bordeaux-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#rdv"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            <CalendarHeart className="h-4 w-4" />
            Prendre RDV
          </a>
        </div>
      </div>
    </header>
  );
}
