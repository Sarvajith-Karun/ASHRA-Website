"use client"

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

export function AboutSection1() {
  return (
    <section className='pt-16'>
      <section className="w-full max-w-7xl mx-auto py-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 'some' }}
        >
          Our Story
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 'some' }}
        >
          ASHRA is a female-led youth non-profit organization founded by Shriya, Anshi, and Sadhna on March 15th, 2024. What began as an idea on a living room couch has blossomed into a remarkable organization making a large impact. ASHRA merges the founders' love and passion for dance with a drive for societal change, channeling their efforts to collect donations and raise awareness for their motherland. As first-generation Americans born to Indian immigrants, our founders deeply understand the gaps within education and cultural awareness. ASHRA is dedicated to bridging these gaps together to foster a more inclusive world. Join us on this journey and be the change you wish to see in the world. BE THE HOPE!
        </motion.p>

        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {["/StandardImage.png", "/StandardImage.png", "/StandardImage.png"].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <motion.img
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-[400px] h-[400px] object-cover mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true, amount: 'some' }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </section>
    </section>
  );
}