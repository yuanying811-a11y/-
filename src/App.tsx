import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

export default function App() {
  return (
    <main 
      className="bg-[#050505] text-white selection:bg-[#93C5FD]/30 scroll-smooth relative min-h-screen"
      style={{ 
        backgroundImage: 'url(/input_file_0.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <HeroSection />
      <div className="relative z-10">
        <AboutSection />
        <div id="portfolio">
          <ServicesSection />
        </div>
        
        {/* Small credit footer */}
        <footer className="py-20 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/30 text-xs tracking-[0.4em] uppercase">
              © 2026 Asme Studio · All Rights Reserved
            </div>
            <div className="text-white/20 text-[10px] tracking-[0.6em] uppercase">
              Curiosity Driven Innovation
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
