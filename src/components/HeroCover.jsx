import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const themeCopy = {
  colorful: {
    badgeText: 'Play • Learn • Imagine',
    title: 'TinyTales Flipbook Creator',
    subtitle: 'Make magical, kid-friendly stories with bright art and lively pages — powered by AI.',
    cta: "Let's Create!",
    overlay:
      'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.85),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.6),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.55),rgba(255,255,255,0.85))]'
  },
  cartoonic: {
    badgeText: 'Cartoon Club • Cozy • Fun',
    title: 'TinyTales Cartoon Studio',
    subtitle: 'Bouncey shapes, sticker vibes, and friendly 3D pals for giggle-worthy stories.',
    cta: 'Start Doodling',
    overlay:
      'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.9),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.65),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.9))]'
  }
};

const HeroCover = ({ theme = 'colorful', onThemeToggle, onGetStarted }) => {
  const t = themeCopy[theme];

  return (
    <section className="relative w-full h-[66vh] sm:h-[78vh] rounded-b-[2rem] overflow-hidden bg-gradient-to-br from-pink-200 via-amber-100 to-sky-200">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft overlay for readability (doesn't block interaction) */}
      <div className={t.overlay} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/60 shadow-sm">
            <Star className="w-4 h-4 text-yellow-500" />
            <p className="text-sm font-medium text-sky-700">{t.badgeText}</p>
          </div>

          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-sky-900"
            style={{ fontFamily: 'Manrope, Inter, var(--font-sans, ui-sans-serif)' }}
          >
            {t.title}
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-sky-800/80">
            {t.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <motion.button
              onClick={onGetStarted}
              aria-label="Get started and create your first TinyTale"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-orange-400 to-yellow-400 text-white px-7 py-3 shadow-xl hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-fuchsia-300"
            >
              {t.cta} <span aria-hidden>🎈</span>
            </motion.button>

            <motion.div whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-2 rounded-full border border-white/60 shadow">
              <Sparkles className="w-4 h-4 text-fuchsia-600" />
              <span className="text-sm text-sky-800">Theme:</span>
              <button
                onClick={() => onThemeToggle('colorful')}
                className={`text-sm font-semibold px-2 py-1 rounded-full ${theme === 'colorful' ? 'bg-gradient-to-r from-pink-500 to-amber-400 text-white' : 'text-sky-700 hover:bg-sky-100'}`}
              >
                Colorful
              </button>
              <button
                onClick={() => onThemeToggle('cartoonic')}
                className={`text-sm font-semibold px-2 py-1 rounded-full ${theme === 'cartoonic' ? 'bg-gradient-to-r from-sky-500 to-emerald-400 text-white' : 'text-sky-700 hover:bg-sky-100'}`}
              >
                Cartoonic
              </button>
            </motion.div>
          </div>

          <p className="mt-3 text-sm text-sky-800/70">No sign-up needed to try • Safe for classrooms and families</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCover;
