import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface EnvelopePageProps {
  onOpen: () => void;
}

const EnvelopePage: React.FC<EnvelopePageProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => onOpen(), 800);
  };

  return (
    <div className="min-h-screen valentine-gradient flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Floating envelope */}
      <div
        onClick={handleClick}
        className={`cursor-pointer transition-all duration-700 ease-in-out ${
          isOpening
            ? 'scale-150 opacity-0 translate-y-[-60px]'
            : 'animate-envelope-float'
        }`}
      >
        <div className="w-32 h-24 sm:w-40 sm:h-28 bg-card rounded-lg shadow-xl flex items-center justify-center relative heart-shadow hover:scale-110 transition-transform duration-300">
          {/* Envelope flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-1/2 bg-card rounded-t-lg origin-top transition-transform duration-500 ${
              isOpening ? 'scale-y-0' : ''
            }`}
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              background: 'hsl(var(--primary) / 0.15)',
            }}
          />
          <Mail size={40} className="text-primary" />
        </div>
      </div>

      {/* Text */}
      <p
        className={`mt-10 font-display text-lg sm:text-xl text-foreground/70 animate-fade-in-up transition-opacity duration-500 ${
          isOpening ? 'opacity-0' : ''
        }`}
        style={{ animationDelay: '0.5s' }}
      >
        You have a mail 💌
      </p>

      {/* Tap hint */}
      <p
        className={`mt-3 text-sm text-muted-foreground animate-pulse-soft transition-opacity duration-500 ${
          isOpening ? 'opacity-0' : ''
        }`}
      >
        Tap to open
      </p>
    </div>
  );
};

export default EnvelopePage;
