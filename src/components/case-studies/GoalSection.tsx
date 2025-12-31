import React from 'react';
import { Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface GoalSectionProps {
  title: string;
  description: string;
  goals: string[];
}

const GoalSection: React.FC<GoalSectionProps> = ({
  title,
  description,
  goals
}) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#000] to-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-600/20 p-3 rounded-lg flex-shrink-0">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-gray-200">{goal}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoalSection;