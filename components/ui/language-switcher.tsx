'use client';

import { Globe } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => changeLocale(locale === 'uk' ? 'en' : 'uk')}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {locale.toUpperCase()}
    </Button>
  );
}