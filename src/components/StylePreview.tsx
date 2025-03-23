
import React from 'react';
import { transformText } from '@/utils/textStyles';
import { Card } from '@/components/ui/card';

interface StylePreviewProps {
  style: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const StylePreview = ({ style, text, isSelected, onClick }: StylePreviewProps) => {
  const previewText = text || 'Exemplo';
  const transformedText = transformText(previewText, style as any);

  return (
    <Card
      className={`p-4 cursor-pointer transition-all duration-200 text-center glass glass-border hover:bg-primary/5 ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <p className="text-sm font-medium mb-2 capitalize">{style}</p>
      <p className="text-lg break-words">{transformedText}</p>
    </Card>
  );
};

export default StylePreview;
