import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        {/* Hero Section */}
        <div className='relative h-[400px] mb-16'>
          <Image
            src='/assets/img/banner-bg.jpg'
            alt='About Us'
            fill
            className='object-cover rounded-lg'
            priority
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg'>
            <h1 className='text-4xl font-bold text-white'>About Us</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl font-bold mb-6'>Welcome to Livinn</h2>
            <p className='text-gray-600 mb-6'>
              Livinn is your premier destination for student accommodation,
              offering modern, comfortable, and well-equipped living spaces
              designed to enhance your academic journey.
            </p>
            <p className='text-gray-600 mb-6'>
              Our commitment to excellence in student housing has made us a
              trusted name in providing quality accommodation solutions for
              students across the country.
            </p>
            <div className='grid grid-cols-2 gap-6 mt-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>500+</div>
                <div className='text-gray-600'>Happy Students</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>50+</div>
                <div className='text-gray-600'>Properties</div>
              </div>
            </div>
          </div>
          <div className='relative h-[400px]'>
            <Image
              src='/assets/img/collection/common/WhatsApp Image 2022-05-12 at 2.27.16 PM (1).jpeg'
              alt='About Content'
              fill
              className='object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Features Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Why Choose Us
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>Modern Facilities</h3>
              <p className='text-gray-600'>
                State-of-the-art amenities and modern living spaces
              </p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>24/7 Security</h3>
              <p className='text-gray-600'>
                Round-the-clock security and surveillance
              </p>
            </div>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
              <div className='w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                High-Speed Internet
              </h3>
              <p className='text-gray-600'>
                Fast and reliable internet connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
