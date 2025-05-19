'use client';
import React, { useEffect, useRef } from 'react';
import Counter from './Counter';

export default function Stat() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    if (!isMobile || !container) return;
    let scrollAmount = 0;
    const scrollStep = container.offsetWidth / 3;
    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const stats = [
    { label: 'Years Experience', value: 12, suffix: '+' },
    { label: 'Clients Served', value: 300, suffix: '+' },
    { label: 'Trainings Delivered', value: 150, suffix: '+' },
    { label: 'Satisfaction Rate', value: 95, suffix: '%' },
    { label: 'Retention Rate', value: 85, suffix: '%' },
  ];
  return (
    <div className="w-full px-2 md:px-[128px] overflow-hidden">
      <div
        ref={containerRef}
        className="flex md:grid md:grid-cols-5 gap-8 text-center overflow-x-auto no-scrollbar scroll-smooth"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="min-w-[150px] flex-shrink-0 md:min-w-0">
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-sm text-green-100 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
