import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', comment: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <>
      <Head>
        <title>Contact Us - SAIF Service Resources Limited</title>
        <meta name="description" content="Get in touch with SAIF Service Resources Limited. Contact our offices in Dhaka and Chittagong for inquiries and support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Page Title */}
          <section className="bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
              <p className="mt-4 text-xl text-gray-300">Get in touch with our team</p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Office Locations */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
                  
                  {/* Dhaka Office */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">DHAKA OFFICE</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="font-medium w-24">Address:</span>
                        <span className="text-gray-600">
                          BTA Tower (10th Floor)<br />
                          29 Kemal Ataturk Avenue<br />
                          Banani C/A, Dhaka-1213, Bangladesh
                        </span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Tel:</span>
                        <span className="text-gray-600">+88 02 2222 75545</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Fax:</span>
                        <span className="text-gray-600">+88 02 2222 75544</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">E-Mail:</span>
                        <span className="text-gray-600">info.resources@aamra.com.bd</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Hot Line:</span>
                        <span className="text-gray-600">096 7822 6727</span>
                      </div>
                    </div>
                  </div>

                  {/* Chittagong Office */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">CHITTAGONG OFFICE</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="font-medium w-24">Address:</span>
                        <span className="text-gray-600">
                          SFA Tower (3rd floor)<br />
                          132, Panchlaish Chittagong, Bangladesh
                        </span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Tel:</span>
                        <span className="text-gray-600">+88-031-653314, 654521, 654664, 2551558</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Fax:</span>
                        <span className="text-gray-600">+88-031-653314</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">E-Mail:</span>
                        <span className="text-gray-600">info.resources@aamra.com.bd</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch With Us!</h2>
                  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">Comment</label>
                      <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section (Placeholder) */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">
                  {/* In a real implementation, you would integrate Google Maps or another map service here */}
                  Map Component Placeholder - Google Maps Integration
                </p>
              </div>
              <p className="text-center mt-4 text-gray-600">
                For directions or assistance finding our location, please contact our office.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}