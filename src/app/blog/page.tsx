import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    id: '1',
    title: 'Tips for Living in Student Accommodation',
    excerpt:
      'Learn how to make the most of your student accommodation experience with these helpful tips.',
    image: '/assets/img/blog-details-image.jpg',
    date: 'March 15, 2024',
    author: 'John Doe',
    category: 'Student Life',
  },
  {
    id: '2',
    title: 'Creating a Productive Study Environment',
    excerpt:
      'Discover how to set up the perfect study space in your student room.',
    image: '/assets/img/better_hygine1.jpg',
    date: 'March 10, 2024',
    author: 'Jane Smith',
    category: 'Study Tips',
  },
  {
    id: '3',
    title: 'Making Friends in Student Housing',
    excerpt:
      'Tips and tricks for building meaningful relationships with your fellow students.',
    image: '/assets/img/young-women.jpg',
    date: 'March 5, 2024',
    author: 'Mike Johnson',
    category: 'Social Life',
  },
  {
    id: '4',
    title: 'Budgeting for Student Life',
    excerpt:
      'A comprehensive guide to managing your finances while living in student accommodation.',
    image: '/assets/img/room-bg.jpg',
    date: 'March 1, 2024',
    author: 'Sarah Wilson',
    category: 'Finance',
  },
  {
    id: '5',
    title: 'Healthy Living in Student Housing',
    excerpt:
      'Maintain a healthy lifestyle while living in student accommodation with these tips.',
    image: '/assets/img/services-bg.jpg',
    date: 'February 25, 2024',
    author: 'David Brown',
    category: 'Health',
  },
  {
    id: '6',
    title: 'Decorating Your Student Room',
    excerpt: 'Creative ideas to make your student room feel like home.',
    image: '/assets/img/banner-bg.jpg',
    date: 'February 20, 2024',
    author: 'Emma Davis',
    category: 'Interior Design',
  },
];

const categories = [
  'All',
  'Student Life',
  'Study Tips',
  'Social Life',
  'Finance',
  'Health',
  'Interior Design',
];

export default function BlogPage() {
  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12'>Our Blog</h1>

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

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className='mt-12 flex justify-center gap-4'>
          <button className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100'>
            Previous
          </button>
          <button className='px-4 py-2 bg-primary text-white rounded-md'>
            1
          </button>
          <button className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100'>
            2
          </button>
          <button className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100'>
            3
          </button>
          <button className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
