import { MusicCategory } from '@/types';

export const musicCategories: MusicCategory[] = [
  {
    id: 'lofi-chill',
    titleKey: 'categories.lofiChill.title',
    descriptionKey: 'categories.lofiChill.description',
    telegramChannel: 'https://t.me/IslandOfAWar',
    coverImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Lo-Fi', 'Chill', 'Relaxing']
  },
  {
    id: 'electronic-ambient',
    titleKey: 'categories.electronicAmbient.title',
    descriptionKey: 'categories.electronicAmbient.description',
    telegramChannel: 'https://t.me/IslandOfAWar',
    coverImage: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Electronic', 'Ambient', 'Atmospheric']
  }
];