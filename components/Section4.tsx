import React from 'react';

const Section4 = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-5xl font-extrabold text-black mb-6">
          Join Us in Spreading Hope
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your generosity can make a difference. Support our mission to provide essential resources and opportunities to those in need.
        </p>
        <a
          href="mailto:ashracorporations@gmail.com"
          className="bg-[#DAA520] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-black hover:text-[#DAA520] transition duration-300"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default Section4;