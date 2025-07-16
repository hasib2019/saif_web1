import { useState, useEffect } from 'react';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  const partners = [
    {
      id: 1,
      name: "LECTRA",
      logo: "/lectra-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Leading technology solutions provider"
    },
    {
      id: 2,
      name: "Mathis",
      logo: "/mathis-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Industrial equipment manufacturer"
    },
    {
      id: 3,
      name: "Tiger Wing",
      logo: "/tiger-wing-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Automotive solutions provider"
    },
    {
      id: 4,
      name: "OSHIMA",
      logo: "/oshima-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Precision machinery manufacturer"
    },
    {
      id: 5,
      name: "PantaRei",
      logo: "/pantarei-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Technology innovation company"
    },
    {
      id: 6,
      name: "SANTACRUZ",
      logo: "/santacruz-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Manufacturing solutions provider"
    },
    {
      id: 7,
      name: "TechCorp",
      logo: "/techcorp-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Technology solutions company"
    },
    {
      id: 8,
      name: "InnovateLab",
      logo: "/innovatelab-logo.png", // Replace with actual logo
      logoSize: { width: 120, height: 60 },
      description: "Research and development partner"
    }
  ];

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(2);
      } else if (width < 768) {
        setItemsPerView(3);
      } else if (width < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, partners.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, partners.length - itemsPerView);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, partners.length - itemsPerView);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted partnerships that drive innovation and excellence
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(partners.length / itemsPerView) * 100}%`
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / partners.length}%` }}
                >
                  <div className="bg-gray-50 rounded-lg p-6 h-32 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 group">
                    {/* Partner Logo Placeholder */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-200">
                        <span className="text-2xl text-gray-600">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {partner.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Logo: {partner.logoSize.width}x{partner.logoSize.height}px
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-gray-900 p-2 rounded-full transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-gray-900 p-2 rounded-full transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.max(1, partners.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Partner Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
            <p className="text-gray-600">Global Partners</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
            <p className="text-gray-600">Years of Partnership</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
            <p className="text-gray-600">Joint Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
