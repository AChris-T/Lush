import React from 'react';
import Counter from './Counter';

export default function Stat() {
  const stats = [
    { label: 'Years Experience', value: 12, suffix: '+' },
    { label: 'Clients Served', value: 300, suffix: '+' },
    { label: 'Trainings Delivered', value: 150, suffix: '+' },
    { label: 'Satisfaction Rate', value: 95, suffix: '%' },
    { label: 'Retention Rate', value: 85, suffix: '%' },
  ];
  return (
    <div className="flex items-center justify-center w-full px-2 md:px-[128px]">
      <div className="grid grid-cols-3 justify-between w-full md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-sm text-green-100 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
