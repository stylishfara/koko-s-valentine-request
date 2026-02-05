import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="valentineGhost"
      size="sm"
      onClick={onClick}
      className="absolute top-6 left-6 gap-2"
    >
      <ArrowLeft size={18} />
      <span>Back</span>
    </Button>
  );
};

export default BackButton;
