"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Next-Generation AI?",
    answer:
      "Next-Generation AI leverages deep learning, quantum computing, and neural evolution to drive intelligent automation and enhanced decision-making across industries.",
  },
  {
    question: "How does AI enhance cybersecurity?",
    answer:
      "AI strengthens cybersecurity by detecting anomalies, mitigating potential threats in real time, and proactively preventing cyberattacks through advanced predictive analytics.",
  },
  {
    question: "Can AI evolve its own intelligence?",
    answer:
      "While AI can refine its processes through machine learning and adaptation, true self-awareness and independent cognitive evolution remain theoretical possibilities rather than practical realities.",
  },
  {
    question: "What are the key ethical considerations in AI?",
    answer:
      "Ethical AI development must address concerns such as algorithmic bias, data privacy, workforce impact, and the responsible use of autonomous decision-making technologies.",
  },
  {
    question: "How is AI revolutionizing automation?",
    answer:
      "AI-driven automation optimizes efficiency in industries such as finance, healthcare, and manufacturing, streamlining processes and reducing operational overhead while enhancing precision and scalability.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[150px]"></div>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-lg text-gray-400 mt-3">
          Explore insights into cutting-edge AI advancements and ethical considerations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            {/* Gradient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="flex justify-between items-center relative z-10">
              <h3 className="text-xl font-medium text-gray-200 group-hover:text-white transition-all">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="text-blue-400 group-hover:text-white transition-all" size={24} />
              ) : (
                <ChevronDown className="text-gray-400 group-hover:text-white transition-all" size={24} />
              )}
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-4 text-gray-300 text-lg leading-relaxed relative z-10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
