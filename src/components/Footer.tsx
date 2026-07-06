import { Flower2, Heart, MapPin, MessageCircle, Phone } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { siteImages } from '../data/siteContent';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-bordeaux-950 text-cream-100"
    >
      <div className="h-1 w-full bg-gradient-to-r from-bordeaux-700 via-gold-500 to-emerald2-600" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gold-500 text-bordeaux-950">
                {siteImages.logo ? (
                  <img
                    src={siteImages.logo}
                    alt="Logo Caro Aesthetics"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Flower2 className="h-5 w-5" />
                )}
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-cream-50">
                  Caro Aesthetics
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-300">
                  Clinic
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
              Santé - Beauté - Confiance - Harmonie. Une clinique d'esthétique
              dédiée à votre bien-être et à la révélation de votre beauté.
            </p>
            <p className="mt-6 flex items-center gap-2 font-serif text-lg italic text-gold-200">
              <Heart className="h-4 w-4 fill-gold-300 text-gold-300" />
              Prenez soin de vous, vous le valez bien !
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50">
              Nos services
            </h4>
            <ul className="mt-5 space-y-2.5">
              {serviceCategories.map((c) => (
                <li key={c.id}>
                  <a
                    href="#services"
                    className="text-sm text-cream-100/70 transition-colors hover:text-gold-200"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="tel:+50939919188"
                  className="flex items-start gap-3 text-cream-100/80 transition-colors hover:text-gold-200"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                  <span>
                    Téléphone / WhatsApp
                    <br />
                    <span className="font-medium text-cream-50">
                      +509 4391-1985 / +509 3991-9188 
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream-100/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span>
                  Adresse
                  <br />
                  <span className="font-medium text-cream-50">
                    Fermathe 55 duplan 2
                  </span>
                </span>
              </li>
            </ul>
            <a
              href="https://wa.me/50943911985"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald2-600 px-5 py-2.5 text-sm font-medium text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald2-700"
            >
              <MessageCircle className="h-4 w-4" />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-100/10 pt-6 text-center text-xs text-cream-100/50">
          © {new Date().getFullYear()} Caro Aesthetics Clinic. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
