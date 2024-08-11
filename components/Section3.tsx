import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-16">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
              <img src="dance-event.jpg" alt="Dance Event" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Dance Events</h3>
            <p className="text-lg text-black">
              Use the passion for dance to build a community and collect donations. Join us in celebrating culture and raising funds to support our mission.
            </p>
          </div>


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
              <img src="cultural-classes.jpg" alt="Cultural Classes" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Cultural Classes</h3>
            <p className="text-lg text-black">
              Educate on South Asian cultures and diversify perspectives. Our classes enrich the community with knowledge about South Asia's rich heritage.
            </p>
          </div>


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
              <img src="volunteering-services.webp" alt="Volunteering Services" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Volunteering Services</h3>
            <p className="text-lg text-black">
              Volunteer and spread awareness with 100% of proceeds going to various causes. Join our outreach programs to bring hope to those in need.
            </p>
          </div>


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
              <img src="community.jpg" alt="Community" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Community</h3>
            <p className="text-lg text-black">
              Build resilience and spread hope, let us thrive together hand in hand. Together, we can create a better future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;