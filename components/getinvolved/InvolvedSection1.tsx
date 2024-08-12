import React from 'react';
import { founders } from '@/data'; // Adjust the path according to your file structure

const InvolvedSection1: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-16">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
                <img
                  src={founder.image}
                  alt={`${founder.name}'s Profile`}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">{founder.name}</h3>
              <p className="text-lg text-black">
                <a href={`mailto:${founder.email}`} className="hover:text-[#DAA520]">
                  {founder.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvolvedSection1;