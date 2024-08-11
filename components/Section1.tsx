import React from 'react';

const Section1 = () => {
  return (
    <section
      className="bg-cover bg-center h-[75vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/HeroBG.jpeg')" }}
    >
      <div className="text-center bg-white bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-6xl font-extrabold text-black mb-4">
          ASHRA: <span className="text-[#DAA520]">Be the Hope</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to ASHRA, where our mission is to provide essential support and resources to orphanages and impoverished families across South Asia.
        </p>
      </div>
    </section>
  );
};

export default Section1;