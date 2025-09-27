'use client';

import { Sparkles, Upload, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLocale } from '@/hooks/use-locale';
import { getTranslation } from '@/lib/i18n';

export function About() {
  const { locale, isClient } = useLocale();

  const features = [
    {
      icon: Sparkles,
      titleKey: 'about.aiGenerated'
    },
    {
      icon: Upload,
      titleKey: 'about.regularUploads'
    },
    {
      icon: Download,
      titleKey: 'about.freeDownloads'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            {isClient ? getTranslation(locale, 'about.title') : 'About Channel'}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isClient ? getTranslation(locale, 'about.description') : 'Dream Island is a unique YouTube channel where artificial intelligence creates distinctive musical compositions.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {isClient ? getTranslation(locale, feature.titleKey) : feature.titleKey}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}