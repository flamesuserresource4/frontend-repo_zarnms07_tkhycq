import React from 'react';
import { Rocket } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="bg-gradient-to-t from-[#F6E6E0] to-white py-12 mt-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3b3561]">Ready to create your first TinyTale?</h2>
        <p className="mt-2 text-[#4f4a72]">It takes less than a minute to go from idea to flipbook preview.</p>
        <div className="mt-6 inline-flex rounded-full bg-[#3b3561] text-white px-6 py-3 shadow-lg hover:shadow-xl">
          <Rocket className="w-5 h-5 mr-2" /> Start Free
        </div>
        <p className="mt-6 text-xs text-[#4f4a72]">Made with love for parents, teachers, and tiny creators ✨</p>
      </div>
    </footer>
  );
};

export default FooterCTA;
