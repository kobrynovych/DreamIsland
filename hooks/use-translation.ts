'use client';

import { useState, useEffect } from 'react';
import { useLocale } from './use-locale';
import { getTranslation } from '@/lib/i18n';

export function useTranslation() {
  const { locale, isClient } = useLocale();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleLocaleChange = () => {
      forceUpdate({});
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('localeChange', handleLocaleChange);
      return () => window.removeEventListener('localeChange', handleLocaleChange);
    }
  }, []);

  const t = (key: string): string => {
    if (!isClient) return key;
    return getTranslation(locale, key);
  };

  return { t, locale, isClient };
}