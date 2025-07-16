import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Recognitions() {
  // Sample employee recognition data
  const employees = [
    {
      id: 1,
      name: 'Nahidul Islam',
      position: 'Senior Executive',
      department: 'Central',
      company: 'aamra resources ltd',
      imageSrc: '/employee-placeholder.jpg' // Replace with actual image path
    },
    {
      id: 2,
      name: 'Kazi Hamiduzzaman',
      position: 'Manager',
      department: 'Administration, Central',
      company: 'aamra resources ltd',
      imageSrc: '/employee-placeholder.jpg'
    },
    {
      id: 3,
      name: 'Asma Akter Ruma',
      position: 'Senior Executive',
      department: 'Sales & Service, Textile',
      company: 'aamra resources ltd',
      imageSrc: '/employee-placeholder.jpg'
    },
    {
      id: 4,
      name: 'S.M. Saiduzzaman Dip',
      position: 'Manager',
      department: 'Service, Textile',
      company: 'aamra resources ltd',
      imageSrc: '/employee-placeholder.jpg'
    },
    {
      id: 5,
      name: 'Mohammad Emdad Ullah',
      position: 'Deputy General Manager',
      department: 'Sales & Service, Textile',
      company: 'aamra resources limited',
      imageSrc: '/employee-placeholder.jpg'
    },
    {
      id: 6,
      name: 'Md. Zahidul Iqbal',
      position: 'Manager',
      department: 'Sales, Textile',
      company: 'aamra resources ltd',
      imageSrc: '/employee-placeholder.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>Recognitions - aamra resources limited</title>
        <meta name="description" content="Employee recognitions and achievements at aamra resources limited" />
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
              <h1 className="text-3xl md:text-4xl font-bold text-white">Employee Recognitions</h1>
              <p className="mt-4 text-xl text-gray-300">Celebrating our outstanding team members</p>
            </div>
          </section>

          {/* Employee Recognition Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {employees.map((employee) => (
                  <div key={employee.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="h-64 bg-gray-200 relative">
                      {/* Replace with actual employee images */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <span className="text-gray-500">Employee Photo</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{employee.name}</h3>
                      <p className="text-gray-600 mt-1">{employee.position}</p>
                      <p className="text-gray-600">{employee.department}</p>
                      <p className="text-gray-500 mt-2 text-sm">{employee.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Customer Testimonial Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Customer Testimonials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial cards would go here */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Customer Name</h4>
                      <p className="text-sm text-gray-600">Company Position</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "We've been working with aamra resources for over 5 years now. Their dedication to quality and service excellence has been instrumental to our success."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Customer Name</h4>
                      <p className="text-sm text-gray-600">Company Position</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "The technical expertise and support provided by aamra resources has helped us optimize our production processes and improve efficiency."
                  </p>
                </div>
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