export default function Features() {
    const features = [
        {
            title: "Internet",
            description: "Fast % reliable connection with speeds up to 2000 Mbps",
            price: "from $30/mo",
            benefits: ["Wifi equipment included", "No term contract", "professional installations"]
        },
        {
            title: "Mobile",
            description: "By the gig or unlimited data on the most reliable 5G network",
            price: "from $15/mo",
            benefits: ["5G included", "No line activation fees", "Switch in munites"]
        },
        {
            title: "TV + internet",
            description: "The best live TV, streaming, and internet in one package",
            price: "from $80/mo",
            benefits: ["X1 4K DVR included", "Peacock Premium included", "Voice remote"]
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Choose your Xfinity services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-8 border rounded-lg hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <p className="text-xfinity-blue font-semibold text-2xl mb-6">{feature.price}</p>
                            <ul className="text-left mb-6 space-y-2">
                                {feature.benefits.map((benefits, i) => (
                                    <li key={i} className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {benefits}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full px-6 py-3 border-2 border-xfinity-blue text-xfinity-blue rounded-full hover:bg-xfinity-blue hover:text-white transition-colors font-semibold">
                            Learn More
                            </button>           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}