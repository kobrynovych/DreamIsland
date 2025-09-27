import { MusicCategory } from '@/types';

export const musicCategories: MusicCategory[] = [
  {
    id: 'war',
    titleKey: 'categories.war.title',
    descriptionKey: 'categories.war.description',
    telegramChannel: 'https://t.me/IslandOfAWar',
    coverImage: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Epic', 'Orchestral', 'Cinematic', 'Battle', 'Heroic']
  },
  {
    id: 'it',
    titleKey: 'categories.it.title',
    descriptionKey: 'categories.it.description',
    telegramChannel: 'https://t.me/IslandOfAIT',
    coverImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Electronic', 'Synthwave', 'Cyberpunk', 'Ambient', 'Tech House']
  }
];