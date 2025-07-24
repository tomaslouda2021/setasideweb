'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Settings, Zap, SmilePlus } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Link2 size={32} />,
      title: 'Connect Your Bank',
      description: 'Securely link via Plaid in 30 seconds',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Settings size={32} />,
      title: 'Set Your Rules',
      description: 'Choose what % goes to bills (we suggest smart defaults)',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Zap size={32} />,
      title: 'Watch It Work',
      description: 'Automatic splits and bill payments, every paycheck',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <SmilePlus size={32} />,
      title: 'Peace of Mind',
      description: 'Spend what\'s left without guilt or overdraft fear',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Four simple steps to financial peace of mind
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-emerald-200 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-lg text-slate-900">
                      {index + 1}
                    </div>
                    
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;