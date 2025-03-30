'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is included in the rent?',
    answer:
      'Our rent includes utilities (water, electricity, and internet), furniture, and access to all common areas. You only need to pay for your personal expenses and any additional services you choose.',
  },
  {
    question: 'How long is the lease term?',
    answer:
      'We offer flexible lease terms starting from 6 months to 12 months. Longer-term leases may be available upon request.',
  },
  {
    question: 'Is there a security deposit?',
    answer:
      "Yes, we require a security deposit equal to one month's rent. This is refundable upon move-out, subject to our terms and conditions.",
  },
  {
    question: 'Can I have visitors?',
    answer:
      'Yes, you are welcome to have visitors. However, we have specific guidelines regarding overnight guests and visitor parking. Please check our house rules for details.',
  },
  {
    question: 'What amenities are available?',
    answer:
      'Our properties include high-speed internet, laundry facilities, study rooms, common areas, and 24/7 security. Some locations may have additional amenities like gyms or rooftop gardens.',
  },
  {
    question: 'How do I apply for a room?',
    answer:
      "You can apply through our website by filling out the application form. You'll need to provide identification documents, proof of enrollment, and payment information. Our team will review your application and contact you within 2 business days.",
  },
  {
    question: 'Is parking available?',
    answer:
      'Yes, we provide parking spaces for residents. Some locations may have limited parking, so we recommend inquiring about availability during the application process.',
  },
  {
    question: 'What happens if I need to break my lease?',
    answer:
      'We understand that circumstances may change. We have a lease break policy that allows you to terminate your lease early with proper notice and payment of applicable fees. Please contact our team for specific details.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12'>
          Frequently Asked Questions
        </h1>

        <div className='max-w-3xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='border border-gray-200 rounded-lg'>
              <button
                className='w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className='text-lg font-semibold'>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className='px-6 pb-4'>
                  <p className='text-gray-600'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Still have questions?</h2>
          <p className='text-gray-600 mb-8'>
            If you couldn't find the answer you're looking for, please contact
            our support team.
          </p>
          <a href='/contact' className='btn-primary'>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
