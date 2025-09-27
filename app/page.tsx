'use client';

import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { MusicCategories } from '@/components/sections/music-categories';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <MusicCategories />
      <Footer />
    </main>
  );
}