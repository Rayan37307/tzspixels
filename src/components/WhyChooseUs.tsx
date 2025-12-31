
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#111111] rounded-[60px] p-10 md:p-24 relative border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Why Founders <br /> Trust TZS Pixels.</h2>
              <div className="space-y-12">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <div key={idx} className="flex gap-8">
                    <div className="flex-shrink-0 p-4 bg-white/5 rounded-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-10 md:p-14 rounded-[40px] border border-white/10 self-center shadow-2xl">
              <h4 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tight">
                <CheckCircle2 className="text-blue-500 w-6 h-6" />
                The System Standard
              </h4>
              <ul className="space-y-6">
                {[
                  "No generic templates or low-code limitations",
                  "Built for extreme mobile speed & SEO",
                  "Automated CRM sync for every interaction",
                  "Transparent ROI dashboards for every client",
                  "A fractional CTO team in your pocket"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm md:text-base text-gray-300 font-medium">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    {point}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-12 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all active:scale-95 shadow-xl">
                Download Our Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
