import React from 'react';
import { FiWifi, FiShield, FiSmile, FiAward } from 'react-icons/fi';

export default function CompanyHighlights() {
    const highlights = [
        {
            icon: <FiWifi className='w-12 h-12 ' />,
        title: "fast % Reliable",
        desrciption: "Up to 2000 mbps speed and 99.9% reliability with no data caps. nationwide coverage."
        },
        {
            icon: <FiShield className="w-12 h-12" />,
            title: "Advanced Security",
            description: "Protected by xFi Advanced Security our advanced security"
        },
        {
            icon: <FiSmile className="w-12 h-12" />,
            title: "24/7 Customer Support",
            description: "Get 24/7 customer support when you need it with a smile."
        },
        {
            icon: <FiAward className="w-12 h-12" />,
            title: "Award Winning",
            description: "Award winning internet with 100% customer satisfaction. Best award winning internet."
        }
    ];

    return (
        <div className='bg-gradient-to-b from-gray-100 to-white py-20'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-4xl font-bold text-center mb-12'>Why Choose Xfinity?</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {highlights.map((item, index) => (
                        <div key={index} className='text-center'>
                            <div className='text-xfinity-blue mb-6 flex justify-center'>{item.icon}
                            </div>
                            <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
                            <p className='text-gray-600'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}