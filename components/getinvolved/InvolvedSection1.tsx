import React from 'react';

const InvolvedSection1 = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-16">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
              <img src="DefaultPfp.png" alt="Founder Image" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Shriya Yalamanchili</h3>
            <p className="text-lg text-black">
              <a href="mailto:shriya.chili@gmail.com" className="hover:text-[#DAA520]">
                shriya.chili@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
              <img src="DefaultPfp.png" alt="Founder Image" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Sadhna Patlola</h3>
            <p className="text-lg text-black">
              <a href="mailto:sadhna.patlola@gmail.com" className="hover:text-[#DAA520]">
                sadhna.patlola@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
              <img src="DefaultPfp.png" alt="Founder Image" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Anshi Peddaredivari</h3>
            <p className="text-lg text-black">
              <a href="mailto:anshi.pedda@gmail.com" className="hover:text-[#DAA520]">
                anshi.pedda@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default InvolvedSection1;