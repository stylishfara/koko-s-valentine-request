import React, { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import LandingPage from '@/components/LandingPage';
import ConfirmationPage from '@/components/ConfirmationPage';
import SlideshowPage from '@/components/SlideshowPage';

type Page = 'landing' | 'confirmation' | 'slideshow';

const Index: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleAccept = () => {
    setCurrentPage('confirmation');
  };

  const handleStartSlideshow = () => {
    setCurrentPage('slideshow');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const handleBackToConfirmation = () => {
    setCurrentPage('confirmation');
  };

  return (
    <div className="relative">
      <FloatingHearts />
      
      {currentPage === 'landing' && (
        <LandingPage onAccept={handleAccept} />
      )}
      
      {currentPage === 'confirmation' && (
        <ConfirmationPage 
          onStartSlideshow={handleStartSlideshow} 
          onBack={handleBackToLanding}
        />
      )}
      
      {currentPage === 'slideshow' && (
        <SlideshowPage onBack={handleBackToLanding} />
      )}
    </div>
  );
};

export default Index;
