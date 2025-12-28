
import React from 'react';
import { StepProps } from '../types';

const ROOM_OPTIONS = [
  { id: 'tv_room', label: 'Sala de TV' },
  { id: 'dining_room', label: 'Sala de Jantar' },
  { id: 'living', label: 'Living' },
  { id: 'kitchen', label: 'Cozinha' },
  { id: 'bathroom', label: 'Banheiro' },
  { id: 'bedroom', label: 'Quarto' },
  { id: 'office', label: 'Escritório' },
  { id: 'facade', label: 'Fachada' },
  { id: 'outdoor', label: 'Área Externa' },
];

const TechnicalStep: React.FC<StepProps> = ({ data, updateData, onNext, onBack }) => {
  
  const hasDrawings = data.serviceTypes?.includes('drawings');
  const hasModeling = data.serviceTypes?.includes('3d_modeling');
  const hasRendering = data.serviceTypes?.includes('rendering');

  // Show specifications only if drawings or modeling are selected
  const showGeneralSpecs = hasDrawings || hasModeling;

  // Helper to check/update nested state
  const updateDrawings = (updates: Partial<typeof data.drawingsDetails>) => 
    updateData({ drawingsDetails: { ...data.drawingsDetails, ...updates } });

  const updateModeling = (updates: Partial<typeof data.modelingDetails>) => 
    updateData({ modelingDetails: { ...data.modelingDetails, ...updates } });

  const updateRendering = (updates: Partial<typeof data.renderingDetails>) => 
    updateData({ renderingDetails: { ...data.renderingDetails, ...updates } });

  // Helpers for Rendering Counters
  const handleCounter = (type: 'environmentCounts' | 'viewCounts', key: string, delta: number) => {
    const currentCounts = data.renderingDetails[type] || {};
    const currentVal = currentCounts[key] || 0;
    const newVal = Math.max(0, currentVal + delta);
    
    updateRendering({
        [type]: {
            ...currentCounts,
            [key]: newVal
        }
    });
  };

  const getCount = (type: 'environmentCounts' | 'viewCounts', key: string) => {
      return data.renderingDetails[type]?.[key] || 0;
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-off-white overflow-hidden max-w-md mx-auto shadow-2xl pb-24">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-off-white/95 p-4 backdrop-blur-sm border-b border-sand-beige/20">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-sand-beige/20 transition-colors">
          <span className="material-symbols-outlined text-charcoal-black">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-display font-bold leading-tight tracking-tight flex-1 text-center pr-10 text-charcoal-black">Detalhamento Técnico</h1>
      </header>

      <div className="px-4 pt-4 pb-6 animate-in fade-in duration-500">
        <div className="flex justify-between items-end mb-2">
          <p className="text-sm font-bold text-olive-green tracking-wide font-body">PASSO 3 DE 5</p>
          <p className="text-xs text-charcoal-black/60 font-body">60% Concluído</p>
        </div>
        <div className="h-1.5 w-full rounded-full bg-sand-beige/30 overflow-hidden">
          <div className="h-full rounded-full bg-olive-green transition-all duration-500 ease-out" style={{width: '60%'}}></div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="text-charcoal-black/80 text-base leading-relaxed font-body">
          Defina os detalhes de entrega para os serviços selecionados.
        </p>
      </div>

      <div className="flex flex-col gap-8">
      
      {/* 1. Levantamento e Desenho */}
      {hasDrawings && (
        <section className="px-4 animate-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-xl border border-olive-green/30 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-charcoal-black border-b border-sand-beige/30 pb-2">
                <span className="material-symbols-outlined text-olive-green">square_foot</span>
                Levantamento e Desenho
            </h3>

            {/* Entregável Final */}
            <div className="mb-5">
                <label className="text-sm font-bold text-charcoal-black mb-3 block">Entregável Final</label>
                <div className="flex flex-col gap-2">
                    {[
                        { id: 'archicad', label: 'Archicad (.pln)' },
                        { id: 'sketchup', label: 'SketchUp (.skp)' },
                        { id: 'pdf', label: 'PDF Técnico' },
                        { id: 'image', label: 'Imagem PNG ou JPEG' }
                    ].map((opt) => (
                        <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`size-5 rounded-full border flex items-center justify-center transition-colors ${data.drawingsDetails.finalFormat === opt.id ? 'border-olive-green' : 'border-sand-beige'}`}>
                                {data.drawingsDetails.finalFormat === opt.id && <div className="size-2.5 rounded-full bg-olive-green" />}
                            </div>
                            <input 
                                type="radio" 
                                name="drawings_format" 
                                className="hidden"
                                checked={data.drawingsDetails.finalFormat === opt.id}
                                onChange={() => updateDrawings({ finalFormat: opt.id as any })}
                            />
                            <span className="text-charcoal-black/80 text-sm group-hover:text-olive-green transition-colors">{opt.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Nível de Informação */}
            <div>
                <label className="text-sm font-bold text-charcoal-black mb-3 block">Nível de Informação</label>
                <div className="flex flex-col gap-3">
                     {[
                        { key: 'layoutPlan', label: 'Planta baixa Layout (setorização e cotas)' },
                        { key: 'electricalHydraulic', label: 'Previsão de pontos elétricos e hidraulicos' },
                        { key: 'zoningPlan', label: 'Planta de zoneamento' }
                    ].map((item) => (
                        <label key={item.key} className="flex items-start gap-3 cursor-pointer group">
                            <div className={`size-5 mt-0.5 rounded border flex items-center justify-center transition-colors ${data.drawingsDetails[item.key as keyof typeof data.drawingsDetails] ? 'bg-olive-green border-olive-green' : 'border-sand-beige bg-white'}`}>
                                {data.drawingsDetails[item.key as keyof typeof data.drawingsDetails] && <span className="material-symbols-outlined text-white text-[16px]">check</span>}
                            </div>
                            <input 
                                type="checkbox" 
                                className="hidden"
                                checked={!!data.drawingsDetails[item.key as keyof typeof data.drawingsDetails]}
                                onChange={() => updateDrawings({ [item.key]: !data.drawingsDetails[item.key as keyof typeof data.drawingsDetails] })}
                            />
                            <span className="text-charcoal-black/80 text-sm leading-tight group-hover:text-olive-green transition-colors">{item.label}</span>
                        </label>
                    ))}
                </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. Modelagem 3D */}
      {hasModeling && (
        <section className="px-4 animate-in slide-in-from-bottom-4 duration-700 delay-100">
           <div className="rounded-xl border border-olive-green/30 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-charcoal-black border-b border-sand-beige/30 pb-2">
                <span className="material-symbols-outlined text-olive-green">view_in_ar</span>
                Modelagem 3D
            </h3>

             {/* Base Fornecida */}
             <div className="mb-5">
                <label className="text-sm font-bold text-charcoal-black mb-3 block">Base Fornecida</label>
                <div className="flex flex-col gap-2">
                    {[
                        { id: 'cad', label: 'Arquivo CAD (DWG/DXF)' },
                        { id: 'pdf', label: 'PDF com Medidas' },
                        { id: 'hand_sketch', label: 'Rascunho à mão' }
                    ].map((opt) => (
                        <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`size-5 rounded-full border flex items-center justify-center transition-colors ${data.modelingDetails.baseFile === opt.id ? 'border-olive-green' : 'border-sand-beige'}`}>
                                {data.modelingDetails.baseFile === opt.id && <div className="size-2.5 rounded-full bg-olive-green" />}
                            </div>
                            <input 
                                type="radio" 
                                name="modeling_base" 
                                className="hidden"
                                checked={data.modelingDetails.baseFile === opt.id}
                                onChange={() => updateModeling({ baseFile: opt.id as any })}
                            />
                            <span className="text-charcoal-black/80 text-sm group-hover:text-olive-green transition-colors">{opt.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Entregáveis Extras */}
            <div>
                <label className="text-sm font-bold text-charcoal-black mb-3 block">Entregáveis Extras</label>
                <div className="flex flex-col gap-3">
                     {[
                        { key: 'basicVolumetry', label: 'Volumetria Básica' },
                        { key: 'humanizedPlan', label: 'Planta Humanizada' },
                        { key: 'explodedView', label: 'Vista Explodida' },
                        { key: 'cuts', label: 'Cortes' }
                    ].map((item) => (
                        <label key={item.key} className="flex items-start gap-3 cursor-pointer group">
                            <div className={`size-5 mt-0.5 rounded border flex items-center justify-center transition-colors ${data.modelingDetails[item.key as keyof typeof data.modelingDetails] ? 'bg-olive-green border-olive-green' : 'border-sand-beige bg-white'}`}>
                                {data.modelingDetails[item.key as keyof typeof data.modelingDetails] && <span className="material-symbols-outlined text-white text-[16px]">check</span>}
                            </div>
                            <input 
                                type="checkbox" 
                                className="hidden"
                                checked={!!data.modelingDetails[item.key as keyof typeof data.modelingDetails]}
                                onChange={() => updateModeling({ [item.key]: !data.modelingDetails[item.key as keyof typeof data.modelingDetails] })}
                            />
                            <span className="text-charcoal-black/80 text-sm leading-tight group-hover:text-olive-green transition-colors">{item.label}</span>
                        </label>
                    ))}
                </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Render Realista */}
      {hasRendering && (
        <section className="px-4 animate-in slide-in-from-bottom-4 duration-700 delay-200">
           <div className="rounded-xl border border-olive-green/30 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-charcoal-black border-b border-sand-beige/30 pb-2">
                <span className="material-symbols-outlined text-olive-green">photo_camera_back</span>
                Render Realista
            </h3>

             {/* Arquivo Base */}
             <div className="mb-5">
                <label className="text-sm font-bold text-charcoal-black mb-3 block">Arquivo Base</label>
                <div className="flex flex-row gap-4">
                    {[
                        { id: 'archicad', label: 'Archicad' },
                        { id: 'sketchup', label: 'SketchUp' }
                    ].map((opt) => (
                        <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`size-5 rounded-full border flex items-center justify-center transition-colors ${data.renderingDetails.baseFile === opt.id ? 'border-olive-green' : 'border-sand-beige'}`}>
                                {data.renderingDetails.baseFile === opt.id && <div className="size-2.5 rounded-full bg-olive-green" />}
                            </div>
                            <input 
                                type="radio" 
                                name="rendering_base" 
                                className="hidden"
                                checked={data.renderingDetails.baseFile === opt.id}
                                onChange={() => updateRendering({ baseFile: opt.id as any })}
                            />
                            <span className="text-charcoal-black/80 text-sm group-hover:text-olive-green transition-colors">{opt.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Quantidade de Ambientes */}
            <div className="mb-6">
                <label className="text-sm font-bold text-charcoal-black mb-3 block border-b border-sand-beige/20 pb-1">Quantidade de Ambientes</label>
                <div className="flex flex-col gap-2">
                    {ROOM_OPTIONS.map((room) => (
                         <div key={`env-${room.id}`} className="flex justify-between items-center py-2 border-b border-dashed border-sand-beige/30 last:border-0">
                            <span className="text-charcoal-black/80 text-sm font-body">{room.label}</span>
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={() => handleCounter('environmentCounts', room.id, -1)}
                                    className="size-7 rounded-full bg-sand-beige/20 text-olive-green flex items-center justify-center hover:bg-olive-green hover:text-white transition-colors disabled:opacity-30"
                                    disabled={getCount('environmentCounts', room.id) === 0}
                                >
                                    <span className="material-symbols-outlined text-[16px]">remove</span>
                                </button>
                                <span className="w-5 text-center font-bold text-charcoal-black text-sm">{getCount('environmentCounts', room.id)}</span>
                                <button 
                                    onClick={() => handleCounter('environmentCounts', room.id, 1)}
                                    className="size-7 rounded-full bg-sand-beige/20 text-olive-green flex items-center justify-center hover:bg-olive-green hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[16px]">add</span>
                                </button>
                            </div>
                        </div>
                    ))}
                     <div className="pt-2">
                        <label className="text-xs font-bold text-charcoal-black/60 uppercase tracking-wider mb-1 block">Outros</label>
                        <input 
                            type="text" 
                            className="w-full border-b border-sand-beige bg-transparent py-1 text-sm text-charcoal-black focus:border-olive-green focus:outline-none placeholder:text-charcoal-black/30"
                            placeholder="Descreva outros ambientes..."
                            value={data.renderingDetails.customEnvironment}
                            onChange={(e) => updateRendering({ customEnvironment: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Quantidade de Vistas */}
            <div>
                <label className="text-sm font-bold text-charcoal-black mb-3 block border-b border-sand-beige/20 pb-1">Quantidade de Vistas</label>
                 <div className="flex flex-col gap-2">
                    {ROOM_OPTIONS.map((room) => (
                         <div key={`view-${room.id}`} className="flex justify-between items-center py-2 border-b border-dashed border-sand-beige/30 last:border-0">
                            <span className="text-charcoal-black/80 text-sm font-body">{room.label}</span>
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={() => handleCounter('viewCounts', room.id, -1)}
                                    className="size-7 rounded-full bg-sand-beige/20 text-olive-green flex items-center justify-center hover:bg-olive-green hover:text-white transition-colors disabled:opacity-30"
                                    disabled={getCount('viewCounts', room.id) === 0}
                                >
                                    <span className="material-symbols-outlined text-[16px]">remove</span>
                                </button>
                                <span className="w-5 text-center font-bold text-charcoal-black text-sm">{getCount('viewCounts', room.id)}</span>
                                <button 
                                    onClick={() => handleCounter('viewCounts', room.id, 1)}
                                    className="size-7 rounded-full bg-sand-beige/20 text-olive-green flex items-center justify-center hover:bg-olive-green hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[16px]">add</span>
                                </button>
                            </div>
                        </div>
                    ))}
                     <div className="pt-2">
                        <label className="text-xs font-bold text-charcoal-black/60 uppercase tracking-wider mb-1 block">Outros</label>
                        <input 
                            type="text" 
                            className="w-full border-b border-sand-beige bg-transparent py-1 text-sm text-charcoal-black focus:border-olive-green focus:outline-none placeholder:text-charcoal-black/30"
                            placeholder="Descreva outras vistas..."
                            value={data.renderingDetails.customView}
                            onChange={(e) => updateRendering({ customView: e.target.value })}
                        />
                    </div>
                </div>
            </div>

          </div>
        </section>
      )}

      </div>

      {/* Specifications */}
      {showGeneralSpecs && (
        <section className="px-4 pb-8 mt-8">
            <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2 text-charcoal-black">
            <span className="material-symbols-outlined text-olive-green">tune</span>
            Especificações Gerais
            </h3>
            <div className="space-y-4">
            
            <div className="flex flex-col gap-2 animate-in fade-in duration-300">
                <label className="text-sm font-bold text-charcoal-black font-body">Escala Predominante</label>
                <div className="relative">
                    <select 
                    value={data.scale}
                    onChange={(e) => updateData({ scale: e.target.value })}
                    className="w-full appearance-none rounded-lg border border-sand-beige/40 bg-white p-3 text-charcoal-black focus:border-olive-green focus:outline-none focus:ring-1 focus:ring-olive-green font-body"
                    >
                    <option value="1:50">1:50 (Padrão)</option>
                    <option value="1:100">1:100</option>
                    <option value="1:200">1:200</option>
                    <option value="1:25">1:25</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-charcoal-black/50">
                    <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-charcoal-black font-body">Observações Técnicas</label>
                <textarea 
                    value={data.technicalNotes}
                    onChange={(e) => updateData({ technicalNotes: e.target.value })}
                    className="min-h-[120px] w-full resize-none rounded-lg border border-sand-beige/40 bg-white p-3 text-charcoal-black placeholder-charcoal-black/40 focus:border-olive-green focus:outline-none focus:ring-1 focus:ring-olive-green font-body" 
                    placeholder="Insira detalhes específicos sobre layers, espessuras de pena ou padrões de nomenclatura, se tiver..."
                ></textarea>
            </div>
            </div>
        </section>
      )}

      <div className="fixed bottom-0 z-40 w-full max-w-md border-t border-sand-beige/30 bg-off-white/95 p-4 backdrop-blur-md">
        <button 
            onClick={onNext}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-olive-green py-4 font-bold text-white shadow-lg shadow-olive-green/20 transition-transform active:scale-[0.98] font-body hover:bg-olive-dark">
            Confirmar & Continuar
            <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default TechnicalStep;
