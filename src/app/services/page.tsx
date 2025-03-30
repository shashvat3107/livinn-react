import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Student Accommodation',
    description:
      'Comfortable and modern living spaces designed specifically for students.',
    image: '/assets/img/room-bg.jpg',
    features: [
      'Fully furnished rooms',
      'High-speed internet',
      'Study areas',
      'Common rooms',
    ],
  },
  {
    id: 2,
    title: 'Property Management',
    description:
      'Professional property management services to ensure a smooth living experience.',
    image: '/assets/img/services-bg.jpg',
    features: [
      '24/7 maintenance',
      'Security services',
      'Cleaning services',
      'Emergency support',
    ],
  },
  {
    id: 3,
    title: 'Community Events',
    description:
      'Regular social events and activities to build a vibrant community.',
    image: '/assets/img/banner-bg.jpg',
    features: [
      'Social gatherings',
      'Study groups',
      'Sports activities',
      'Cultural events',
    ],
  },
  {
    id: 4,
    title: 'Additional Services',
    description: 'Extra services to enhance your living experience.',
    image: '/assets/img/page-banner-bg.jpg',
    features: [
      'Laundry facilities',
      'Parking spaces',
      'Package handling',
      'Bike storage',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12'>Our Services</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <div className='relative h-[250px]'>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h2 className='text-2xl font-bold mb-4'>{service.title}</h2>
                <p className='text-gray-600 mb-6'>{service.description}</p>
                <ul className='space-y-2'>
                  {service.features.map((feature, index) => (
                    <li key={index} className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-primary mr-2'
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className='mt-6 btn-primary'>Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className='mt-16 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Need More Information?</h2>
          <p className='text-gray-600 mb-8'>
            Contact us to learn more about our services and how we can help you.
          </p>
          <a href='/contact' className='btn-primary'>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
