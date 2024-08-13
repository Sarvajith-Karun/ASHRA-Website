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
        viewport={{ once: true, amount: 'some' }}
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
        viewport={{ once: true, amount: 'some' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              className="relative bg-yellow-100 border border-yellow-400 p-6 rounded-lg shadow-lg overflow-hidden flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              style={{ width: '100%' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 'some' }}
            >
              <motion.div
                className="relative w-full h-40 mb-4"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={update.image}
                  alt={update.description}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </motion.div>
              <div className="flex-grow flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-yellow-600">
                  {update.date}
                </h3>
                <p className="text-gray-700 transition-opacity duration-300 ease-in-out hover:opacity-80">
                  {update.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UpdatesSection1;