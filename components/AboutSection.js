const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About SAIF Service Resources Limited
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We stand as one of the leading service companies in the region, providing comprehensive solutions across multiple industry sectors. Our commitment to excellence and innovation has established us as a trusted partner for businesses worldwide.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Industry Leadership:</strong> Recognized as a pioneer in providing integrated service solutions across textile, pharmaceutical, and agricultural technology sectors.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Quality Excellence:</strong> Committed to delivering world-class services that meet international standards and exceed client expectations.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Innovation Focus:</strong> Continuously investing in cutting-edge technology and sustainable practices to drive industry advancement.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional service solutions that empower our clients to achieve their business objectives while contributing to sustainable industrial growth and technological advancement.
              </p>
            </div>
          </div>

          {/* Stats and Achievements */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                  <p className="text-gray-600 text-sm">Years of Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <p className="text-gray-600 text-sm">Global Partners</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <p className="text-gray-600 text-sm">Countries Served</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Press Release</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Latest News</h4>
                  <p className="text-sm text-gray-600">
                    SAIF Service Resources Limited announces expansion into new markets with strategic partnerships in Asia-Pacific region.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Published: March 2024</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                  <p className="text-sm text-gray-600">
                    Company receives excellence award for outstanding contribution to sustainable industrial practices.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Published: February 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@saifservices.com
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 Business Street, Industrial Zone
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong> www.saifservices.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
