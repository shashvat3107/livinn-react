import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        {/* Hero Section */}
        <div className='relative h-[400px] mb-16'>
          <Image
            src='/assets/img/page-banner-bg.jpg'
            alt='Contact Us'
            fill
            className='object-cover rounded-lg'
            priority
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg'>
            <h1 className='text-4xl font-bold text-white'>Contact Us</h1>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div>
            <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
                  placeholder='Your email'
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
                  placeholder='Message subject'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
                  placeholder='Your message'
                ></textarea>
              </div>
              <button type='submit' className='btn-primary w-full'>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className='text-3xl font-bold mb-6'>Contact Information</h2>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-6 h-6 text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-1'>Address</h3>
                  <p className='text-gray-600'>
                    123 Main Street, City, State 12345
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-6 h-6 text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-1'>Phone</h3>
                  <p className='text-gray-600'>(123) 456-7890</p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-6 h-6 text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-1'>Email</h3>
                  <p className='text-gray-600'>info@livinn.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className='mt-8'>
              <h2 className='text-3xl font-bold mb-6'>Location</h2>
              <div className='relative h-[300px] rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986532978967!3d40.697149419999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647891234567!5m2!1sen!2s'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
