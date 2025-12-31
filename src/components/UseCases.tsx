
import React from 'react';
import { USE_CASES } from '../constants';

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4">Real Solutions</h2>
            <h3 className="text-4xl font-extrabold">Stop Doing Things Manually.</h3>
          </div>
          <p className="text-gray-400 max-w-sm">
            Here is how we help modern businesses gain back their time and maximize every lead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USE_CASES.map((useCase, idx) => (
            <div key={idx} className="flex items-start gap-6 p-8 bg-[#171717] rounded-3xl border border-white/5 hover:translate-y-[-4px] transition-transform">
              <div className="mt-1 p-4 bg-purple-600/10 rounded-2xl text-purple-500">
                {useCase.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">{useCase.title}</h4>
                <p className="text-gray-400 leading-relaxed italic text-sm md:text-base">
                  "{useCase.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
