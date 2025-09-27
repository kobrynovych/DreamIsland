'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLocale } from '@/hooks/use-locale';
import { getTranslation } from '@/lib/i18n';
import { musicCategories } from '@/lib/data/music-categories';

export function MusicCategories() {
  const { locale, isClient } = useLocale();

  return (
    <section id="music" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            {isClient ? getTranslation(locale, 'categories.title') : 'Music Categories'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isClient ? getTranslation(locale, 'categories.subtitle') : 'Choose your musical mood'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {musicCategories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={category.coverImage}
                  alt={isClient ? getTranslation(locale, category.titleKey) : category.titleKey}
                  width={800}
                  height={450}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {category.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {isClient ? getTranslation(locale, category.titleKey) : category.titleKey}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {isClient ? getTranslation(locale, category.descriptionKey) : category.descriptionKey}
                </p>

                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open(category.telegramChannel, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  {isClient ? getTranslation(locale, 'categories.downloadOn') : 'Download on'} Telegram
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}