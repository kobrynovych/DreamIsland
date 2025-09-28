'use client';

import Link from 'next/link';
import { Music, Youtube, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: '#home', key: 'nav.home' },
    { href: '#about', key: 'nav.about' },
    { href: '#music', key: 'nav.music' },
  ];

  const socialLinks = [
    {
      href: 'https://www.youtube.com/@IslandOfADream/playlists',
      icon: Youtube,
      label: 'YouTube'
    },
    {
      href: 'https://t.me/IslandOfAWar',
      icon: MessageCircle,
      label: 'Telegram WAR Music'
    },
    {
      href: 'https://t.me/IslandOfAIT',
      icon: MessageCircle,
      label: 'Telegram IT Music'
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Music className="h-4 w-4 text-white" />
              </div>
              {t('hero.title')}
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="min-w-[188px]">
            <h3 className="font-semibold mb-4">{t('footer.social')}</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                >
                  <link.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {t('hero.title')}. {t('footer.allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
}