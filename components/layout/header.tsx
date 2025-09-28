'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useTranslation } from '@/hooks/use-translation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { href: '#home', key: 'nav.home' },
    { href: '#about', key: 'nav.about' },
    { href: '#music', key: 'nav.music' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('#home')}
          className="flex items-center gap-2 font-bold text-xl hover:scale-105 transition-transform duration-200"
        >
          <div className="h-8 w-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <Music className="h-4 w-4 text-white" />
          </div>
          {t('hero.title')}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-red-600 transition-all duration-200 hover:scale-105"
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-background border-b border-border transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-red-50 dark:hover:bg-red-950 rounded-md transition-all duration-200"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>
      </div>
    </header>
  );
}