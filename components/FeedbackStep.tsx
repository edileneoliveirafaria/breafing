
import React from 'react';
import { StepProps } from '../types';

const FeedbackStep: React.FC<StepProps> = ({ onBack, onNext }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-off-white overflow-hidden max-w-md mx-auto shadow-2xl">
      <div className="flex items-center justify-between bg-off-white p-4 pb-2 sticky top-0 z-10">
        <button onClick={onBack} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-sand-beige/20 cursor-pointer text-charcoal-black transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold leading-tight tracking-tight flex-1 text-center pr-12 font-display text-charcoal-black">Encerramento e Feedback</h2>
      </div>

      <div className="flex flex-col flex-1 px-6 py-4 gap-8 animate-in slide-in-from-bottom duration-700">
        <div className="flex flex-col items-center justify-center gap-6 text-center pt-8">
          <div className="relative flex items-center justify-center size-24 rounded-full bg-sand-beige/30 text-olive-green animate-bounce">
            <span className="material-symbols-outlined" style={{fontSize: '40px'}}>handshake</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-charcoal-black font-display">
            Muito obrigado pela confiança no meu trabalho e por compartilhar seu projeto comigo!
          </h1>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-sand-beige/30">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold leading-tight text-charcoal-black font-display">Seu feedback é importante</h3>
            <p className="text-base font-medium leading-relaxed text-charcoal-black/80 font-body">
              Sentiu falta de algo ou teve dificuldade em alguma etapa deste briefing? Conte para mim (texto ou áudio):
            </p>
          </div>

          <div className="relative">
            <textarea 
                className="flex w-full min-w-0 resize-none rounded-xl border border-sand-beige bg-off-white text-charcoal-black focus:outline-none focus:border-olive-green focus:ring-1 focus:ring-olive-green min-h-[140px] placeholder:text-charcoal-black/40 p-4 text-base font-normal leading-normal transition-all font-body" 
                placeholder="Digite sua mensagem aqui..."
            ></textarea>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-sand-beige"></div>
            <span className="text-xs font-bold text-olive-green uppercase tracking-widest font-body">Ou</span>
            <div className="h-px flex-1 bg-sand-beige"></div>
          </div>

          <button className="group flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-off-white text-charcoal-black hover:bg-sand-beige/20 active:scale-[0.98] h-12 px-4 transition-all duration-200 border border-sand-beige">
            <span className="material-symbols-outlined text-olive-green transition-colors">mic</span>
            <span className="text-sm font-bold leading-normal truncate font-body">Gravar áudio</span>
          </button>
        </div>
      </div>

      <div className="p-6 mt-auto w-full pb-8">
        <button 
            onClick={onNext}
            className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-olive-green text-white h-14 px-6 text-lg font-bold leading-normal tracking-wide hover:bg-olive-dark active:scale-[0.98] transition-all shadow-md shadow-olive-green/20 font-display">
          <span className="truncate">Enviar e Finalizar</span>
          <span className="material-symbols-outlined ml-2 text-[20px]">send</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackStep;
