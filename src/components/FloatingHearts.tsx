import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + i * 12}%`,
    delay: `delay-${i}`,
    size: 16 + (i % 3) * 8,
    opacity: 0.15 + (i % 4) * 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute animate-float-up ${heart.delay}`}
          style={{
            left: heart.left,
            bottom: '-50px',
          }}
        >
          <Heart
            size={heart.size}
            className="text-primary fill-primary"
            style={{ opacity: heart.opacity }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
