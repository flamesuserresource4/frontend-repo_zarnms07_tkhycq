import React from 'react';
import { BookOpen, Headphones, FileDown, Palette } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Flipbook Magic',
    desc: 'AI turns simple ideas into page-by-page story beats with consistent characters.',
  },
  {
    icon: Palette,
    title: 'Playful Art Styles',
    desc: 'Choose watercolor, cartoon, pencil, or 3D with gentle pastel palettes.',
  },
  {
    icon: Headphones,
    title: 'Voice Narration',
    desc: 'Child-friendly TTS and tap-to-hear buttons for every page.',
  },
  {
    icon: FileDown,
    title: 'Export & Share',
    desc: 'PDF, EPUB, or MP4 exports saved to the cloud and easy to share.',
  },
];

const FeatureHighlights = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl bg-white border border-[#E3D0F9] p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#C2F0F7] flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-[#3b3561]" />
            </div>
            <h3 className="text-lg font-semibold text-[#3b3561]">{title}</h3>
            <p className="text-sm text-[#4f4a72] mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
