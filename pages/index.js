import Head from 'next/head';
import Header from '../components/Header';
import BannerCarousel from '../components/BannerCarousel';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PartnersCarousel from '../components/PartnersCarousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>SAIF Service Resources Limited - Professional Industrial Services</title>
        <meta name="description" content="Leading provider of comprehensive industrial services and solutions across textile, pharmaceutical, and agricultural technology sectors." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Banner Carousel */}
          <BannerCarousel />

          {/* About Section */}
          <AboutSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Partners Carousel */}
          <PartnersCarousel />

          {/* Call to Action Section */}
          <section className="py-16 bg-red-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and discover how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Get Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
