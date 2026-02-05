import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LandingPageProps {
  onAccept: () => void;
}

const noButtonStages = [
  "No",
  "Are you sure?",
  "Please",
  "Pretty please",
  "Koko Please 🥺",
];

const LandingPage: React.FC<LandingPageProps> = ({ onAccept }) => {
  const [noStage, setNoStage] = useState(0);
  const [noButtonOffset, setNoButtonOffset] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    // Yes goes straight to page 2
    onAccept();
  };

  const handleNoClick = () => {
    if (noStage < noButtonStages.length - 1) {
      setNoStage(noStage + 1);
      // Make the No button wiggle/move slightly
      const newX = (Math.random() - 0.5) * 50;
      const newY = (Math.random() - 0.5) * 30;
      setNoButtonOffset({ x: newX, y: newY });
    } else {
      // After all stages, just accept
      onAccept();
    }
  };

  return (
    <div className="min-h-screen valentine-gradient flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative dots at top */}
      <div className="absolute top-20 flex gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
      </div>

      {/* Large circular heart container */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-card shadow-lg flex items-center justify-center mb-10 animate-fade-in-up">
        <Heart 
          size={80} 
          className="text-primary fill-primary"
        />
      </div>

      {/* Main headline */}
      <h1 className="font-display text-3xl sm:text-4xl text-center text-foreground mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        Will you be my
      </h1>
      <h2 className="font-display text-3xl sm:text-4xl text-center mb-1 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        valentine <span className="text-primary">koko</span>?
      </h2>
      
      {/* Small decorative heart */}
      <Heart size={16} className="text-primary fill-primary my-2 animate-pulse-soft" />
      
      {/* Subtitle */}
      <p className="text-muted-foreground text-base mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        This will mean a lot to me
      </p>

      {/* Floating decorative heart */}
      <div className="absolute right-[20%] top-[55%]">
        <Heart size={20} className="text-primary/40 fill-primary/30 animate-gentle-float" />
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-4 w-full max-w-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {/* Yes button - goes straight to page 2 */}
        <Button
          variant="valentine"
          size="xl"
          onClick={handleYesClick}
          className="w-full rounded-full text-lg"
        >
          Yes, I'd love to!
        </Button>

        {/* Small heart between buttons */}
        <div className="flex justify-center -my-1">
          <Heart size={14} className="text-primary/50 fill-primary/40" />
        </div>

        {/* No button - shows stages */}
        <div
          className="transition-transform duration-300"
          style={{
            transform: `translate(${noButtonOffset.x}px, ${noButtonOffset.y}px)`,
          }}
        >
          <Button
            variant="valentineOutline"
            size="xl"
            onClick={handleNoClick}
            className={`w-full rounded-full text-lg ${noStage > 0 ? 'border-primary/60' : ''}`}
          >
            {noButtonStages[noStage]}
          </Button>
        </div>
      </div>

      {/* Decorative hearts at left */}
      <div className="absolute left-[10%] top-[45%]">
        <Heart size={18} className="text-primary/30 fill-primary/20 animate-gentle-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Bottom decorative hearts */}
      <div className="absolute bottom-20 flex gap-8 items-end">
        <Heart size={18} className="text-primary/20 fill-transparent stroke-primary/30" strokeWidth={1.5} />
        <Heart size={22} className="text-primary/30 fill-primary/20" />
      </div>
    </div>
  );
};

export default LandingPage;
