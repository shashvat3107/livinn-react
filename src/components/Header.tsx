'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className='fixed w-full z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link href='/' className='text-2xl font-bold text-primary'>
            <Image
              src='/assets/img/logo.png'
              alt='Logo'
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='hover:text-primary transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden py-4'>
            <div className='flex flex-col space-y-4'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='hover:text-primary transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
