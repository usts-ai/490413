export type ActivityType = 'Marche' | 'Jardinage' | 'Observation' | 'Bien-être' | 'Découverte';

export interface Activity {
  id: string;
  title: string;
  type: ActivityType;
  commune: string;
  days: string;
  access: string;
  cost: string;
  contact: string;
  accessibility: string;
  description: string;
  lat: number;
  lng: number;
  image: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Balade en forêt de Meudon',
    type: 'Marche',
    commune: 'Meudon',
    days: 'Mardi et jeudi · 10h',
    access: 'Tram T6 — arrêt Division Leclerc',
    cost: 'Gratuit',
    contact: 'asso@darena.fr',
    accessibility: 'Terrain plat, pauses fréquentes',
    description: 'Une promenade douce sous les chênes, rythmée pour les seniors autonomes.',
    lat: 48.805,
    lng: 2.235,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  },
  {
    id: '2',
    title: 'Jardin partagé du parc',
    type: 'Jardinage',
    commune: 'Meudon',
    days: 'Mercredi · 14h30',
    access: 'Bus 289 — arrêt Parc de Meudon',
    cost: 'Gratuit',
    contact: 'jardin@darena.fr',
    accessibility: 'Bancs et ombre disponibles',
    description: 'Cultivez, échangez et partagez autour de carrés potagers accessibles.',
    lat: 48.802,
    lng: 2.241,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  },
  {
    id: '3',
    title: 'Observation des oiseaux',
    type: 'Observation',
    commune: 'Meudon',
    days: 'Samedi · 9h',
    access: 'Parking et chemin marqué',
    cost: 'Gratuit',
    contact: 'nature@darena.fr',
    accessibility: 'Jumelles prêtées, rythme lent',
    description: 'Repérez merles, mésanges et pics dans un cadre calme et guidé.',
    lat: 48.808,
    lng: 2.228,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
  },
  {
    id: '4',
    title: 'Respiration au bord de l’étang',
    type: 'Bien-être',
    commune: 'Meudon',
    days: 'Lundi · 11h',
    access: 'Accès piéton depuis l’avenue',
    cost: 'Gratuit',
    contact: 'bienetre@darena.fr',
    accessibility: 'Assis ou debout, adapté à chacun',
    description: 'Séances de respiration et étirements doux face à l’eau.',
    lat: 48.799,
    lng: 2.238,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
  },
  {
    id: '5',
    title: 'Sentier du panorama',
    type: 'Marche',
    commune: 'Meudon',
    days: 'Vendredi · 10h',
    access: 'RER C — Meudon Val Fleury',
    cost: 'Gratuit',
    contact: 'balades@darena.fr',
    accessibility: 'Dénivelé léger, bâtons conseillés',
    description: 'Découvrez la vue sur Paris lors d’une marche encadrée et conviviale.',
    lat: 48.811,
    lng: 2.245,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
  {
    id: '6',
    title: 'Arbres remarquables',
    type: 'Découverte',
    commune: 'Meudon',
    days: 'Dimanche · 15h',
    access: 'Point de rendez-vous au kiosque',
    cost: 'Gratuit',
    contact: 'decouverte@darena.fr',
    accessibility: 'Parcours court, grands caractères',
    description: 'Une visite guidée pour reconnaître les essences emblématiques du parc.',
    lat: 48.804,
    lng: 2.232,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80',
  },
];

export const FILTER_TYPES: Array<ActivityType | 'Tous'> = [
  'Tous',
  'Marche',
  'Jardinage',
  'Observation',
  'Bien-être',
  'Découverte',
];
