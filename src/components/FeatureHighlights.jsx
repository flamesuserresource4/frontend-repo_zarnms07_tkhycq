import React from 'react';
import { BookOpen, Headphones, FileDown, Palette } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    key: 'flipbook',
    colorful: {
      title: 'Flipbook Magic',
      desc: 'AI turns simple ideas into page-by-page story beats with colorful characters.',
      color: 'from-fuchsia-200 to-pink-200',
    },
    cartoonic: {
      title: 'Cartoon Beats',
      desc: 'Charming panels, chunky shapes, and sticker-like pages kids adore.',
      color: 'from-sky-200 to-emerald-200',
    }
  },
  {
    icon: Palette,
    key: 'styles',
    colorful: {
      title: 'Vibrant Styles',
      desc: 'Pick comic, clay, watercolor, or shiny 3D — perfect for kids!',
      color: 'from-amber-200 to-yellow-200',
    },
    cartoonic: {
      title: 'Doodle Styles',
      desc: 'Bubble outlines, kawaii eyes, and soft shadows for cartoon charm.',
      color: 'from-cyan-200 to-teal-200',
    }
  },
  {
    icon: Headphones,
    key: 'voice',
    colorful: {
      title: 'Voice Narration',
      desc: 'Friendly voices read each page aloud for fun and learning.',
      color: 'from-sky-200 to-cyan-200',
    },
    cartoonic: {
      title: 'Storytime Voices',
      desc: 'Cozy narrators bring characters to life with gentle sound cues.',
      color: 'from-indigo-200 to-sky-200',
    }
  },
  {
    icon: FileDown,
    key: 'export',
    colorful: {
      title: 'Export & Share',
      desc: 'Save as PDF/EPUB/MP4 to print, share, or watch together.',
      color: 'from-emerald-200 to-teal-200',
    },
    cartoonic: {
      title: 'Pack & Share',
      desc: 'Make a cartoon reel or booklet and share with friends.',
      color: 'from-lime-200 to-emerald-200',
    }
  },
];

const FeatureHighlights = ({ theme = 'colorful' }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 text-center mb-8">
        {theme === 'cartoonic' ? 'Cartoon fun, everywhere' : 'Why kids love TinyTales'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, colorful, cartoonic, key }) => {
          const card = theme === 'cartoonic' ? cartoonic : colorful;
          return (
            <div key={key} className={`rounded-3xl bg-gradient-to-br ${card.color} p-1 shadow-md`}>
              <div className="rounded-3xl bg-white p-6 h-full">
                <div className="w-11 h-11 rounded-2xl bg-white/70 border border-white/60 shadow flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sky-700" />
                </div>
                <h3 className="text-lg font-semibold text-sky-900">{card.title}</h3>
                <p className="text-sm text-sky-800/80 mt-2">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureHighlights;
