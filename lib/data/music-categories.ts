import { MusicCategory } from '@/types';

export const musicCategories: MusicCategory[] = [
  {
    id: 'war',
    titleKey: 'categories.war.title',
    descriptionKey: 'categories.war.description',
    telegramChannel: 'https://t.me/IslandOfAWar',
    coverImage: 'images/categories/war.png',
    tags: ['Epic', 'Orchestral', 'Cinematic', 'Battle', 'Heroic']
  },
  {
    id: 'it',
    titleKey: 'categories.it.title',
    descriptionKey: 'categories.it.description',
    telegramChannel: 'https://t.me/IslandOfAIT',
    coverImage: 'images/categories/it.png',
    tags: ['Electronic', 'Synthwave', 'Cyberpunk', 'Ambient', 'Tech House']
  }
];