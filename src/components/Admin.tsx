import { useEffect, useState } from 'react';
import { uploadPhoto, fetchGallery, setLogoUrl, fetchLogo } from '../lib/supabaseHelpers';
import type { Photo } from '../data/siteContent';

export default function Admin() {
  const [gallery, setGallery] = useState<Photo[]>([]);
  const [logo, setLogo] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchGallery()
      .then((rows) => setGallery(rows))
      .catch(() => setGallery([]));
    fetchLogo()
      .then((l) => setLogo(l || ''))
      .catch(() => {});
  }, []);

  async function handleLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setUploading(true);
    setMessage(null);
    try {
      const row = await uploadPhoto(f, 'logo');
      await setLogoUrl(row.url);
      setLogo(row.url);
      setMessage('Logo mis à jour.');
    } catch (err: any) {
      setMessage(err?.message || 'Erreur lors de l\'upload du logo');
    } finally {
      setUploading(false);
    }
  }

  async function handleGallery(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    setMessage(null);
    try {
      const uploaded: Photo[] = [];
      for (const f of Array.from(files)) {
        const row = await uploadPhoto(f, f.name);
        uploaded.push(row as Photo);
      }
      setGallery((g) => [...uploaded, ...g]);
      setMessage('Images uploadées avec succès.');
    } catch (err: any) {
      setMessage(err?.message || 'Erreur lors de l\'upload');
    } finally {
      setUploading(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto my-12 p-6 rounded-2xl bg-cream-50 shadow-soft">
      <h2 className="font-serif text-2xl font-semibold mb-4">Admin</h2>
      <p className="text-sm text-foreground-700 mb-4">Uploader un logo ou des images de galerie vers Supabase Storage et mettre à jour les paramètres.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Logo actuel</label>
          {logo ? (
            <img src={logo} alt="Logo preview" className="h-20" />
          ) : (
            <div className="h-20 w-20 rounded bg-gray-200 flex items-center justify-center">Aucun</div>
          )}
          <div className="mt-2">
            <input type="file" accept="image/*" onChange={handleLogo} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Ajouter à la galerie</label>
          <input type="file" accept="image/*" multiple onChange={handleGallery} />
        </div>

        <div className="pt-4">
          <div className="text-sm text-foreground-600">Galerie (prévisualisation rapide)</div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {gallery.map((p) => (
              <img key={p.id} src={p.url} alt={p.label} className="h-24 w-full object-cover rounded" />
            ))}
          </div>
        </div>

        {uploading && <div className="text-sm text-foreground-700">Upload en cours…</div>}
        {message && <div className="text-sm text-foreground-700">{message}</div>}
      </div>
    </section>
  );
}
