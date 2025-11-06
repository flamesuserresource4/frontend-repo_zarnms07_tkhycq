import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroCover = ({ onGetStarted }) => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] rounded-b-3xl overflow-hidden bg-gradient-to-b from-[#C2F0F7] via-[#E3D0F9] to-[#F6E6E0]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability; allow interaction with 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#3b3561]" style={{ fontFamily: 'Poppins, Nunito, var(--font-sans, ui-sans-serif)' }}>
            TinyTales Flipbook Creator
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#4f4a72]">
            Turn a little idea into a playful, personalized flipbook with AI-crafted stories and illustrations.
          </p>
          <motion.button
            onClick={onGetStarted}
            aria-label="Get started and generate your story"
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3b3561] text-white px-6 py-3 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#E3D0F9]"
          >
            Get Started
            <span aria-hidden>✨</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCover;
