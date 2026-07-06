import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/50943911985"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-emerald2-600 py-3.5 pl-4 pr-5 text-cream-50 shadow-card transition-all duration-500 hover:bg-emerald2-700 hover:shadow-lg ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-50/40" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-medium sm:inline">
        Écrivez-nous
      </span>
    </a>
  );
}
