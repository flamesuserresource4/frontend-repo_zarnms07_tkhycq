import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import PromptPanel from './components/PromptPanel';
import FeatureHighlights from './components/FeatureHighlights';
import FooterCTA from './components/FooterCTA';

function App() {
  const [prompt, setPrompt] = useState('');

  const handleGetStarted = () => {
    const el = document.getElementById('prompt-panel');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt to begin your TinyTale.');
      return;
    }
    alert(`Generating a colorful flipbook for: "${prompt}"`);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_0%,#FFE2F7,transparent_55%),radial-gradient(circle_at_80%_10%,#FFF1C2,transparent_60%),radial-gradient(circle_at_10%_80%,#CFF3FF,transparent_55%),radial-gradient(circle_at_90%_85%,#E7FFE4,transparent_60%)]">
      <HeroCover onGetStarted={handleGetStarted} />

      <div id="prompt-panel" className="px-4 sm:px-6">
        <PromptPanel prompt={prompt} setPrompt={setPrompt} onGenerate={handleGenerate} />
      </div>

      <FeatureHighlights />

      <FooterCTA />
    </div>
  );
}

export default App;
