
import React from 'react';
import { StepProps } from '../types';

const SuccessStep: React.FC<StepProps> = () => {
  // Reload function to simulate starting a new process
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-off-white overflow-hidden max-w-md mx-auto shadow-2xl">
      
      {/* Image Header */}
      <div className="relative h-[45vh] w-full bg-sand-beige overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                // Image: Top view, clean desk, blonde woman, laptop, notebook (project), no glasses/calculator
                backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop")',
                filter: 'brightness(0.98) contrast(1.05)',
                backgroundPosition: 'center 40%'
            }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-off-white via-off-white/20 to-transparent"></div>
      </div>

      {/* Content Body */}
      <div className="flex-1 flex flex-col items-center px-8 -mt-12 relative z-10 animate-in slide-in-from-bottom-8 duration-700">
        
        {/* Success Icon */}
        <div className="size-20 bg-olive-green rounded-full flex items-center justify-center shadow-lg shadow-olive-green/30 mb-8 ring-4 ring-off-white">
            <span className="material-symbols-outlined text-white text-[40px] font-bold">check</span>
        </div>

        <div className="flex flex-col gap-6 text-center">
            <h2 className="text-3xl font-display font-bold text-charcoal-black leading-tight">
                Recebi suas informações com sucesso!
            </h2>
            
            <p className="text-charcoal-black/80 text-[17px] font-light leading-relaxed">
                Agora vou analisar todos os detalhes e arquivos enviados.
            </p>

            <div className="py-2 px-4 rounded-lg bg-sand-beige/20 border border-sand-beige/30">
                <p className="text-charcoal-black text-[17px] font-body font-normal leading-relaxed">
                    Em até <strong className="text-olive-green font-bold">3 dias úteis</strong>, entrarei em contato com a proposta orçamentária e o cronograma para o seu projeto.
                </p>
            </div>

            <p className="text-olive-green font-display font-bold text-xl leading-relaxed italic mt-2">
                Obrigado por escolher essa parceria!
            </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pb-10 w-full bg-off-white/50 backdrop-blur-sm">
        <button 
          onClick={handleRestart}
          className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white border border-sand-beige/50 text-olive-green hover:bg-olive-green hover:text-white hover:border-olive-green h-14 px-8 text-base font-bold tracking-wide transition-all shadow-sm active:scale-[0.98] uppercase"
        >
          <span className="material-symbols-outlined mr-2 text-[20px]">home</span>
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default SuccessStep;
