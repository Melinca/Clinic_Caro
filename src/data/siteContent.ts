export type Photo = {
  id: string;
  url: string;
  label: string;
};

function googleDriveImageUrl(url: string) {
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (!match) return url;

  return `https://drive.google.com/uc?export=view&id=${match[1]}`;
}

export function imageUrl(url: string) {
  return googleDriveImageUrl(url.trim());
}

export const siteImages = {
  logo: '',
  hero: imageUrl(
    'https://drive.google.com/file/d/1HZ4gyCTO9N8zt-3nKhkpmTv7Oqj_RSkn/view?usp=drive_link'
  ),
};

export const galleryImages: Photo[] = [
  {
    id: 'g1',
    url: imageUrl(
      'https://i.pinimg.com/736x/a9/a1/3d/a9a13dc52ab9373a38161d1be198c777.jpg'
    ),
    label: 'Soin du visage',
  },
  {
    id: 'g2',
    url: imageUrl(
      'https://cache.cosmopolitan.fr/data/fichiers/18q/femme-massage-relaxant.jpg'
    ),
    label: 'Massage corps',
  },
  {
    id: 'g3',
    url: imageUrl(
      'https://medecins-esthetiques-paris.com/wp-content/uploads/sub-site/e6f13b18-ae6f-4d3a-9df1-13d0bd735c45/Qn82swxvDUkHjBE37WXrjgKl5d7k957rhK9b8K7N.jpg'
    ),
    label: 'Traitement anti-age',
  },
  {
    id: 'g4',
    url: imageUrl(
      'https://aesthetics360medspa.com/wp-content/uploads/2023/02/Aesthetics-360-Lash-MedSpa-Stock-Photos-08-cosmetologist-making-mesotherapy-injection-with-de-2022-12-15-18-17-01-utc.jpg'
    ),
    label: 'Microneedling',
  },
  {
    id: 'g5',
    url: imageUrl(
      'https://www.stlukesatthevillages.com/wp-content/uploads/Cynosure-1-after-500.jpg'
    ),
    label: 'Hydrafacial',
  },
  {
    id: 'g6',
    url: imageUrl(
      'https://clinicamoreiralima.com.br/wp-content/uploads/2024/06/IMG-0007-Lifting-Facial-scaled.jpg'
    ),
    label: 'Lifting facial',
  },
];
