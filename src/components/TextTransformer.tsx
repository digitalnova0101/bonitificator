
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { transformText, styleNames } from '@/utils/textStyles';
import StylePreview from './StylePreview';
import { useToast } from '@/components/ui/use-toast';

const TextTransformer = () => {
  const [inputText, setInputText] = useState('');
  const [currentStyle, setCurrentStyle] = useState<typeof styleNames[number]>('script');
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: "Texto copiado!",
        duration: 2000,
      });
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Erro ao copiar texto",
        duration: 2000,
      });
    }
  };

  const transformedText = transformText(inputText, currentStyle);

  return (
    <div className="container mx-auto px-4 animate-fade-in">
      <Card className="p-6 glass glass-border">
        <div className="mb-6">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Digite seu texto aqui..."
            className="w-full h-32 p-4 rounded-lg bg-white/50 dark:bg-black/20 border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {styleNames.map((style) => (
            <StylePreview
              key={style}
              style={style}
              text={inputText || 'Exemplo'}
              isSelected={style === currentStyle}
              onClick={() => setCurrentStyle(style)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => handleCopy(transformedText)}
            className="px-8 py-2 glass glass-border hover:bg-primary/10 transition-all duration-200"
            disabled={!transformedText}
          >
            Copiar Texto Transformado
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TextTransformer;
