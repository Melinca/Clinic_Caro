import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { useReveal } from '../hooks/useReveal';

const accentMap = {
  bordeaux: {
    icon: 'bg-bordeaux-700 text-cream-50',
    ring: 'group-hover:ring-bordeaux-300',
    chip: 'bg-bordeaux-50 text-bordeaux-800 border-bordeaux-200',
    chipHover: 'hover:bg-bordeaux-700 hover:text-cream-50',
    bar: 'bg-bordeaux-700',
    glow: 'from-bordeaux-100/60',
  },
  emerald: {
    icon: 'bg-emerald2-600 text-cream-50',
    ring: 'group-hover:ring-emerald2-300',
    chip: 'bg-emerald2-50 text-emerald2-800 border-emerald2-200',
    chipHover: 'hover:bg-emerald2-600 hover:text-cream-50',
    bar: 'bg-emerald2-600',
    glow: 'from-emerald2-100/60',
  },
  gold: {
    icon: 'bg-gold-500 text-bordeaux-950',
    ring: 'group-hover:ring-gold-300',
    chip: 'bg-gold-50 text-gold-800 border-gold-200',
    chipHover: 'hover:bg-gold-500 hover:text-bordeaux-950',
    bar: 'bg-gold-500',
    glow: 'from-gold-100/60',
  },
} as const;

function ServiceCard({
  category,
  index,
}: {
  category: (typeof serviceCategories)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);
  const accent = accentMap[category.accent];
  const Icon = category.icon;
  const shown = expanded ? category.treatments : category.treatments.slice(0, 6);

  return (
    <div
      ref={ref}
      className={`group reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 p-7 shadow-soft card-hover">
        <span
          className={`absolute left-0 top-0 h-1.5 w-full ${accent.bar} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
        />
        <div
          className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div className="flex items-center gap-4">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon} shadow-soft ring-2 ring-transparent transition-all duration-500 ${accent.ring}`}
          >
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-bordeaux-900">
              {category.title}
            </h3>
            <p className="mt-0.5 text-sm text-bordeaux-700/70">
              {category.tagline}
            </p>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {shown.map((t) => (
            <li
              key={t}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ${accent.chip} ${accent.chipHover}`}
            >
              <Check className="h-3 w-3 shrink-0" />
              {t}
            </li>
          ))}
        </ul>

        {category.treatments.length > 6 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-bordeaux-700 transition-colors hover:text-bordeaux-950"
          >
            {expanded ? 'Voir moins' : `Voir les ${category.treatments.length} soins`}
            <ArrowRight
              className={`h-4 w-4 transition-transform ${expanded ? 'rotate-90' : ''}`}
            />
          </button>
        )}

        <a
          href="#rdv"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bordeaux-800 transition-colors hover:text-gold-600"
        >
          Réserver ce soin
          <ArrowRight className="h-4 w-4" />
        </a>
      </article>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            Nos expertises
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="section-title mt-4">Une gamme complète de soins</h2>
          <p className="mt-5 text-base leading-relaxed text-bordeaux-800/75">
            Du corps au visage, en passant par les lèvres et le maquillage
            permanent, chaque soin est pensé pour révéler votre beauté en toute
            confiance.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, i) => (
            <ServiceCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
