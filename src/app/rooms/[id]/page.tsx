import Image from 'next/image';
import { notFound } from 'next/navigation';

const rooms = {
  cherry: {
    title: 'Cherry Room',
    description:
      'A cozy and comfortable room with modern amenities and a beautiful view.',
    price: '$1,200/month',
    image: '/assets/img/rooms/cherry.jpg',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Study Desk'],
    details: [
      'Fully furnished room with modern decor',
      'High-speed internet connection',
      'Individual climate control',
      'En-suite bathroom with modern fixtures',
      'Study desk with ergonomic chair',
      'Built-in wardrobe',
      'Mini refrigerator',
      'Microwave oven',
    ],
  },
  cranberry: {
    title: 'Cranberry Room',
    description:
      'Spacious room with premium furnishings and excellent natural lighting.',
    price: '$1,300/month',
    image: '/assets/img/rooms/cranberry.jpg',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Balcony'],
    details: [
      'Premium furnishings and decor',
      'High-speed internet connection',
      'Individual climate control',
      'En-suite bathroom with modern fixtures',
      'Private balcony with city view',
      'Built-in wardrobe',
      'Mini refrigerator',
      'Microwave oven',
    ],
  },
  dewberry: {
    title: 'Dewberry Room',
    description:
      'Modern room with smart home features and comfortable living space.',
    price: '$1,400/month',
    image: '/assets/img/rooms/dewberry.jpg',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Smart TV'],
    details: [
      'Smart home integration',
      'High-speed internet connection',
      'Individual climate control',
      'En-suite bathroom with modern fixtures',
      'Smart TV with streaming services',
      'Built-in wardrobe',
      'Mini refrigerator',
      'Microwave oven',
    ],
  },
};

interface RoomPageProps {
  params: {
    id: string;
  };
}

export default function RoomPage({ params }: RoomPageProps) {
  const room = rooms[params.id as keyof typeof rooms];

  if (!room) {
    notFound();
  }

  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Room Image */}
          <div className='relative h-[400px] lg:h-[600px]'>
            <Image
              src={room.image}
              alt={room.title}
              fill
              className='object-cover rounded-lg'
            />
          </div>

          {/* Room Details */}
          <div>
            <h1 className='text-4xl font-bold mb-4'>{room.title}</h1>
            <p className='text-gray-600 mb-6'>{room.description}</p>

            <div className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>Amenities</h2>
              <ul className='grid grid-cols-2 gap-4'>
                {room.amenities.map((amenity, index) => (
                  <li key={index} className='flex items-center'>
                    <svg
                      className='w-5 h-5 mr-2 text-primary'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M5 13l4 4L19 7' />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>Room Details</h2>
              <ul className='space-y-2'>
                {room.details.map((detail, index) => (
                  <li key={index} className='flex items-center'>
                    <svg
                      className='w-5 h-5 mr-2 text-primary'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M5 13l4 4L19 7' />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex items-center justify-between'>
              <span className='text-3xl font-bold text-primary'>
                {room.price}
              </span>
              <button className='btn-primary'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
