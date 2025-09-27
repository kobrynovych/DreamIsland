'use client';

import { useState, useEffect, useCallback } from 'react';
import { Locale } from '@/types';
import { getCurrentLocale, setLocale } from '@/lib/i18n';

export function useLocale() {
  const [locale, setCurrentLocale] = useState<Locale>('uk');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurrentLocale(getCurrentLocale());
  }, []);

  const changeLocale = useCallback((newLocale: Locale) => {
    setCurrentLocale(newLocale);
    setLocale(newLocale);
    // Force re-render by updating a timestamp
    window.dispatchEvent(new CustomEvent('localeChange', { detail: newLocale }));
  }, []);

  return { locale, changeLocale, isClient };
}