import React from 'react';
import { StepProps, ServiceType } from '../types';

const ServiceStep: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  const toggleSelect = (val: ServiceType) => {
    const current = data.serviceTypes || [];
    if (current.includes(val)) {
        updateData({ serviceTypes: current.filter(item => item !== val) });
    } else {
        updateData({ serviceTypes: [...current, val] });
    }
  };

  const isSelected = (val: ServiceType) => data.serviceTypes?.includes(val);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-off-white overflow-hidden max-w-md mx-auto shadow-2xl">
      <header className="flex items-center bg-off-white px-4 py-6 sticky top-0 z-10">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-sand-beige/20 transition-colors">
          <span className="material-symbols-outlined text-charcoal-black" style={{fontSize: '24px'}}>arrow_back</span>
        </button>
        <h2 className="text-charcoal-black text-lg font-display font-bold leading-tight flex-1 text-center pr-10">Novo Projeto</h2>
      </header>

      <main className="flex-1 px-5 pb-24 animate-in slide-in-from-right duration-500">
        <div className="pt-2 pb-8">
          <h1 className="text-charcoal-black font-display text-[32px] font-bold leading-tight mb-3">O que precisamos executar hoje?</h1>
          <p className="text-charcoal-black/70 text-base font-normal leading-relaxed">Escolha uma ou mais soluções técnicas para delegar a execução.</p>
        </div>

        <form className="flex flex-col gap-5">
          {/* Option 1 */}
          <label className={`group relative flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition-all hover:shadow-md 
            ${isSelected('drawings') ? 'border-olive-green bg-off-white shadow-md' : 'border-sand-beige bg-white hover:border-olive-green'}`}>
            <div className={`flex size-12 shrink-0 items-center justify-center rounded-lg transition-colors
               ${isSelected('drawings') ? 'bg-olive-green text-white' : 'bg-sand-beige/20 text-olive-green'}`}>
              <span className="material-symbols-outlined" style={{fontSize: '26px'}}>square_foot</span>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-display font-bold text-charcoal-black">Levantamento e Desenho</h3>
                <input 
                  type="checkbox" 
                  checked={isSelected('drawings')} 
                  onChange={() => toggleSelect('drawings')}
                  className="h-5 w-5 border-sand-beige text-olive-green focus:ring-olive-green bg-transparent accent-olive-green rounded"
                />
              </div>
              <p className="text-sm text-charcoal-black/60 leading-relaxed">Plantas técnicas e medições precisas para aprovação e execução.</p>
            </div>
          </label>

          {/* Option 2 */}
          <label className={`group relative flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition-all hover:shadow-md 
            ${isSelected('3d_modeling') ? 'border-olive-green bg-off-white shadow-md' : 'border-sand-beige bg-white hover:border-olive-green'}`}>
            <div className={`flex size-12 shrink-0 items-center justify-center rounded-lg transition-colors
               ${isSelected('3d_modeling') ? 'bg-olive-green text-white' : 'bg-sand-beige/20 text-olive-green'}`}>
              <span className="material-symbols-outlined" style={{fontSize: '26px'}}>view_in_ar</span>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-display font-bold text-charcoal-black">Modelagem 3D</h3>
                <input 
                  type="checkbox" 
                  checked={isSelected('3d_modeling')} 
                  onChange={() => toggleSelect('3d_modeling')}
                  className="h-5 w-5 border-sand-beige text-olive-green focus:ring-olive-green bg-transparent accent-olive-green rounded"
                />
              </div>
              <p className="text-sm text-charcoal-black/60 leading-relaxed">Volumetria detalhada, BIM e estruturas complexas.</p>
            </div>
          </label>

          {/* Option 3 */}
          <label className={`group relative flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition-all hover:shadow-md 
            ${isSelected('rendering') ? 'border-olive-green bg-off-white shadow-md' : 'border-sand-beige bg-white hover:border-olive-green'}`}>
            <div className={`flex size-12 shrink-0 items-center justify-center rounded-lg transition-colors
               ${isSelected('rendering') ? 'bg-olive-green text-white' : 'bg-sand-beige/20 text-olive-green'}`}>
              <span className="material-symbols-outlined" style={{fontSize: '26px'}}>photo_camera_back</span>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-display font-bold text-charcoal-black">Renderização Realista</h3>
                <input 
                  type="checkbox" 
                  checked={isSelected('rendering')} 
                  onChange={() => toggleSelect('rendering')}
                  className="h-5 w-5 border-sand-beige text-olive-green focus:ring-olive-green bg-transparent accent-olive-green rounded"
                />
              </div>
              <p className="text-sm text-charcoal-black/60 leading-relaxed">Imagens fotorrealistas de alta qualidade para apresentações de venda.</p>
            </div>
          </label>
        </form>

        <div className="mt-10 flex justify-center opacity-60">
          <div className="relative h-32 w-full overflow-hidden rounded-xl border border-sand-beige/30 bg-off-white">
            <svg className="absolute inset-0 h-full w-full stroke-sand-beige" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"></rect>
              <path d="M0 100 Q 150 50 350 100 T 500 100" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M0 80 Q 150 30 350 80 T 500 80" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </svg>
            <div className="absolute bottom-3 left-4">
              <span className="text-[10px] font-sans font-bold text-olive-green tracking-[0.2em] uppercase">Tecnologia & Precisão</span>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 z-20 w-full max-w-md bg-off-white p-5 border-t border-sand-beige/30">
        <button 
            onClick={onNext}
            disabled={!data.serviceTypes || data.serviceTypes.length === 0}
            className="w-full rounded-lg bg-olive-green py-4 px-4 text-center text-base font-bold text-white shadow-lg shadow-olive-green/20 hover:bg-olive-dark transition-all active:scale-[0.98] uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed">
            Avançar
        </button>
      </div>
    </div>
  );
};

export default ServiceStep;