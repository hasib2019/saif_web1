import { useState, useEffect } from 'react';
import Image from 'next/image';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Support Services",
      subtitle: "Professional Technical Support",
      description: "Expert technical support and maintenance services for all your industrial needs",
      image: "/banner1.jpg", // Replace with actual image
      imageSize: { width: 800, height: 400 }
    },
    {
      id: 2,
      title: "Quality Solutions",
      subtitle: "Innovative Engineering Services",
      description: "Comprehensive engineering solutions designed to meet your specific requirements",
      image: "/banner2.jpg", // Replace with actual image
      imageSize: { width: 800, height: 400 }
    },
    {
      id: 3,
      title: "Reliable Partnership",
      subtitle: "Trusted Service Provider",
      description: "Building long-term partnerships through reliable and efficient service delivery",
      image: "/banner3.jpg", // Replace with actual image
      imageSize: { width: 800, height: 400 }
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Replace this div with actual image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🖼️</span>
                  </div>
                  <p>Banner Image {slide.id}</p>
                  <p className="text-sm">Size: {slide.imageSize.width}x{slide.imageSize.height}px</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-red-400 mb-4">
                    {slide.subtitle}
                  </h3>
                  <p className="text-lg text-gray-300 mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-red-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
