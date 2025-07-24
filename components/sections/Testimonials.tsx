'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Teacher',
      content: 'I haven\'t missed a rent payment in 6 months. SetAside completely changed how I manage my finances.',
      rating: 5,
      initials: 'SM'
    },
    {
      name: 'Mike Chen',
      role: 'Software Engineer',
      content: 'Finally feel in control without budgeting spreadsheets. It\'s like having a financial assistant.',
      rating: 5,
      initials: 'MC'
    },
    {
      name: 'Jessica Rodriguez',
      role: 'Nurse',
      content: 'My credit score went up 50 points in 3 months. Best financial decision I\'ve ever made.',
      rating: 5,
      initials: 'JR'
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
            Join Thousands Who've Automated Their{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Financial Peace of Mind
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real stories from people who've transformed their financial lives with SetAside
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-50 rounded-2xl p-8 h-full flex flex-col">
                <Quote className="text-blue-200 mb-4" size={32} />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-slate-600">
            Join over <span className="font-bold text-slate-900">10,000+</span> professionals who trust SetAside
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;