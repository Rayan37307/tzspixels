
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Capabilities</h2>
          <h3 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">Expertise That Scales.</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            We don't sell tech. We sell results. Our services are designed to eliminate manual toil and maximize digital conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group glass-card p-10 rounded-[32px] flex flex-col h-full hover:bg-white/[0.04]">
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="font-heading text-2xl font-bold mb-6 tracking-tight">{service.title}</h4>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] font-bold text-red-500/80 uppercase tracking-widest mb-2">The Pain</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{service.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">The Cure</p>
                  <p className="text-sm text-gray-300 leading-relaxed font-semibold">{service.solution}</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-2">Impact</p>
                <p className="text-sm font-bold text-white italic">"{service.result}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
