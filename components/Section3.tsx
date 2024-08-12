import React from 'react';
import { activities } from '@/data';

const Section3: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-16">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full bg-yellow-300 flex items-center justify-center">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">{activity.title}</h3>
              <p className="text-lg text-black">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;