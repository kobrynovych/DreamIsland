'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Locale } from '@/types';
import { getCurrentLocale, setLocale } from '@/lib/i18n';

interface LocaleContextType {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
  isClient: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setCurrentLocale] = useState<Locale>('uk');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurrentLocale(getCurrentLocale());
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale);
    setLocale(newLocale);
    // Force re-render of all components
    window.dispatchEvent(new CustomEvent('localeChange', { detail: newLocale }));
  };

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, isClient }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocaleContext must be used within a LocaleProvider');
  }
  return context;
}