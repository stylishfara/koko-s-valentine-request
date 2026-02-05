import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';

interface SlideshowPageProps {
  onBack: () => void;
}

// Placeholder images - replace with your actual couple photos
const slides = [
  {
    id: 1,
    placeholder: true,
    caption: "Our first adventure together 💕",
  },
  {
    id: 2,
    placeholder: true,
    caption: "That perfect sunset moment 🌅",
  },
  {
    id: 3,
    placeholder: true,
    caption: "Making memories with you ✨",
  },
  {
    id: 4,
    placeholder: true,
    caption: "My favorite person 💛",
  },
  {
    id: 5,
    placeholder: true,
    caption: "Forever grateful for you 💕",
  },
];

const SlideshowPage: React.FC<SlideshowPageProps> = ({ onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen valentine-gradient flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <BackButton onClick={onBack} />

      {/* Slideshow container */}
      <div className="w-full max-w-lg mx-auto">
        {/* Image container */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card shadow-2xl mb-6">
          {/* Placeholder or actual image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-soft to-cream">
            <div className="text-center p-8">
              <Heart size={64} className="text-primary/30 fill-primary/20 mx-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                Add your photo here
              </p>
              <p className="text-muted-foreground/60 text-xs mt-2">
                Photo {currentSlide + 1} of {slides.length}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-card transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Caption */}
        <p className="text-center font-display text-xl text-foreground mb-6 animate-fade-in-up" key={currentSlide}>
          {slides[currentSlide].caption}
        </p>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary w-8'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <p className="text-center text-muted-foreground/60 text-xs mt-4">
          {isAutoPlaying ? '▶ Auto-playing' : 'Paused'}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 opacity-20">
        <Heart size={16} className="text-primary fill-primary" />
        <Heart size={20} className="text-primary fill-primary" />
        <Heart size={16} className="text-primary fill-primary" />
      </div>
    </div>
  );
};

export default SlideshowPage;
