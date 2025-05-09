import About from '@/components/About';
import Choose from '@/components/Choose';
import HeroSection from '@/components/HeroSection';
import Testimonies from '@/components/Testimonies';
import WhatWeDo from '@/components/WhatWeDo';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <WhatWeDo />
      <About />
      <Choose />
      <Testimonies />
    </div>
  );
}
