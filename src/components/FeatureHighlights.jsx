import React from 'react';
import { BookOpen, Headphones, FileDown, Palette } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Flipbook Magic',
    desc: 'AI turns simple ideas into page-by-page story beats with colorful characters.',
    color: 'from-fuchsia-200 to-pink-200',
  },
  {
    icon: Palette,
    title: 'Vibrant Styles',
    desc: 'Pick comic, clay, watercolor, or shiny 3D — perfect for kids!',
    color: 'from-amber-200 to-yellow-200',
  },
  {
    icon: Headphones,
    title: 'Voice Narration',
    desc: 'Friendly voices read each page aloud for fun and learning.',
    color: 'from-sky-200 to-cyan-200',
  },
  {
    icon: FileDown,
    title: 'Export & Share',
    desc: 'Save as PDF/EPUB/MP4 to print, share, or watch together.',
    color: 'from-emerald-200 to-teal-200',
  },
];

const FeatureHighlights = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 text-center mb-8">Why kids love TinyTales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className={`rounded-3xl bg-gradient-to-br ${color} p-1 shadow-md`}>
            <div className="rounded-3xl bg-white p-6 h-full">
              <div className="w-11 h-11 rounded-2xl bg-white/70 border border-white/60 shadow flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-sky-700" />
              </div>
              <h3 className="text-lg font-semibold text-sky-900">{title}</h3>
              <p className="text-sm text-sky-800/80 mt-2">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
