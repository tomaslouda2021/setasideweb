'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, AlertCircle } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const stats = [
    {
      icon: <TrendingDown className="text-red-500" size={32} />,
      percentage: '64%',
      description: 'of Americans live paycheck to paycheck'
    },
    {
      icon: <AlertCircle className="text-orange-500" size={32} />,
      percentage: '47%',
      description: 'regularly miss at least one bill payment'
    },
    {
      icon: <Clock className="text-yellow-500" size={32} />,
      percentage: 'Most',
      description: 'late fees aren\'t about money — they\'re about timing'
    }
  ];

  return (
    <section className="py-20 bg-finn-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Most People Don't Have a Spending Problem —{' '}
            <span className="bg-finn-gradient bg-clip-text text-transparent">They Have a Timing Problem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.percentage}</div>
              <p className="text-finn-neutral">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-finn-neutral max-w-3xl mx-auto">
            The solution isn't better budgeting or more willpower. It's having Finn handle it automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;