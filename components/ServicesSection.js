import { useState } from 'react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Embroidery",
      description: "High-quality embroidery services for textiles and garments with precision and attention to detail.",
      image: "/embroidery.jpg", // Replace with actual image
      imageSize: { width: 300, height: 200 },
      features: [
        "Custom embroidery designs",
        "High-quality thread materials",
        "Fast turnaround time",
        "Professional finishing"
      ]
    },
    {
      id: 2,
      title: "Textile",
      description: "Comprehensive textile manufacturing and processing services with state-of-the-art equipment.",
      image: "/textile.jpg", // Replace with actual image
      imageSize: { width: 300, height: 200 },
      features: [
        "Quality fabric production",
        "Advanced processing techniques",
        "Sustainable materials",
        "Custom specifications"
      ]
    },
    {
      id: 3,
      title: "Pharmaceutical",
      description: "Pharmaceutical manufacturing and quality control services meeting international standards.",
      image: "/pharmaceutical.jpg", // Replace with actual image
      imageSize: { width: 300, height: 200 },
      features: [
        "GMP compliance",
        "Quality assurance",
        "Research & development",
        "Regulatory support"
      ]
    },
    {
      id: 4,
      title: "Agri-tech",
      description: "Advanced agricultural technology solutions for modern farming and food production.",
      image: "/agritech.jpg", // Replace with actual image
      imageSize: { width: 300, height: 200 },
      features: [
        "Smart farming solutions",
        "Precision agriculture",
        "Sustainable practices",
        "Technology integration"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries with expertise and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
                selectedService === index ? 'ring-2 ring-red-500' : ''
              }`}
              onClick={() => setSelectedService(index)}
            >
              {/* Service Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">
                      {service.id === 1 ? '🧵' : service.id === 2 ? '🧶' : service.id === 3 ? '💊' : '🌱'}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{service.title} Image</p>
                  <p className="text-xs">Size: {service.imageSize.width}x{service.imageSize.height}px</p>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {selectedService !== null && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[selectedService].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {services[selectedService].description}
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {services[selectedService].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">
                      {services[selectedService].id === 1 ? '🧵' : services[selectedService].id === 2 ? '🧶' : services[selectedService].id === 3 ? '💊' : '🌱'}
                    </span>
                  </div>
                  <p className="font-medium">{services[selectedService].title} Detailed Image</p>
                  <p className="text-sm">Size: 600x400px</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
