import Image from 'next/image';
import Link from 'next/link';

interface RoomCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

export default function RoomCard({
  id,
  title,
  description,
  price,
  image,
  amenities,
}: RoomCardProps) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <div className='relative h-48'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='mb-4'>
          <h4 className='font-semibold mb-2'>Amenities:</h4>
          <ul className='grid grid-cols-2 gap-2'>
            {amenities.map((amenity, index) => (
              <li key={index} className='flex items-center text-gray-600'>
                <svg
                  className='w-4 h-4 mr-2 text-primary'
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
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-bold text-primary'>{price}</span>
          <Link href={`/rooms/${id}`} className='btn-primary'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
