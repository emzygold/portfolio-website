'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '@/lib/constants';

function AnimatedNumber({
  target,
  shouldAnimate,
}: {
  target: number;
  shouldAnimate: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [shouldAnimate, target]);

  return <>{current}</>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="container" ref={ref}>
      <div className="stats-bar">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div
              className={`stat-number${stat.color === 'cyan' ? ' cyan' : ''}`}
            >
              <span>
                {stat.prefix ?? ''}
                <AnimatedNumber
                  target={stat.value}
                  shouldAnimate={isInView}
                />
                {stat.suffix}
              </span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
