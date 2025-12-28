
export type ServiceType = 'drawings' | '3d_modeling' | 'rendering';

export interface DrawingsDetails {
  finalFormat: 'archicad' | 'sketchup' | 'pdf' | 'image' | null;
  layoutPlan: boolean;
  electricalHydraulic: boolean;
  zoningPlan: boolean;
}

export interface ModelingDetails {
  baseFile: 'cad' | 'pdf' | 'hand_sketch' | null;
  basicVolumetry: boolean;
  humanizedPlan: boolean;
  explodedView: boolean;
  cuts: boolean;
}

export interface RenderingDetails {
  baseFile: 'archicad' | 'sketchup' | null;
  atmosphere: 'day_natural' | 'night_cozy' | 'cloudy_soft' | null;
  usage: 'portfolio' | 'outdoor' | 'client_approval' | null;
  // New fields for counts
  environmentCounts: Record<string, number>;
  viewCounts: Record<string, number>;
  customEnvironment: string;
  customView: string;
}

export interface ProjectData {
  serviceTypes: ServiceType[];
  
  // Specific details per service
  drawingsDetails: DrawingsDetails;
  modelingDetails: ModelingDetails;
  renderingDetails: RenderingDetails;

  // General specs
  scale: string;
  technicalNotes: string;
  files: Array<{ name: string; size: string; type: 'image' | 'pdf'; url?: string }>;
  audioBriefing: Blob | null;
  feedback: string;
  
  // Deprecated fields kept for compatibility if needed, but unused in new UI logic
  software?: any;
  scope?: any;
}

export interface StepProps {
  data: ProjectData;
  updateData: (partial: Partial<ProjectData>) => void;
  onNext: () => void;
  onBack: () => void;
}
