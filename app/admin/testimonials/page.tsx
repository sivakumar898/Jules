"use client";

import React, { useState } from 'react';
import Modal from '@/components/admin/Modal';
import TestimonialForm from '@/components/admin/TestimonialForm';

type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  visible: boolean;
};

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Bangalore',
    quote: 'Working with Best Insurance Solution was a breeze...',
    visible: true,
  },
  {
    id: '2',
    name: 'Amit Patel',
    location: 'Mumbai',
    quote: 'As a small business owner, I needed a comprehensive insurance package...',
    visible: true,
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    location: 'Delhi',
    quote: 'The renewal process for my vehicle insurance was seamless...',
    visible: false,
  },
];

const TestimonialsManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const handleOpenModal = (testimonial: Testimonial | null = null) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-blue dark:text-white">Testimonials Management</h1>
        <button onClick={() => handleOpenModal()} className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg">
          Add New Testimonial
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Customer Name</th>
              <th scope="col" className="px-6 py-3">Quote Snippet</th>
              <th scope="col" className="px-6 py-3">Visibility</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockTestimonials.map((testimonial) => (
              <tr key={testimonial.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{testimonial.name} <span className="text-gray-500">({testimonial.location})</span></td>
                <td className="px-6 py-4 italic text-gray-600 dark:text-gray-400">"{testimonial.quote.substring(0, 50)}..."</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    testimonial.visible
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'
                  }`}>
                    {testimonial.visible ? 'Visible' : 'Hidden'}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button onClick={() => handleOpenModal(testimonial)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}>
        <TestimonialForm testimonial={selectedTestimonial} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default TestimonialsManagementPage;
