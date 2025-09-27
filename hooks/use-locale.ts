'use client';

import { useState, useEffect } from 'react';
import { Locale } from '@/types';
import { getCurrentLocale, setLocale } from '@/lib/i18n';

export function useLocale() {
  const [locale, setCurrentLocale] = useState<Locale>('uk');

  useEffect(() => {
    setCurrentLocale(getCurrentLocale());
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale);
    setLocale(newLocale);
  };

  return { locale, changeLocale };
}