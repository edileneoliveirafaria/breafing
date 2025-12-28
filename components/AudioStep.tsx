import React, { useState, useEffect } from 'react';
import { StepProps } from '../types';

const AudioStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isRecording && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-off-white overflow-hidden max-w-md mx-auto">
       <header className="flex items-center justify-between p-4 sticky top-0 z-10 bg-off-white/90 backdrop-blur-sm">
        <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full hover:bg-charcoal-black/5 transition-colors text-charcoal-black">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-charcoal-black text-lg font-display font-semibold leading-tight flex-1 text-center pr-10">Briefing Criativo</h2>
      </header>

      <main className="flex-1 flex flex-col items-center w-full px-6 pt-4 pb-8 relative z-0 animate-in zoom-in-95 duration-500">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[40%] bg-sand-beige/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[60%] h-[40%] bg-olive-green/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 mb-10 mt-4">
          <h1 className="text-charcoal-black font-display text-4xl font-semibold tracking-tight">Briefing por Áudio</h1>
          <p className="text-charcoal-black/70 text-base font-normal leading-relaxed max-w-xs mx-auto">
            Prefere explicar falando? Grave um resumo aqui sobre suas ideias e o conceito do projeto.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full flex-1 min-h-[180px]">
          <div className="mb-10 px-6 py-3 rounded-full border border-olive-green/20 bg-white/50 backdrop-blur-sm shadow-sm">
            <p className="text-olive-green text-5xl font-mono font-light tracking-widest tabular-nums">{formatTime(timer)}</p>
          </div>
          
          {/* Visualizer bars */}
          <div className="flex items-center justify-center gap-1.5 h-16 w-full px-8">
             {[3, 5, 8, 4, 10, 6, 12, 8, 14, 7, 10, 5, 8, 3, 5, 2].map((height, i) => (
               <div 
                key={i} 
                className={`w-1 rounded-full transition-all duration-300 ${isRecording ? 'animate-pulse bg-olive-green' : 'bg-sand-beige'}`}
                style={{ 
                    height: isRecording ? `${Math.random() * 40 + 10}px` : `${height * 4}px`,
                    opacity: isRecording ? 1 : 0.6 
                }}
               ></div>
             ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-8 mt-auto pt-8">
          <div className="flex items-center gap-8 md:gap-12">
            <button 
                className="size-14 rounded-full flex items-center justify-center text-charcoal-black/40 hover:text-olive-green hover:bg-olive-green/10 transition-colors" 
                onClick={() => { setTimer(0); setIsRecording(false); }}
                disabled={timer === 0 && !isRecording}
            >
              <span className="material-symbols-outlined text-[28px]">restart_alt</span>
            </button>
            
            <button 
                onClick={() => setIsRecording(!isRecording)}
                className={`group relative flex items-center justify-center size-24 rounded-full text-white shadow-soft transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-olive-green/20 ${isRecording ? 'bg-red-500' : 'bg-olive-green'}`}>
              <span className={`absolute inset-0 rounded-full border border-off-white/30 duration-1000 ${isRecording ? 'animate-ping opacity-100' : 'opacity-0'}`}></span>
              <span className="material-symbols-outlined text-[44px]">{isRecording ? 'stop' : 'mic'}</span>
            </button>

            <button 
                className="size-14 rounded-full flex items-center justify-center text-charcoal-black/40 hover:text-olive-green hover:bg-olive-green/10 transition-colors" 
                disabled={timer === 0}
            >
              <span className="material-symbols-outlined text-[32px]">play_arrow</span>
            </button>
          </div>
          
          <p className="text-sm font-medium tracking-wide text-charcoal-black/50 uppercase">
             {isRecording ? 'Gravando...' : 'Toque para gravar'}
          </p>

          <div className="w-full pt-6">
            <button 
                onClick={onNext}
                className="w-full h-14 bg-white border border-charcoal-black/10 text-charcoal-black rounded-none font-display text-lg tracking-wider font-semibold flex items-center justify-center gap-3 transition-colors hover:bg-off-white uppercase hover:text-olive-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
               Pular ou Enviar Áudio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AudioStep;