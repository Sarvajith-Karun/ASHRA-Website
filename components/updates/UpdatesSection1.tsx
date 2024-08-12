"use client";

import React from 'react';
import { updates } from '@/data';
import { motion } from 'framer-motion';

const UpdatesSection1 = () => {
  return (
    <section className="bg-white py-16 pt-20">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-black">Updates</h2>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              className="bg-yellow-100 border border-yellow-400 p-6 rounded-lg shadow-lg flex flex-col items-center"
              style={{ width: '100%' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-40 mb-4">
                <img
                  src={update.image}
                  alt={update.description}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">{update.date}</h3>
                <p className="text-gray-700">{update.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UpdatesSection1;