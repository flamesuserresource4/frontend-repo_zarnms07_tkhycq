import React from 'react';
import { Rocket } from 'lucide-react';

const FooterCTA = ({ theme = 'colorful' }) => {
  const bg = theme === 'cartoonic'
    ? 'from-sky-100 via-teal-50 to-emerald-50'
    : 'from-sky-100 via-rose-50 to-amber-50';
  const btn = theme === 'cartoonic'
    ? 'from-sky-500 via-emerald-400 to-teal-400'
    : 'from-fuchsia-500 via-orange-400 to-yellow-400';

  return (
    <footer className={`bg-gradient-to-t ${bg} py-14 mt-10`}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-900">Ready to create your first TinyTale?</h2>
        <p className="mt-2 text-sky-800/80">Bright, friendly, and super fun — perfect for kids at home or in class.</p>
        <div className={`mt-6 inline-flex items-center rounded-full bg-gradient-to-r ${btn} text-white px-6 py-3 shadow-xl hover:brightness-110`}>
          <Rocket className="w-5 h-5 mr-2" /> Start Free
        </div>
        <p className="mt-6 text-xs text-sky-800/70">No ads. Family-first. Privacy-friendly.</p>
      </div>
    </footer>
  );
};

export default FooterCTA;
