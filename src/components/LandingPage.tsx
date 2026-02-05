import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onAccept: () => void;
}

const confirmationStages = [
  "Yes",
  "Are you sure?",
  "Please",
  "Pretty please",
  "Koko Please 🥺",
];

const LandingPage: React.FC<LandingPageProps> = ({ onAccept }) => {
  const [stage, setStage] = useState(0);
  const [noButtonOffset, setNoButtonOffset] = useState({ x: 0, y: 0 });
  const [wiggle, setWiggle] = useState(false);

  const handleYesClick = () => {
    if (stage < confirmationStages.length - 1) {
      setStage(stage + 1);
    } else {
      onAccept();
    }
  };

  const handleNoHover = () => {
    // Make the No button run away
    const newX = (Math.random() - 0.5) * 200;
    const newY = (Math.random() - 0.5) * 100;
    setNoButtonOffset({ x: newX, y: newY });
    setWiggle(true);
    setTimeout(() => setWiggle(false), 500);
  };

  return (
    <div className="min-h-screen valentine-gradient flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative heart */}
      <div className="mb-8 animate-gentle-float">
        <Heart 
          size={64} 
          className="text-primary fill-primary animate-pulse-soft heart-shadow"
          style={{ filter: 'drop-shadow(0 4px 20px hsl(350 80% 72% / 0.4))' }}
        />
      </div>

      {/* Main headline */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-foreground mb-4 animate-fade-in-up">
        Will you be my Valentine,
      </h1>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center text-gradient-rose mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Koko?
      </h2>

      {/* Subtitle hint when progressing */}
      {stage > 0 && (
        <p className="text-muted-foreground text-sm mb-6 animate-fade-in-up">
          Just a little more... 💕
        </p>
      )}

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button
          variant="valentine"
          size="xl"
          onClick={handleYesClick}
          className={`min-w-[180px] ${stage > 0 ? 'animate-shimmer' : ''}`}
        >
          {confirmationStages[stage]}
        </Button>

        <div
          className="relative transition-transform duration-300"
          style={{
            transform: `translate(${noButtonOffset.x}px, ${noButtonOffset.y}px)`,
          }}
        >
          <Button
            variant="valentineOutline"
            size="xl"
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className={`min-w-[180px] ${wiggle ? 'animate-wiggle' : ''}`}
          >
            No
          </Button>
        </div>
      </div>

      {/* Small decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 opacity-30">
        <Heart size={12} className="text-primary fill-primary" />
        <Heart size={16} className="text-primary fill-primary" />
        <Heart size={12} className="text-primary fill-primary" />
      </div>
    </div>
  );
};

export default LandingPage;
