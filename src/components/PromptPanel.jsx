import React from 'react';
import { Sparkles, Image as ImageIcon, Settings, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const chipBase = 'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium';

const PromptPanel = ({ theme = 'colorful', prompt, setPrompt, onGenerate }) => {
  const palette = theme === 'cartoonic'
    ? {
        ring: 'focus:ring-sky-200/80',
        border: 'border-sky-200',
        btn: 'from-sky-500 via-emerald-400 to-teal-400',
        chipA: 'bg-sky-100 text-sky-700',
        chipB: 'bg-emerald-100 text-emerald-700',
        chipC: 'bg-cyan-100 text-cyan-700',
      }
    : {
        ring: 'focus:ring-pink-200/70',
        border: 'border-amber-200',
        btn: 'from-fuchsia-500 via-orange-400 to-yellow-400',
        chipA: 'bg-pink-100 text-pink-700',
        chipB: 'bg-amber-100 text-amber-700',
        chipC: 'bg-sky-100 text-sky-700',
      };

  return (
    <section className="relative w-full max-w-5xl mx-auto -mt-16 sm:-mt-24 z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-6 border border-white/70"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2 text-sky-900">
            <span className={`${chipBase} ${palette.chipA}`}><Sparkles className="w-4 h-4" /> Creative</span>
            <span className={`${chipBase} ${palette.chipB}`}><Wand2 className="w-4 h-4" /> AI-Powered</span>
            <span className={`${chipBase} ${palette.chipC}`}>Kid-Friendly</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={theme === 'cartoonic' ? 'e.g., A bouncy bunny explorer finds a giggly treasure' : 'e.g., A brave orange robot helps kids build a rainbow city'}
              className={`flex-1 rounded-2xl border ${palette.border} px-4 py-3 focus:outline-none focus:ring-4 ${palette.ring}`}
            />
            <button
              onClick={onGenerate}
              className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${palette.btn} text-white px-5 py-3 whitespace-nowrap shadow-lg hover:brightness-110`}
              aria-label="Generate flipbook from prompt"
            >
              <Sparkles className="w-5 h-5" />
              Generate Story
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button className="flex items-center gap-2 rounded-2xl border border-pink-200 px-4 py-3 bg-white/70 hover:bg-white">
              <ImageIcon className="w-5 h-5 text-pink-600" />
              Upload inspiration image
            </button>
            <button className="flex items-center gap-2 rounded-2xl border border-amber-200 px-4 py-3 bg-white/70 hover:bg-white">
              <Settings className="w-5 h-5 text-amber-600" />
              Style: Storybook 3D
            </button>
            <button className="flex items-center gap-2 rounded-2xl border border-sky-200 px-4 py-3 bg-white/70 hover:bg-white">
              <Settings className="w-5 h-5 text-sky-600" />
              6 pages • Playful tone
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PromptPanel;
