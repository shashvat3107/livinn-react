import Image from 'next/image';
import { notFound } from 'next/navigation';

const blogPosts = {
  '1': {
    title: 'Tips for Living in Student Accommodation',
    content: `
      <p>Living in student accommodation can be an exciting and rewarding experience. Here are some tips to help you make the most of it:</p>
      
      <h2>1. Get to Know Your Roommates</h2>
      <p>Take the time to introduce yourself and get to know the people you'll be living with. Building good relationships with your roommates can make your stay much more enjoyable.</p>
      
      <h2>2. Keep Your Space Organized</h2>
      <p>Maintaining a clean and organized living space can help you stay focused and reduce stress. Create a cleaning schedule with your roommates to keep common areas tidy.</p>
      
      <h2>3. Respect Quiet Hours</h2>
      <p>Be mindful of your noise levels, especially during study hours or late at night. Everyone needs their rest, and being considerate of others goes a long way.</p>
      
      <h2>4. Get Involved in Community Events</h2>
      <p>Take advantage of social events and activities organized by your accommodation. This is a great way to meet new people and make friends.</p>
      
      <h2>5. Stay Connected with Family</h2>
      <p>Regular communication with family and friends back home can help you feel more connected and supported during your time away.</p>
    `,
    image: '/assets/img/blog-details-image.jpg',
    date: 'March 15, 2024',
    author: 'John Doe',
    category: 'Student Life',
  },
  '2': {
    title: 'Creating a Productive Study Environment',
    content: `
      <p>Your study environment can significantly impact your academic performance. Here's how to create the perfect study space:</p>
      
      <h2>1. Choose the Right Location</h2>
      <p>Find a quiet, well-lit area where you can focus without distractions. Consider using the study rooms provided by your accommodation.</p>
      
      <h2>2. Organize Your Materials</h2>
      <p>Keep your study materials organized and easily accessible. This includes textbooks, notebooks, and digital resources.</p>
      
      <h2>3. Minimize Distractions</h2>
      <p>Put your phone on silent mode and consider using website blockers to stay focused during study sessions.</p>
      
      <h2>4. Create a Schedule</h2>
      <p>Establish a regular study schedule and stick to it. This helps create a routine and makes studying more manageable.</p>
      
      <h2>5. Take Regular Breaks</h2>
      <p>Remember to take short breaks during study sessions to maintain focus and prevent burnout.</p>
    `,
    image: '/assets/img/better_hygine1.jpg',
    date: 'March 10, 2024',
    author: 'Jane Smith',
    category: 'Study Tips',
  },
  // Add more blog posts as needed
};

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Hero Image */}
          <div className='relative h-[400px] mb-8 rounded-lg overflow-hidden'>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Post Header */}
          <div className='mb-8'>
            <div className='flex items-center text-sm text-gray-600 mb-4'>
              <span>{post.date}</span>
              <span className='mx-2'>•</span>
              <span>{post.author}</span>
            </div>
            <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
            <span className='inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm'>
              {post.category}
            </span>
          </div>

          {/* Post Content */}
          <div
            className='prose prose-lg max-w-none'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Buttons */}
          <div className='mt-12 pt-8 border-t'>
            <h3 className='text-xl font-semibold mb-4'>Share this post</h3>
            <div className='flex gap-4'>
              <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
                Facebook
              </button>
              <button className='px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500'>
                Twitter
              </button>
              <button className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700'>
                LinkedIn
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className='mt-12 pt-8 border-t'>
            <h3 className='text-xl font-semibold mb-6'>Related Posts</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Add related posts here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
