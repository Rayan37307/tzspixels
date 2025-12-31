import React from 'react';
import { motion } from 'framer-motion';

interface TakeawaysSectionProps {
  title: string;
  takeaways: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const TakeawaysSection: React.FC<TakeawaysSectionProps> = ({
  title,
  takeaways
}) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#000] to-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {takeaways.map((takeaway, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-600/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  {takeaway.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{takeaway.title}</h3>
              </div>
              <p className="text-gray-300">{takeaway.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TakeawaysSection;