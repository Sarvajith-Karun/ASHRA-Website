"use client"

import React from 'react';
import { motion } from 'framer-motion';

const MissionSection: React.FC = () => {
  return (
    <section className='bg-[#F5F5F5] py-16'>
      <motion.div
        className='max-w-4xl mx-auto text-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 'all' }}
      >
        <h2 className="text-5xl font-bold text-black mb-16">
          Our Mission
        </h2>
        <p className='text-lg text-gray-700'>
          Our mission is to provide essential support and resources to orphanages and impoverished families across South Asia,
          ensuring that vulnerable children receive the care and opportunities they deserve. We are dedicated to raising awareness
          about the challenges and corrupt practices affecting low-income infrastructure, advocating for transparency and accountability.
          Additionally, we aim to foster cultural and social awareness within our community, celebrating the rich heritage of South Asia and promoting mutual understanding and respect.
        </p>
      </motion.div>
    </section>
  );
};

export default MissionSection;