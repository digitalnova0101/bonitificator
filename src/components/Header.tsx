
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 glass glass-border mb-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">
          <span className="text-sm uppercase tracking-wider block mb-2 font-sans text-muted-foreground">
            Transformador de Texto
          </span>
          Letras Diferentes e Bonitas
        </h1>
        <p className="text-center mt-4 text-muted-foreground max-w-xl mx-auto">
          Transforme seu texto em estilos elegantes e únicos com apenas um clique
        </p>
      </div>
    </header>
  );
};

export default Header;
