
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white mb-10 uppercase backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          Systems for high-growth founders
        </div>
        
        <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05] text-white">
          We Build High-Performance <br className="hidden md:block" />
          <span className="text-gradient">Websites & AI Systems</span> <br className="hidden md:block" />
          That Scale Your Business.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-medium">
          Tzs Pixels engineers the technical backbone of modern brands. From ultra-fast Next.js hubs to autonomous AI workflows that run your business 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:bg-gray-200 active:scale-95 shadow-2xl shadow-white/10">
            🚀 Get a Free Strategy Call
          </a>
          <a href="#portfolio" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm uppercase tracking-widest transition-all backdrop-blur-sm active:scale-95">
            📂 View Our Work
          </a>
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
           <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">Engineered with modern tech</p>
           <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:opacity-80 transition-opacity duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" className="h-6 md:h-8 invert" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-6 md:h-8" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="h-6 md:h-8" />
             <div className="text-xl md:text-2xl font-bold text-white tracking-tighter italic">N8N.IO</div>
             <div className="text-xl md:text-2xl font-bold text-white tracking-tighter italic">SUPABASE</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
