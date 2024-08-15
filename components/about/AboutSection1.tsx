"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

export function AboutSection1() {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto py-12 flex flex-col md:flex-row items-center px-4 md:px-8">
        <motion.div
          className="md:w-1/2 md:pr-12 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ASHRA is a female-led youth non-profit organization founded by Shriya, Anshi, and Sadhna on March 15th, 2024. What began as an idea on a living room couch has blossomed into a remarkable organization making a large impact. ASHRA merges the founders' love and passion for dance with a drive for societal change, channeling their efforts to collect donations and raise awareness for their motherland. As first-generation Americans born to Indian immigrants, our founders deeply understand the gaps within education and cultural awareness. ASHRA is dedicated to bridging these gaps together to foster a more inclusive world. Join us on this journey and be the change you wish to see in the world. BE THE HOPE!
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 'some' }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {["/StandardImage.png", "/StandardImage.png", "/StandardImage.png"].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <motion.img
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true, amount: 'some' }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}