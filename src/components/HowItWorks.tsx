
import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-blue-500 font-black tracking-[0.2em] uppercase text-xs mb-6">The TZS Pixels Framework</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-10 leading-none uppercase tracking-tighter">
              From Chaos <br /> To Command.
            </h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              We don't just build tools; we build the infrastructure of your future business. Our 4-step framework is designed to remove you from the day-to-day grind.
            </p>
            <div className="flex items-center gap-5 p-8 rounded-[32px] bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black text-xl">
                ROI
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                Our goal is <strong>Simple:</strong> We want to build systems that return their entire investment within the first 90 days.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex gap-8 p-8 rounded-3xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/10 group">
                <div className="text-4xl font-black text-gray-900 group-hover:text-blue-500/30 transition-colors shrink-0">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-xl font-extrabold mb-3 text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
