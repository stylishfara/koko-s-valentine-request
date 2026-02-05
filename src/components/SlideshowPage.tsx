import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import BackButton from '@/components/BackButton';

// Import couple photos
import couple1 from '@/assets/couple-1.jpg';
import couple2 from '@/assets/couple-2.jpg';
import couple3 from '@/assets/couple-3.png';
import couple4 from '@/assets/couple-4.jpg';
import couple5 from '@/assets/couple-5.png';
import couple6 from '@/assets/couple-6.png';
import couple7 from '@/assets/couple-7.png';

interface SlideshowPageProps {
  onBack: () => void;
}

const slides = [
  {
    id: 1,
    image: couple1,
    caption: "Together we shine ✨",
  },
  {
    id: 2,
    image: couple2,
    caption: "The moment you stole my heart 💐",
  },
  {
    id: 3,
    image: couple3,
    caption: "Our love story, animated 💕",
  },
  {
    id: 4,
    image: couple4,
    caption: "Laughing with you is my favorite 💛",
  },
  {
    id: 5,
    image: couple5,
    caption: "Us against the world 💍",
  },
  {
    id: 6,
    image: couple6,
    caption: "Sunday vibes with my love 🚗",
  },
  {
    id: 7,
    image: couple7,
    caption: "Forever my person 💙❤️💚",
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

      {/* Love message */}
      <p className="text-center font-display text-xl md:text-2xl text-foreground mb-8 max-w-md px-4">
        I hope you know you are truly loved, not just today but always ❤️
      </p>

      {/* Slideshow container */}
      <div className="w-full max-w-lg mx-auto">
        {/* Image container */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card shadow-2xl mb-6">
          {/* Actual image */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].caption}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />

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
