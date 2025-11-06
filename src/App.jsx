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
    // For now, we just simulate generation. Backend endpoints will be added later.
    alert(`Generating a flipbook for: "${prompt}"`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF3C4] via-white to-[#C2F0F7]">
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
