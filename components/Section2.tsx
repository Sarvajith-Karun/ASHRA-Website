"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MissionSection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 'some' }}
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              About <span className="text-yellow-500">ASHRA</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to provide essential support and resources to orphanages and impoverished families across South Asia,
              ensuring that vulnerable children receive the care and opportunities they deserve. We are dedicated to raising awareness
              about the challenges and corrupt practices affecting low-income infrastructure.
            </p>
            <ul className="list-disc list-inside text-left text-gray-700 mb-8">
              <li className="mb-2">Support orphanages and impoverished families with essential resources.</li>
              <li className="mb-2">Raise awareness about challenges and corrupt practices affecting low-income infrastructure.</li>
              <li className="mb-2">Foster cultural and social awareness, celebrating South Asian heritage.</li>
            </ul>
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end hidden lg:block">
          <div className="relative w-full h-64 lg:h-80">
            <Image
              src="/FamilyImg.jpg"
              alt="Mission Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;