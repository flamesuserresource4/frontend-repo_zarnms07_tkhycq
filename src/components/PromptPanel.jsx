import React from 'react';
import { Sparkles, Image as ImageIcon, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const PromptPanel = ({ prompt, setPrompt, onGenerate }) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto -mt-16 sm:-mt-24 z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 border border-white/60"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#3b3561]">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Describe your TinyTale</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A curious panda explores a candy forest"
              className="flex-1 rounded-xl border border-[#E3D0F9] px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#C2F0F7]"
            />
            <button
              onClick={onGenerate}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3b3561] text-white px-5 py-3 whitespace-nowrap"
              aria-label="Generate flipbook from prompt"
            >
              <Sparkles className="w-5 h-5" />
              Generate Story
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-[#E3D0F9] px-4 py-3 bg-white/60 hover:bg-white">
              <ImageIcon className="w-5 h-5 text-[#3b3561]" />
              Upload inspiration image
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-[#E3D0F9] px-4 py-3 bg-white/60 hover:bg-white">
              <Settings className="w-5 h-5 text-[#3b3561]" />
              Style: Watercolor
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-[#E3D0F9] px-4 py-3 bg-white/60 hover:bg-white">
              <Settings className="w-5 h-5 text-[#3b3561]" />
              5 pages • Friendly tone
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PromptPanel;
