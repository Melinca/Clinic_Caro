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
  logo: imageUrl('https://cdn.corenexis.com/f/2WVVSf4NNRx.jpeg'),
  hero: imageUrl(
    'https://cdn.corenexis.com/f/2WVVSf4NNRx.jpeg'
  ),
};

// Helpers to map remote Supabase data into local shapes
export function mapPhotoRow(row: any) {
  return {
    id: row.id,
    url: row.url,
    label: row.label || '',
  };
}

export const galleryImages: Photo[] = [
  {
    id: 'g1',
    url: imageUrl(
      'https://koala.sh/api/image/v2-83cfp-2nbwk.jpg?width=1216&height=832&dream'
    ),
    label: 'Soin du visage',
  },
  {
    id: 'g2',
    url: imageUrl(
      'https://www.savezedress.com/wp-content/uploads/2024/04/148838massage-normandiec7bf44-1140x757.png'
    ),
    label: 'Massage corps',
  },
  {
    id: 'g3',
    url: imageUrl(
      'https://i.pinimg.com/736x/10/45/64/1045642ee72d2960a5261c645374263a.jpg'
    ),
    label: 'Traitement anti-age',
  },
  {
    id: 'g4',
    url: imageUrl(
      'https://clarityct.com/wp-content/uploads/2024/02/Woman_getting_microneedling.jpg'
    ),
    label: 'Microneedling',
  },
  {
    id: 'g5',
    url: imageUrl(
      'https://i.pinimg.com/1200x/e7/f6/be/e7f6bec5e790135e5c3b25305c6e44b1.jpg'
    ),
    label: 'Hydrafacial',
  },
  {
    id: 'g6',
    url: imageUrl(
      'https://i.pinimg.com/736x/c0/9d/dc/c09ddcc0ba618142c7c4e184ce02ac61.jpg'
    ),
    label: 'Lifting facial',
  },
];
