"use client";

import React from 'react';

type Testimonial = {
  id?: string;
  name: string;
  location: string;
  quote: string;
  visible: boolean;
};

interface TestimonialFormProps {
  testimonial?: Testimonial | null;
  onClose: () => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ testimonial, onClose }) => {
  const [formData, setFormData] = React.useState<Testimonial>(
    testimonial || { name: '', location: '', quote: '', visible: true }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Testimonial data:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Customer Name</label>
          <input type="text" defaultValue={formData.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location (e.g., City)</label>
          <input type="text" defaultValue={formData.location} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        {/* Quote */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Quote</label>
          <textarea rows={5} defaultValue={formData.quote} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        {/* Visible Toggle */}
        <div className="flex items-center">
          <input type="checkbox" defaultChecked={formData.visible} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          <label className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Show this testimonial on the homepage</label>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <button type="button" onClick={onClose} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg">
          Cancel
        </button>
        <button type="submit" className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg">
          Save Testimonial
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;
