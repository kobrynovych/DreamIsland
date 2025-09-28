'use client';

import Image from 'next/image';
import { Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/hooks/use-translation';
import { musicCategories } from '@/lib/data/music-categories';

export function MusicCategories() {
  const { t } = useTranslation();

  return (
    <section id="music" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            {t('categories.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {musicCategories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={category.coverImage}
                  alt={t(category.titleKey)}
                  width={800}
                  height={450}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300" />
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {category.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-red-500/30 transition-colors duration-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {t(category.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[52px]">
                  {t(category.descriptionKey)}
                </p>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white gap-2 shadow-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://www.youtube.com/@IslandOfADream/playlists', '_blank')}
                  >
                    <Play className="h-4 w-4" />
                    {t('hero.watchOnYoutube')}
                  </Button>

                  <Button
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white gap-2 shadow-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(category.telegramChannel, '_blank')}
                  >
                    <Download className="h-4 w-4" />
                    {t('categories.downloadOn')} Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}