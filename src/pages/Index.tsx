import React, { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import EnvelopePage from '@/components/EnvelopePage';
import LandingPage from '@/components/LandingPage';
import ConfirmationPage from '@/components/ConfirmationPage';
import SlideshowPage from '@/components/SlideshowPage';

type Page = 'envelope' | 'landing' | 'confirmation' | 'slideshow';

const Index: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('envelope');

  return (
    <div className="relative">
      <FloatingHearts />
      
      {currentPage === 'envelope' && (
        <EnvelopePage onOpen={() => setCurrentPage('landing')} />
      )}
      
      {currentPage === 'landing' && (
        <LandingPage onAccept={() => setCurrentPage('confirmation')} />
      )}
      
      {currentPage === 'confirmation' && (
        <ConfirmationPage 
          onStartSlideshow={() => setCurrentPage('slideshow')} 
          onBack={() => setCurrentPage('landing')}
        />
      )}
      
      {currentPage === 'slideshow' && (
        <SlideshowPage onBack={() => setCurrentPage('landing')} />
      )}
    </div>
  );
};

export default Index;
