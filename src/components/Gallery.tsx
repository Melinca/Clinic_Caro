import { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages, type Photo } from '../data/siteContent';
import { useReveal } from '../hooks/useReveal';
import { fetchGallery } from '../lib/supabaseHelpers';

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [remote, setRemote] = useState<Photo[] | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchGallery()
      .then((rows) => {
        if (mounted && rows.length) setRemote(rows);
      })
      .catch(() => {
        /* ignore, fallback to local */
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="galerie" className="relative bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            Avant / Après
          </span>
          <h2 className="section-title mt-4">Galerie des résultats</h2>
          <p className="mt-4 text-base leading-relaxed text-bordeaux-800/75">
            Découvrez l'expertise de notre clinique à travers nos résultats.
            Chaque transformation raconte une histoire de confiance.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {(remote ?? galleryImages).map((p, i) => (
            <figure
              key={p.id}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-200 shadow-soft reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={p.url}
                alt={p.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-950/80 via-bordeaux-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-sm font-medium text-cream-50">
                  {p.label}
                </span>
              </figcaption>
              <button
                onClick={() => setLightbox(p)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/20 text-cream-50 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-cream-50/30 group-hover:opacity-100"
                aria-label="Agrandir"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </figure>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bordeaux-950/80 p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/15 text-cream-50 transition-colors hover:bg-cream-50/25"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="max-h-[85vh] max-w-3xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.label}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center font-serif text-xl text-cream-50">
              {lightbox.label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
