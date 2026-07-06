import type { LucideIcon } from 'lucide-react';
import { Brush, Flower2, HeartPulse, Smile, Sparkles } from 'lucide-react';

export type ServiceCategory = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  accent: 'bordeaux' | 'emerald' | 'gold';
  treatments: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'corps',
    title: 'Corps',
    tagline: 'Sculpter, raffermir et révéler la silhouette',
    icon: HeartPulse,
    accent: 'bordeaux',
    treatments: [
      'Massothérapie',
      'Madérothérapie',
      'Yesothérapie',
      'Physiothérapie',
      'Lifting colombien',
      'Lifting mammaire',
      'Mamoplastie',
      'Lipocavitation',
      'Criolipolyse',
      'Laser',
      'Endolift',
      'BBL a vacuum',
      'BBL injection',
      'BBL filler',
      'Hifu vaginal',
      'Grossir vagin',
      'Vaginoplastie',
      'Élimination vergetures et taches',
      'Hydrafacial',
    ],
  },
  {
    id: 'visage-soins',
    title: 'Visage - Soins',
    tagline: 'Éclat, jeunesse et pureté de la peau',
    icon: Sparkles,
    accent: 'emerald',
    treatments: [
      'Facial simple',
      'Facial profond',
      'Anti-âge',
      'Anti-acné',
      'Lifting facial',
      'Endolifting',
      'Medolift',
      'Microneedling',
      'Microdermabrasion',
      'Peeling ultrasonique',
      'Laser',
      'Dermaplaning',
      'Sillons nasogéniens',
    ],
  },
  {
    id: 'levres-visage',
    title: 'Lèvres & Visage',
    tagline: 'Harmonie et définition des traits',
    icon: Smile,
    accent: 'gold',
    treatments: [
      'Nanolips',
      'Henalips',
      'Hydralips',
      'Hydralips color',
      'Needle lips',
      'Canula lips',
      'Canula filler nose',
      'Brow lamination',
      'Épilation des sourcils',
    ],
  },
  {
    id: 'maquillage',
    title: 'Maquillage permanent',
    tagline: 'Un regard et des lèvres toujours parfaits',
    icon: Brush,
    accent: 'bordeaux',
    treatments: [
      'Microblading / Shading',
      'Micropigmentation des lèvres',
      'Hair tattoo micropigmentation',
      'Nano brows',
      'Teintes sourcils',
      'Extension cils fil à fil',
      'Extension cils en groupe',
    ],
  },
  {
    id: 'autres',
    title: 'Autres soins',
    tagline: 'Détails qui font la différence',
    icon: Flower2,
    accent: 'emerald',
    treatments: ['Épilation à la cire', 'Piercing', 'Soins callosités'],
  },
];
