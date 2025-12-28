
import React from 'react';
import { StepProps } from '../types';

const WelcomeStep: React.FC<StepProps> = ({ onNext }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-off-white overflow-hidden max-w-md mx-auto shadow-2xl">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center bg-off-white/95 backdrop-blur-sm p-4 pb-2 justify-between">
        <div className="text-charcoal-black flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-sand-beige/20 transition-colors cursor-pointer opacity-0">
           {/* Placeholder for alignment */}
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-charcoal-black text-lg font-display font-bold leading-tight tracking-wide flex-1 text-center pr-12">
          Bem-vindo
        </h2>
      </div>

      <div className="flex-1 flex flex-col animate-in fade-in duration-700">
        <div className="@container px-6 py-4">
          <div 
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-2xl min-h-[320px] relative shadow-md shadow-olive-green/10" 
            style={{backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")'}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/60 via-charcoal-black/10 to-transparent"></div>
          </div>
        </div>

        <div className="px-8 pt-4 pb-24 flex flex-col gap-4">
          <h1 className="text-olive-green tracking-tight text-[36px] font-display font-bold leading-tight text-left pb-1">
            Olá!
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-charcoal-black text-[17px] font-light leading-relaxed">
              É um prazer colaborar com o seu escritório. Meu objetivo é libertar sua agenda para o que realmente importa, cuidando da execução técnica para que você não perca tempo com o que pode ser terceirizado.
            </p>
            <p className="text-charcoal-black text-[17px] font-light leading-relaxed">
              Este formulário é rápido e direto, garantindo que eu tenha cada detalhe necessário para transformar suas ideias em realidade com precisão.
            </p>
          </div>
          <p className="text-olive-green font-display font-bold text-xl leading-relaxed pt-4 italic">
            Vamos começar?
          </p>
        </div>
      </div>

      <div className="p-6 pb-10 bg-off-white sticky bottom-0 w-full border-t border-sand-beige/20">
        <button 
          onClick={onNext}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-olive-green text-white text-lg font-body font-bold tracking-wide w-full shadow-lg shadow-olive-green/30 active:scale-[0.98] transition-all hover:bg-olive-dark"
        >
          <span className="truncate">Iniciar Briefing</span>
          <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeStep;
