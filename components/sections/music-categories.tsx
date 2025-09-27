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
  const { locale } = useLocale();

  return (
    <section id="music" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {getTranslation(locale, 'categories.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {getTranslation(locale, 'categories.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {musicCategories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={category.coverImage}
                  alt={getTranslation(locale, category.titleKey)}
                  width={800}
                  height={450}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {category.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {getTranslation(locale, category.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {getTranslation(locale, category.descriptionKey)}
                </p>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2"
                  onClick={() => window.open(category.telegramChannel, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  {getTranslation(locale, 'categories.downloadOn')} Telegram
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}