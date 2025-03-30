import RoomCard from '@/components/RoomCard';

const rooms = [
  {
    id: 'cherry',
    title: 'Cherry Room',
    description:
      'A cozy and comfortable room with modern amenities and a beautiful view.',
    price: '$1,200/month',
    image: '/assets/img/cherry-room.jpeg',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Study Desk'],
  },
  {
    id: 'cranberry',
    title: 'Cranberry Room',
    description:
      'Spacious room with premium furnishings and excellent natural lighting.',
    price: '$1,300/month',
    image: '/assets/img/cranberry.jpeg',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Balcony'],
  },
  {
    id: 'dewberry',
    title: 'Dewberry Room',
    description:
      'Modern room with smart home features and comfortable living space.',
    price: '$1,400/month',
    image: '/assets/img/drewberry.jpeg',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'Smart TV'],
  },
  // Add more rooms as needed
];

export default function RoomsPage() {
  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12'>Our Rooms</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </div>
  );
}
