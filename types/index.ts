export interface MusicCategory {
  id: string;
  titleKey: string;
  descriptionKey: string;
  telegramChannel: string;
  coverImage: string;
  tags: string[];
}

export interface Translation {
  [key: string]: string | Translation;
}

export type Locale = 'uk' | 'en';

export type Theme = 'light' | 'dark';