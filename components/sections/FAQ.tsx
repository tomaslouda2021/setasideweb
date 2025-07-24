'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What happens if I need emergency access to bill funds?',
      answer: 'We understand emergencies happen. SetAside provides a "break glass" emergency access feature that allows you to access your protected funds immediately. All emergency accesses are logged for your records, helping you track and minimize these occurrences over time.'
    },
    {
      question: 'Is my banking information secure?',
      answer: 'Absolutely. We use bank-grade AES-256 encryption and partner with Plaid for secure, read-only bank connections. We\'re SOC 2 Type II certified and PCI compliant. Your money never touches our accounts - it stays safely in your FDIC-insured bank.'
    },
    {
      question: 'Can I change my allocation percentages?',
      answer: 'Yes, you can adjust your allocation rules at any time. Changes take effect with your next paycheck. We recommend keeping changes minimal to maintain the behavioral benefits of automation, but you\'re always in control.'
    },
    {
      question: 'What bills can SetAside pay automatically?',
      answer: 'SetAside can handle most recurring bills including rent, utilities, insurance, loans, and subscriptions. We support over 15,000 billers through our payment network. You can also set up custom payees for any biller we don\'t yet support.'
    },
    {
      question: 'How much does SetAside cost?',
      answer: 'SetAside offers a simple, transparent pricing model at $9.99/month. There are no hidden fees, no percentage-based charges, and you can cancel anytime. We believe in earning your trust through value, not locking you in.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your SetAside subscription at any time with no penalties or fees. If you cancel, your protected funds are immediately released back to your control, and all automatic payments stop. We\'ll even help you transition if needed.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about SetAside
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="text-blue-600" size={24} />
                    ) : (
                      <Plus className="text-blue-600" size={24} />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;