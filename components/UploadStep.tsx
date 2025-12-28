
import React from 'react';
import { StepProps } from '../types';

const UploadStep: React.FC<StepProps> = ({ onNext, onBack }) => {

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-off-white pb-24 max-w-md mx-auto shadow-2xl overflow-hidden">
      <div className="sticky top-0 z-50 flex items-center bg-off-white/95 backdrop-blur-md p-4 justify-between border-b border-sand-beige/40">
        <button onClick={onBack} className="text-charcoal-black flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-charcoal-black text-xl font-display font-bold leading-tight tracking-wide">Upload de Arquivos</h2>
        <button className="text-olive-green font-body font-bold text-sm tracking-wide hover:text-olive-dark transition-colors">
            AJUDA
        </button>
      </div>

      <div className="px-6 py-4 animate-in fade-in duration-500">
        <p className="text-charcoal-black/70 text-base font-normal leading-relaxed">
            Compartilhe as bases técnicas do projeto e suas referências visuais para iniciarmos o processo de criação.
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-2 animate-in slide-in-from-bottom duration-500">
        
        {/* Section 1: Plants */}
        <div className="px-4">
            <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-olive-green text-2xl">architecture</span>
                <h3 className="text-charcoal-black text-xl font-display font-bold">Plantas e CAD</h3>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full h-44 rounded-xl border border-dashed border-olive-green/40 bg-[#F4F1ED] hover:bg-[#EAE5DD] transition-colors group cursor-pointer overflow-hidden">
                <div className="flex flex-col items-center gap-3 z-10">
                    <div className="size-12 rounded-full bg-olive-green/10 flex items-center justify-center text-olive-green group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                    </div>
                    <div className="text-center">
                        <p className="text-base font-display font-bold text-charcoal-black mb-1">Toque para enviar</p>
                        <p className="text-xs font-body text-charcoal-black/60 uppercase tracking-wider">DWG, PDF (Max 50MB)</p>
                    </div>
                </div>
                <input type="file" className="hidden" />
            </div>
        </div>

        <div className="h-px bg-sand-beige/40 mx-6"></div>

        {/* Section 2: Photos */}
        <div className="px-4">
            <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-olive-green text-2xl">camera_alt</span>
                <h3 className="text-charcoal-black text-xl font-display font-bold">Levantamento Fotográfico ou Desenho a mão (Croqui)</h3>
            </div>
            
            <div className="relative flex flex-col items-center justify-center w-full h-24 rounded-xl border border-dashed border-olive-green/40 bg-[#F4F1ED] hover:bg-[#EAE5DD] transition-colors group cursor-pointer mb-6">
                <div className="flex flex-row items-center gap-3">
                    <span className="material-symbols-outlined text-olive-green/70 group-hover:text-olive-green transition-colors">add_photo_alternate</span>
                    <p className="text-sm font-medium text-charcoal-black/60 group-hover:text-charcoal-black transition-colors font-body tracking-wide">ADICIONAR FOTOS DO LOCAL</p>
                </div>
                <input type="file" className="hidden" multiple accept="image/*" />
            </div>
        </div>

        <div className="h-px bg-sand-beige/40 mx-6"></div>

        {/* Section 3: Visual References (Moved here) */}
        <div className="px-4">
            <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-olive-green text-2xl">style</span>
                <h3 className="text-charcoal-black text-xl font-display font-bold">Referências de Estilo</h3>
            </div>
            
            <label className="relative flex flex-col items-center justify-center w-full h-64 rounded-xl border border-dashed border-olive-green/40 bg-[#F4F1ED] hover:bg-[#EAE5DD] transition-colors group cursor-pointer overflow-hidden mb-6">
                <div className="flex flex-col items-center gap-5 z-10 p-8 text-center">
                    <div className="size-16 rounded-full bg-olive-green/10 flex items-center justify-center text-olive-green group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-4xl">add_photo_alternate</span>
                    </div>
                    <div>
                        <p className="text-lg font-display font-bold text-charcoal-black mb-2">Toque para enviar</p>
                        <p className="text-sm font-body text-charcoal-black/60 leading-relaxed max-w-[240px] mx-auto">
                            Compartilhe moodboards, pinterest, fotos de inspiração ou materiais de referência.
                        </p>
                        <p className="text-xs font-bold text-olive-green mt-4 uppercase tracking-widest">JPG, PNG, PDF (Max 50MB)</p>
                    </div>
                </div>
                <input type="file" className="hidden" multiple accept="image/*,application/pdf" />
            </label>

            <div className="flex items-center justify-center p-2 text-center">
                    <p className="text-sm text-charcoal-black/40 italic">Nenhuma referência adicionada ainda.</p>
            </div>
        </div>

        {/* Import Sources */}
        <div className="px-4 mt-4 mb-6">
            <p className="text-xs font-bold text-charcoal-black/40 uppercase tracking-[0.15em] mb-3">Importar de</p>
            <div className="flex gap-4">
                <button className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white border border-sand-beige/40 text-charcoal-black/80 text-sm font-medium hover:bg-[#F4F1ED] hover:border-sand-beige transition-all shadow-sm">
                    <span className="material-symbols-outlined text-olive-green" style={{fontSize: '20px'}}>cloud</span>
                    iCloud
                </button>
                <button className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white border border-sand-beige/40 text-charcoal-black/80 text-sm font-medium hover:bg-[#F4F1ED] hover:border-sand-beige transition-all shadow-sm">
                    <span className="material-symbols-outlined text-olive-green" style={{fontSize: '20px'}}>folder_shared</span>
                    Drive
                </button>
            </div>
        </div>

      </div>

      <div className="fixed bottom-0 z-50 w-full max-w-md p-6 bg-off-white/95 backdrop-blur-md border-t border-sand-beige/40">
        <div className="w-full flex flex-col gap-2">
            <button 
                onClick={onNext}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-olive-green hover:bg-olive-dark text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-olive-green/30 transition-all active:scale-[0.98]">
                <span className="truncate font-body uppercase tracking-wider">Salvar e Continuar</span>
                <span className="material-symbols-outlined ml-3" style={{fontSize: '20px'}}>arrow_forward</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default UploadStep;
