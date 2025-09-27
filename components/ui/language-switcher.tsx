'use client';

import { Globe, Check } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
  const { locale, changeLocale, isClient } = useLocale();

  if (!isClient) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <Globe className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale('uk')} className="gap-2">
          {locale === 'uk' && <Check className="h-4 w-4" />}
          <span className={locale !== 'uk' ? 'ml-6' : ''}>🇺🇦 Українська</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('en')} className="gap-2">
          {locale === 'en' && <Check className="h-4 w-4" />}
          <span className={locale !== 'en' ? 'ml-6' : ''}>🇺🇸 English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}