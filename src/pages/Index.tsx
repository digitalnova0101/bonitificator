
import React from 'react';
import Header from '@/components/Header';
import TextTransformer from '@/components/TextTransformer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TextTransformer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
