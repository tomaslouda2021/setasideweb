'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, TrendingDown, Settings } from 'lucide-react';

const BehavioralScience: React.FC = () => {
  const principles = [
    {
      icon: <Lock size={32} />,
      title: 'Commitment Devices',
      description: 'Rules are intentionally hard to change. This friction protects you from impulsive financial decisions.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <TrendingDown size={32} />,
      title: 'Loss Aversion',
      description: 'Your bill money is safely locked away first. People work harder to avoid losses than to achieve gains.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Settings size={32} />,
      title: 'Smart Defaults',
      description: 'Automation with opt-outs, not opt-ins. Good financial behavior becomes the path of least resistance.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Built on Behavioral Science,{' '}
            <span className="text-blue-600">Not Willpower</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            SetAside uses proven psychological principles to make good financial habits automatic
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${principle.color} flex items-center justify-center text-white mb-4`}>
                  {principle.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {principle.title}
                </h3>
                
                <p className="text-slate-600">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehavioralScience;