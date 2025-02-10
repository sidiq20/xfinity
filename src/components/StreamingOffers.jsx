import React from 'react';

export default function StreamingOffers() {
  const streamingServices = [
    {
      name: "Netflix",
      description: "Included for 12 months",
      image: "https://logo.clearbit.com/netflix.com"
    },
    {
      name: "Peacock Premium",
      description: "Included at no extra cost",
      image: "https://logo.clearbit.com/peacocktv.com"
    },
    {
      name: "Apple TV+",
      description: "3 months included",
      image: "https://logo.clearbit.com/apple.com"
    },
    {
      name: "Amazon Prime",
      description: "6 months included",
      image: "https://logo.clearbit.com/amazon.com"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Offers You'll Love</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {streamingServices.map((service, index) => (
            <div key={index} className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-2xl font-bold mb-4">Plus 125+ Channels</p>
          <button className="bg-xfinity-blue text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            View All Channels
          </button>
        </div>
      </div>
    </div>
  );
}