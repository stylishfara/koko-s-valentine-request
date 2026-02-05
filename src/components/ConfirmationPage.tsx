import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';

interface ConfirmationPageProps {
  onStartSlideshow: () => void;
  onBack: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onStartSlideshow, onBack }) => {
  return (
    <div className="min-h-screen valentine-gradient flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <BackButton onClick={onBack} />

      {/* Celebration hearts */}
      <div className="flex gap-4 mb-8 animate-fade-in-up">
        <Heart size={32} className="text-primary fill-primary animate-gentle-float" style={{ animationDelay: '0s' }} />
        <Sparkles size={40} className="text-gold animate-pulse-soft" />
        <Heart size={32} className="text-primary fill-primary animate-gentle-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Thank you message */}
      <div className="text-center max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
          Thank you for accepting this invite
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-2">
          You make my world brighter
        </p>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
          just by being in it. 💛
        </p>
      </div>

      {/* Slideshow button */}
      <Button
        variant="valentine"
        size="xl"
        onClick={onStartSlideshow}
        className="animate-fade-in-up gap-2"
        style={{ animationDelay: '0.4s' }}
      >
        <Sparkles size={20} />
        Start Slideshow
      </Button>

      {/* Decorative bottom hearts */}
      <div className="absolute bottom-10 flex gap-6 opacity-20">
        <Heart size={20} className="text-primary fill-primary animate-gentle-float" />
        <Heart size={28} className="text-primary fill-primary animate-gentle-float" style={{ animationDelay: '0.3s' }} />
        <Heart size={20} className="text-primary fill-primary animate-gentle-float" style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  );
};

export default ConfirmationPage;
