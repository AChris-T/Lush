import About from '@/components/About';
import Choose from '@/components/Choose';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Testimonies from '@/components/Testimonies';
import WhatWeDo from '@/components/WhatWeDo';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <About />
      <Choose />
      <Testimonies />
    </div>
  );
}
