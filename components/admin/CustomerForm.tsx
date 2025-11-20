"use client";

import React from 'react';

// In a real app, this would be imported from prisma
type Customer = {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  insuranceType?: string | null;
  customerSource?: string | null;
  crossSellSource?: string | null;
  futureProspect?: string | null;
};

interface CustomerFormProps {
  customer?: Customer | null;
  onClose: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customer, onClose }) => {
  const [formData, setFormData] = React.useState<Customer>(
    customer || { name: '', email: '' }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the data.
    // For now, it just closes the modal.
    console.log('Form data:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <input type="text" defaultValue={formData.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
          <input type="email" defaultValue={formData.email} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
          <input type="tel" defaultValue={formData.phone || ''} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        {/* Insurance Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Insurance Type (Inquired)</label>
          <input type="text" defaultValue={formData.insuranceType || ''} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        {/* Customer Source */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Customer Source</label>
          <input type="text" defaultValue={formData.customerSource || ''} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        {/* Cross-Sell Source */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Source for other products</label>
          <input type="text" defaultValue={formData.crossSellSource || ''} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        {/* Future Prospect */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Future Prospect</label>
          <textarea rows={3} defaultValue={formData.futureProspect || ''} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
      </div>
      <div className="mt-8 flex justify-end space-x-3">
        <button type="button" onClick={onClose} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg">
          Cancel
        </button>
        <button type="submit" className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg">
          Save Customer
        </button>
      </div>
    </form>
  );
};

export default CustomerForm;
