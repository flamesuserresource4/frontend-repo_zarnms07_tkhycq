import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import PromptPanel from './components/PromptPanel';
import FeatureHighlights from './components/FeatureHighlights';
import FooterCTA from './components/FooterCTA';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [prompt, setPrompt] = useState('');
  const [theme, setTheme] = useState('colorful'); // 'colorful' | 'cartoonic'

  const bgClass = useMemo(() => {
    if (theme === 'cartoonic') {
      return 'bg-[radial-gradient(circle_at_20%_0%,#FFE7F0,transparent_55%),radial-gradient(circle_at_85%_10%,#FFF9C4,transparent_60%),radial-gradient(circle_at_10%_85%,#D1F7FF,transparent_55%),radial-gradient(circle_at_90%_85%,#E9FFE8,transparent_60%)]';
    }
    return 'bg-[radial-gradient(circle_at_20%_0%,#FDE2FF,transparent_55%),radial-gradient(circle_at_80%_10%,#FFE7B3,transparent_60%),radial-gradient(circle_at_10%_80%,#CFF3FF,transparent_55%),radial-gradient(circle_at_90%_85%,#DAFFED,transparent_60%)]';
  }, [theme]);

  const handleGetStarted = () => {
    const el = document.getElementById('prompt-panel');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt to begin your TinyTale.');
      return;
    }
    alert(`Generating a ${theme === 'cartoonic' ? 'cartoon-styled' : 'color-splash'} flipbook for: "${prompt}"`);
  };

  const onThemeToggle = (next) => setTheme(next);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${bgClass}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroCover theme={theme} onThemeToggle={onThemeToggle} onGetStarted={handleGetStarted} />

          <div id="prompt-panel" className="px-4 sm:px-6">
            <PromptPanel theme={theme} prompt={prompt} setPrompt={setPrompt} onGenerate={handleGenerate} />
          </div>

          <FeatureHighlights theme={theme} />

          <FooterCTA theme={theme} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
