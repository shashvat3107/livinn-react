import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
}: BlogCardProps) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <div className='relative h-[200px]'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
      <div className='p-6'>
        <div className='flex items-center text-sm text-gray-600 mb-4'>
          <span>{date}</span>
          <span className='mx-2'>•</span>
          <span>{author}</span>
        </div>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{excerpt}</p>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-primary font-semibold'>{category}</span>
          <Link
            href={`/blog/${id}`}
            className='text-primary hover:text-primary-dark transition-colors'
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
