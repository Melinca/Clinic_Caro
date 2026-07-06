import { useEffect, useState } from 'react';
import Admin from './Admin';

const ADMIN_PASSWORD = 'caro2026';
const STORAGE_KEY = 'caro-admin-auth';

export default function AdminGate() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    setAuthorized(saved === 'true');
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, 'true');
      setAuthorized(true);
      setError(null);
      return;
    }
    setError('Mot de passe incorrect.');
  }

  if (authorized) {
    return <Admin />;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-cream-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-semibold text-bordeaux-950">Administration</h1>
        <p className="mt-3 text-sm text-foreground-600">
          Entrez le mot de passe pour accéder à la page admin.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-foreground-900">
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 focus:border-bordeaux-500 focus:outline-none"
            placeholder="********"
          />
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button
            type="submit"
            className="w-full rounded-2xl bg-bordeaux-950 px-4 py-3 text-sm font-semibold text-cream-50 transition hover:bg-bordeaux-800"
          >
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}
