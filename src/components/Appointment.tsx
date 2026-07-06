import { useMemo, useState } from 'react';
import {
  CalendarHeart,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Sparkles,
  Stethoscope,
  User,
  X,
} from 'lucide-react';
import { serviceCategories } from '../data/services';
import { useReveal } from '../hooks/useReveal';

const timeSlots = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

type FormState = {
  category: string;
  treatment: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const initial: FormState = {
  category: '',
  treatment: '',
  date: '',
  time: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

export default function Appointment() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [success, setSuccess] = useState(false);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const treatments = useMemo(
    () => serviceCategories.find((c) => c.id === form.category)?.treatments ?? [],
    [form.category]
  );

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({
      ...current,
      [key]: value,
      ...(key === 'category' ? { treatment: '' } : {}),
    }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    (Object.keys(form) as (keyof FormState)[]).forEach((key) => {
      if (!form[key].trim()) nextErrors[key] = 'Ce champ est requis';
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Email invalide';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) setSuccess(true);
  };

  const reset = () => {
    setForm(initial);
    setErrors({});
    setSuccess(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je souhaite confirmer mon RDV pour ${form.treatment} le ${form.date} à ${form.time}. Nom: ${form.firstName} ${form.lastName}. Téléphone: ${form.phone}.`
  );

  const fieldClass = (key: keyof FormState) =>
    `w-full rounded-xl border bg-cream-50 px-4 py-3 text-sm text-bordeaux-900 outline-none transition-colors focus:ring-2 ${
      errors[key]
        ? 'border-bordeaux-400 focus:ring-bordeaux-200'
        : 'border-cream-300 focus:border-emerald2-400 focus:ring-emerald2-200'
    }`;

  return (
    <section id="rdv" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-emerald2-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-bordeaux-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            Réservation
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="section-title mt-4">Prendre rendez-vous</h2>
          <p className="mt-5 text-base leading-relaxed text-bordeaux-800/75">
            Choisissez votre soin, sélectionnez un créneau et confirmez. Nous
            reviendrons vers vous pour finaliser votre rendez-vous.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mt-12 overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-soft"
        >
          <div className="border-b border-cream-200 p-7 sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bordeaux-700 text-sm font-semibold text-cream-50">
                1
              </span>
              <h3 className="font-serif text-xl font-semibold text-bordeaux-900">
                Votre soin
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <Stethoscope className="h-4 w-4 text-emerald2-600" />
                  Catégorie de soin
                </label>
                <select
                  value={form.category}
                  onChange={(e) => update('category', e.target.value)}
                  className={fieldClass('category')}
                >
                  <option value="">Sélectionnez...</option>
                  {serviceCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.category}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <Sparkles className="h-4 w-4 text-gold-600" />
                  Soin spécifique
                </label>
                <select
                  value={form.treatment}
                  onChange={(e) => update('treatment', e.target.value)}
                  disabled={!form.category}
                  className={`${fieldClass('treatment')} disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  <option value="">
                    {form.category
                      ? 'Sélectionnez...'
                      : "Choisissez d'abord une catégorie"}
                  </option>
                  {treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
                {errors.treatment && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.treatment}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="border-b border-cream-200 p-7 sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald2-600 text-sm font-semibold text-cream-50">
                2
              </span>
              <h3 className="font-serif text-xl font-semibold text-bordeaux-900">
                Date & heure
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <CalendarHeart className="h-4 w-4 text-bordeaux-700" />
                  Date
                </label>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className={fieldClass('date')}
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <Clock className="h-4 w-4 text-emerald2-600" />
                  Créneau
                </label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => update('time', slot)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        form.time === slot
                          ? 'border-emerald2-600 bg-emerald2-600 text-cream-50 shadow-card'
                          : 'border-cream-300 bg-cream-50 text-bordeaux-800 hover:border-emerald2-400 hover:bg-emerald2-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.time && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.time}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-sm font-semibold text-bordeaux-950">
                3
              </span>
              <h3 className="font-serif text-xl font-semibold text-bordeaux-900">
                Vos coordonnées
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <User className="h-4 w-4 text-bordeaux-700" />
                  Prénom
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  placeholder="Votre prénom"
                  className={fieldClass('firstName')}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <User className="h-4 w-4 text-bordeaux-700" />
                  Nom
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  placeholder="Votre nom"
                  className={fieldClass('lastName')}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.lastName}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <Phone className="h-4 w-4 text-emerald2-600" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+509 ..."
                  className={fieldClass('phone')}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bordeaux-800">
                  <Mail className="h-4 w-4 text-gold-600" />
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="vous@exemple.com"
                  className={fieldClass('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-bordeaux-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <button type="submit" className="btn-primary mt-8 w-full text-base">
              <CalendarHeart className="h-5 w-5" />
              Confirmer le rendez-vous
            </button>
          </div>
        </form>
      </div>

      {success && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-bordeaux-950/75 p-6 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-cream-50 p-8 text-center shadow-soft animate-scale-in">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald2-100 text-emerald2-700">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-bordeaux-900">
              Rendez-vous prêt à confirmer
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bordeaux-800/75">
              Merci {form.firstName || 'à vous'}. Envoyez maintenant votre
              demande sur WhatsApp pour que la clinique puisse confirmer le
              rendez-vous.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/50943911985?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald flex-1"
              >
                Envoyer sur WhatsApp
              </a>
              <button onClick={reset} className="btn-outline flex-1">
                Nouveau RDV
              </button>
            </div>
            <button
              onClick={reset}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-bordeaux-700 transition-colors hover:bg-cream-200"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
