'use client';
import { useEffect, useState } from 'react';

export default function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <span className="text-3xl font-bold">
      <h3 className="md:text-5xl">
        {count}
        {suffix}
      </h3>
    </span>
  );
}
