import { translations } from './translations';
import { Locale } from '@/types';

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function getCurrentLocale(): Locale {
  if (typeof window === 'undefined') return 'uk';
  return (localStorage.getItem('locale') as Locale) || 'uk';
}

export function setLocale(locale: Locale) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('locale', locale);
}