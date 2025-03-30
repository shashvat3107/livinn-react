import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/assets/img/slider-bg-1.jpg',
    alt: 'Living Room',
    category: 'Common Areas',
  },
  {
    id: 2,
    src: '/assets/img/slider-bg-2.jpg',
    alt: 'Kitchen',
    category: 'Common Areas',
  },
  {
    id: 3,
    src: '/assets/img/slider-bg-3.jpg',
    alt: 'Study Room',
    category: 'Study Areas',
  },
  {
    id: 4,
    src: '/assets/img/room-bg.jpg',
    alt: 'Bedroom',
    category: 'Rooms',
  },
  {
    id: 5,
    src: '/assets/img/banner-bg.jpg',
    alt: 'Bathroom',
    category: 'Rooms',
  },
  {
    id: 6,
    src: '/assets/img/services-bg.jpg',
    alt: 'Gym',
    category: 'Amenities',
  },
  {
    id: 7,
    src: '/assets/img/page-banner-bg.jpg',
    alt: 'Rooftop Garden',
    category: 'Amenities',
  },
  {
    id: 8,
    src: '/assets/img/footer-bg.jpg',
    alt: 'Lounge Area',
    category: 'Common Areas',
  },
  {
    id: 9,
    src: '/assets/img/coming-soon.jpg',
    alt: 'Game Room',
    category: 'Amenities',
  },
];

const categories = ['All', 'Common Areas', 'Study Areas', 'Rooms', 'Amenities'];

export default function GalleryPage() {
  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12'>Our Gallery</h1>

        {/* Categories */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              className='px-6 py-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors'
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className='group relative overflow-hidden rounded-lg'
            >
              <div className='relative h-[300px]'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center'>
                <div className='text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <h3 className='text-xl font-semibold mb-2'>{image.alt}</h3>
                  <p className='text-sm'>{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className='text-center mt-12'>
          <button className='btn-primary'>View More</button>
        </div>
      </div>
    </div>
  );
}
