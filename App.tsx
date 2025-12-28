
import React, { useState } from 'react';
import WelcomeStep from './components/WelcomeStep';
import ServiceStep from './components/ServiceStep';
import TechnicalStep from './components/TechnicalStep';
import UploadStep from './components/UploadStep';
import AudioStep from './components/AudioStep';
import FeedbackStep from './components/FeedbackStep';
import SuccessStep from './components/SuccessStep';
import { ProjectData } from './types';

const initialData: ProjectData = {
  serviceTypes: [],
  
  drawingsDetails: {
    finalFormat: null,
    layoutPlan: false,
    electricalHydraulic: false,
    zoningPlan: false
  },
  modelingDetails: {
    baseFile: null,
    basicVolumetry: false,
    humanizedPlan: false,
    explodedView: false,
    cuts: false
  },
  renderingDetails: {
    baseFile: null,
    atmosphere: null,
    usage: null,
    environmentCounts: {},
    viewCounts: {},
    customEnvironment: '',
    customView: ''
  },

  scale: '1:50',
  technicalNotes: '',
  files: [],
  audioBriefing: null,
  feedback: '',
  
  // Legacy initialization
  software: null,
  scope: {
    floorPlans: true,
    technicalCuts: true,
    woodwork: false,
  }
};

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<ProjectData>(initialData);

  const updateData = (partial: Partial<ProjectData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(0, prev - 1));

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 1:
        return <ServiceStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <TechnicalStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <UploadStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <AudioStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 5:
        return <FeedbackStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 6:
        return <SuccessStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      default:
        return <WelcomeStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen font-sans">
      {renderStep()}
    </div>
  );
};

export default App;
