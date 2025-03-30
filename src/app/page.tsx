import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-screen'>
        <Image
          src='/assets/img/banner-bg.jpg'
          alt='Hero background'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white'>
            <span className='text-xl mb-4 block'>NEED PERFECT PG ?</span>
            <h1 className='text-5xl font-bold mb-4'>
              GET LIVINN COLIVING STAY × GOOD FOOD
            </h1>
            <p className='text-xl mb-8'>
              FULLY FURNISHED ROOMS FOR BOYS, GIRLS, COUPLES FOR HAPPY LIVING.
            </p>
            <div className='flex justify-center gap-4'>
              <Link
                href='https://www.youtube.com/watch?v=bk7McNUjWgw'
                className='btn-primary'
              >
                Watch Video
              </Link>
              <Link href='/rooms' className='btn-primary'>
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about-section' className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='text-primary font-semibold mb-4 block'>
                About LIVINN
              </span>
              <h2 className='text-3xl font-bold mb-6'>LUXE COLIVING</h2>
              <p className='text-gray-600 mb-6'>
                LIVINN, couple-friendly × bachelor friendly perfect
                accommodations with innovative new interiors with all good
                amenities & food included. TECHNOLOGY-ENABLED move-in-
                accommodations are available at multiple Addresss that have
                close proximity to business hubs and the IT parks in bangalore.
              </p>
              <p className='text-gray-600 mb-8'>
                Thoughtfully designed with the best in interiors, the
                accommodations are featured with fully-functional modernized
                technology. At LIVINN, one gets featured with a professionally
                managed place where flexibility comes with affordability. With
                LIVINN luxe stays, one gets a spacious apartment with the luxury
                of having one's privacy and safety.
              </p>
              <Link
                href='/about'
                className='btn-primary inline-flex items-center'
              >
                Read More{' '}
                <svg
                  className='w-5 h-5 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            </div>
            <div className='relative h-[500px]'>
              <Image
                src='/assets/img/about/4.jpg'
                alt='About Livinn'
                fill
                className='object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section id='room-section' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <span className='text-primary font-semibold mb-4 block'>
              Accommodation
            </span>
            <h2 className='text-3xl font-bold'>Discover Our Room</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Private Room */}
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='relative h-[250px]'>
                <Image
                  src='/assets/img/collection/common/IMG_5173 - Copy.JPG'
                  alt='Private Room'
                  fill
                  className='object-cover'
                />
                <div className='absolute top-4 right-4'>
                  <span className='bg-primary text-white px-4 py-2 rounded-full text-sm'>
                    COLIVING
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-4'>Private Livinn</h3>
                <p className='text-gray-600 mb-6'>
                  Enjoy your privacy while having some "ME" time.
                </p>
                <Link
                  href='/rooms/private'
                  className='btn-primary inline-flex items-center'
                >
                  Read More{' '}
                  <svg
                    className='w-5 h-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Couple Room */}
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='relative h-[250px]'>
                <Image
                  src='/assets/img/collection/common/IMG_5176.JPG'
                  alt='Couple Room'
                  fill
                  className='object-cover'
                />
                <div className='absolute top-4 right-4'>
                  <span className='bg-primary text-white px-4 py-2 rounded-full text-sm'>
                    COLIVING
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-4'>Couple Livinn</h3>
                <p className='text-gray-600 mb-6'>
                  Perfect for couples or friends who want to have a good and
                  budget-friendly life in bangalore.
                </p>
                <Link
                  href='/rooms/couple'
                  className='btn-primary inline-flex items-center'
                >
                  Read More{' '}
                  <svg
                    className='w-5 h-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Shared Room */}
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='relative h-[250px]'>
                <Image
                  src='/assets/img/collection/common/WhatsApp Image 2022-05-12 at 2.27.16 PM (1).jpeg'
                  alt='Shared Room'
                  fill
                  className='object-cover'
                />
                <div className='absolute top-4 right-4'>
                  <span className='bg-primary text-white px-4 py-2 rounded-full text-sm'>
                    COLIVING
                  </span>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-4'>Shared Livinn</h3>
                <p className='text-gray-600 mb-6'>
                  Sharing is caring with saving popular for new people and
                  budget-friendly stays
                </p>
                <Link
                  href='/rooms/shared'
                  className='btn-primary inline-flex items-center'
                >
                  Read More{' '}
                  <svg
                    className='w-5 h-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id='reception-section' className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='text-4xl font-bold text-primary mb-4 block'>
                01
              </span>
              <h2 className='text-3xl font-bold mb-4'>Livinn Luxe</h2>
              <h3 className='text-2xl font-semibold mb-6'>Goals</h3>
              <p className='text-gray-600 mb-8'>
                Livinn provides safe and healthy rental accommodations for urban
                millennials. We've stringent cleanliness measures in place to
                get you the highest hygiene standards. Moreover, our smartly
                designed interiors to enable work-play balance will ensure that
                you absolutely love each moment spent at Livinn
              </p>
              <ul className='space-y-4 mb-8'>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-primary mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  No touch move-ins
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-primary mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  WFH compatible
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-primary mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  5x better hygiene
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-primary mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Well-ventilated rooms
                </li>
              </ul>
              <Link
                href='/about'
                className='btn-primary inline-flex items-center'
              >
                Read More{' '}
                <svg
                  className='w-5 h-5 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            </div>
            <div className='relative h-[500px]'>
              <Image
                src='/assets/img/better_hygine1.jpg'
                alt='Why Choose Us'
                fill
                className='object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='top-services-section' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <span className='text-primary font-semibold mb-4 block'>
              Promises we give are promises we keep
            </span>
            <h2 className='text-3xl font-bold'>Connect for more</h2>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: '/assets/img/video-image/1.svg',
                text: 'Entertainment & Study zone, with all time Terrace access',
              },
              {
                icon: '/assets/img/video-image/2.svg',
                text: 'Air Conditioning (Optional) & Ready-to-use Furniture',
              },
              { icon: '/assets/img/video-image/3.svg', text: 'TV with DTH' },
              {
                icon: '/assets/img/video-image/4.svg',
                text: 'Public services with staff support 24/7',
              },
              {
                icon: '/assets/img/video-image/5.svg',
                text: 'Games, Gym & Yoga room',
              },
              { icon: '/assets/img/video-image/6.svg', text: 'Wi-Fi- 24*7' },
              {
                icon: '/assets/img/video-image/7.svg',
                text: 'Purified Drinking Water',
              },
              { icon: '/assets/img/video-image/8.svg', text: 'House Keeping' },
              {
                icon: '/assets/img/video-image/9.svg',
                text: 'Food Services, Self Kitchen & Dining Area',
              },
              {
                icon: '/assets/img/video-image/10.svg',
                text: 'Full Security with CCTV availability',
              },
              {
                icon: '/assets/img/video-image/11.svg',
                text: 'Washing Machines, Laundry Services',
              },
              {
                icon: '/assets/img/video-image/12.svg',
                text: 'Digital Payments and Communication Services availability',
              },
            ].map((service, index) => (
              <div
                key={index}
                className='text-center p-6 bg-white rounded-lg shadow-md'
              >
                <Image
                  src={service.icon}
                  alt={service.text}
                  width={64}
                  height={64}
                  className='mx-auto mb-4'
                />
                <p className='text-gray-600'>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id='tabs-section' className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='relative h-[400px]'>
              <Image
                src='/assets/img/thali.png'
                alt='Food'
                fill
                className='object-contain'
              />
            </div>
            <div>
              <h2 className='text-3xl font-bold mb-8'>Good Food, Great Mood</h2>
              <div className='flex gap-4 mb-8'>
                <button className='px-6 py-2 bg-primary text-white rounded-full'>
                  Breakfast
                </button>
                <button className='px-6 py-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors'>
                  Lunch
                </button>
                <button className='px-6 py-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors'>
                  Dinner
                </button>
              </div>
              <p className='text-gray-600 mb-8'>
                Your meal plan is now sorted! We've prepped the dishes, set the
                tables, laid out the plates – dining shall commence shortly. Let
                the hunger games begin!
              </p>
              <Link
                href='/services'
                className='btn-primary inline-flex items-center'
              >
                Read More{' '}
                <svg
                  className='w-5 h-5 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='client-section' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <span className='text-primary font-semibold mb-4 block'>
              Testimonial
            </span>
            <h2 className='text-3xl font-bold'>What Client Say</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                text: 'The best PG which I have seen ever. Quality food, Premium Cots and Beds, Hygienic maintenance, immediate responsible staff. I refer this to all who look for best PG.',
                author: 'R K',
                role: '#LivinMember',
              },
              {
                text: 'Very good Pg.. nice cot and bed.. good house keeping.. excellent food quality 3 times a Day.. Thank you LIVINN',
                author: 'M Veera',
                role: '#LivinMember',
              },
              {
                text: 'Best colive pg 3 sharing 8000 and 2 sharing 10000 with north indian food. They have various events organized at there place.',
                author: 'Purvaj Puddatwar',
                role: '#LivinMember',
              },
            ].map((testimonial, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <p className='text-gray-600 mb-4'>{testimonial.text}</p>
                <h3 className='font-bold'>{testimonial.author}</h3>
                <span className='text-primary'>{testimonial.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
