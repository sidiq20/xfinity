import React from 'react';

export default function PromoOffers() {
  return (
    <div className="bg-gray-100 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">It Pays to Switch to Mobile</h2>
          <p className="text-lg sm:text-xl text-gray-600">Get amazing deals when you switch to Xfinity Mobile</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-sm sm:text-base mb-4">Limited Time Offer</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get up to $500 off</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">When you switch to Xfinity Mobile and bring your phone</p>
            <button className="bg-xfinity-blue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-sm sm:text-base mb-4">New Customer Offer</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Save $30/month</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">On your wireless bill when you add Xfinity Mobile to your Internet</p>
            <button className="bg-xfinity-blue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}