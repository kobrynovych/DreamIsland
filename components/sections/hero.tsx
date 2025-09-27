'use client';

import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';
import { getTranslation } from '@/lib/i18n';

export function Hero() {
  const { locale } = useLocale();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {getTranslation(locale, 'hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            {getTranslation(locale, 'hero.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {getTranslation(locale, 'hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 px-8 py-6 text-lg"
              onClick={() => window.open('https://www.youtube.com/@islandofadream', '_blank')}
            >
              <Play className="h-5 w-5" />
              {getTranslation(locale, 'hero.watchOnYoutube')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 px-8 py-6 text-lg"
              onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="h-5 w-5" />
              {getTranslation(locale, 'hero.exploreMusic')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}