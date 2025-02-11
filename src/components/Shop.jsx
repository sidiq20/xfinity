import React from 'react';

export default function Shop() {
  const products = [
    {
      category: "Internet Plans",
      items: [
        {
          name: "Connect",
          speed: "75 Mbps",
          price: "30.00",
          features: ["Good for 1-2 devices", "Video streaming", "Email & browsing"]
        },
        {
          name: "Fast",
          speed: "400 Mbps",
          price: "55.00",
          features: ["Good for 5-7 devices", "HD video streaming", "Gaming"]
        },
        {
          name: "Superfast",
          speed: "800 Mbps",
          price: "65.00",
          features: ["Good for 8-11 devices", "HD/4K video streaming", "Pro gaming"]
        },
        {
          name: "Gigabit",
          speed: "1200 Mbps",
          price: "75.00",
          features: ["Good for 12+ devices", "4K/8K video streaming", "Ultimate gaming"]
        }
      ]
    },
    {
      category: "Mobile Plans",
      items: [
        {
          name: "By the Gig",
          data: "Shared Data",
          price: "15.00",
          features: ["$15/GB of shared data", "Unlimited talk & text", "5G included"]
        },
        {
          name: "Unlimited",
          data: "Unlimited",
          price: "45.00",
          features: ["Unlimited data", "Unlimited talk & text", "5G included"]
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {products.map((category, index) => (
          <div key={index} className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{category.category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.name}</h3>
                  {item.speed && (
                    <p className="text-xl sm:text-2xl text-xfinity-blue font-bold mb-2">
                      {item.speed}
                    </p>
                  )}
                  {item.data && (
                    <p className="text-xl sm:text-2xl text-xfinity-blue font-bold mb-2">
                      {item.data}
                    </p>
                  )}
                  <p className="text-2xl sm:text-3xl font-bold mb-4">
                    ${item.price}
                    <span className="text-xs sm:text-sm text-gray-600">/mo</span>
                  </p>
                  <ul className="mb-6 space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-600">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-xfinity-blue text-white rounded-full py-2 px-4 hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}