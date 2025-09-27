'use client';

import { Play, ExternalLink, Sparkles, Music2, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 dark:from-red-950 dark:via-orange-950 dark:to-pink-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Floating music notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Music2 className="h-6 w-6 text-red-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Sparkles className="h-4 w-4 text-orange-400/40" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float-slow">
          <Music2 className="h-5 w-5 text-pink-400/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
              <Music className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white gap-2 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.youtube.com/@islandofadream', '_blank')}
            >
              <Play className="h-5 w-5" />
              {t('hero.watchOnYoutube')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 px-8 py-6 text-lg border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="h-5 w-5" />
              {t('hero.exploreMusic')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}