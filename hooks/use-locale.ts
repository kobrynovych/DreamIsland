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

    // Listen for locale changes from other components
    const handleLocaleChange = (event: CustomEvent<Locale>) => {
      setCurrentLocale(event.detail);
    };

    window.addEventListener('localeChange', handleLocaleChange as EventListener);
    return () => window.removeEventListener('localeChange', handleLocaleChange as EventListener);
  }, []);

  const changeLocale = useCallback((newLocale: Locale) => {
    setCurrentLocale(newLocale);
    setLocale(newLocale);
    // Force re-render by dispatching event to all components
    window.dispatchEvent(new CustomEvent('localeChange', { detail: newLocale }));
  }, []);

  return { locale, changeLocale, isClient };
}