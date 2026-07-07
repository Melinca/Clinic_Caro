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
  logo: imageUrl('https://tse2.mm.bing.net/th/id/OIP.IqYbcNKrhhURoMflaYr3QAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'),
  hero: imageUrl(
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/10/b8/35/vv07-aesthetics.jpg?w=700&h=-1&s=1'
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
      'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=800'
    ),
    label: 'Soin du visage',
  },
  {
    id: 'g2',
    url: imageUrl(
      'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800'
    ),
    label: 'Massage corps',
  },
  {
    id: 'g3',
    url: imageUrl(
      'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ),
    label: 'Traitement anti-age',
  },
  {
    id: 'g4',
    url: imageUrl(
      'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=800'
    ),
    label: 'Microneedling',
  },
  {
    id: 'g5',
    url: imageUrl(
      'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800'
    ),
    label: 'Hydrafacial',
  },
  {
    id: 'g6',
    url: imageUrl(
      'https://images.pexels.com/photos/4175252/pexels-photo-4175252.jpeg?auto=compress&cs=tinysrgb&w=800'
    ),
    label: 'Lifting facial',
  },
];
