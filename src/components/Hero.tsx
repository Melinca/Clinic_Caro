import { CalendarHeart, MessageCircle, Sparkles } from 'lucide-react';
import { siteImages } from '../data/siteContent';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt="Ambiance bien-être en clinique d'esthétique"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bordeaux-950/85 via-bordeaux-900/55 to-emerald2-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50/30 via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full border border-gold-300/30 animate-float" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full border border-emerald2-200/20" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-cream-50/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold-200 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" />
            Santé - Beauté - Confiance - Harmonie
          </span>

          <h1
            className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-cream-50 sm:text-6xl md:text-7xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Caro Aesthetics
            <span className="block text-gold-200">Clinic</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream-100/90 animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            Votre beauté, notre expertise. Des soins esthétiques d'exception,
            alliant expertise médicale et douceur, pour révéler le meilleur de
            vous-même.
          </p>

          <div
            className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#rdv" className="btn-primary text-base">
              <CalendarHeart className="h-5 w-5" />
              Prendre un rendez-vous
            </a>
            <a
              href="https://wa.me/50939919188"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 bg-cream-50/5 px-7 py-3.5 text-base font-medium text-cream-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50/15"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            {[
              { n: '50+', l: 'Soins proposés' },
              { n: '5', l: "Catégories d'expertise" },
              { n: '100%', l: 'Sur-mesure' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl font-semibold text-gold-200">
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-cream-100/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-100/60">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cream-100/40 p-1">
          <span className="h-2 w-1 rounded-full bg-gold-200 animate-float" />
        </div>
      </div>
    </section>
  );
}
