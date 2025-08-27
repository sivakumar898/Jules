"use client";

import React, { useState } from 'react';
import Modal from '@/components/admin/Modal';
import CustomerForm from '@/components/admin/CustomerForm';

// In a real app, this type would be imported from prisma
type Customer = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  insuranceType?: string | null;
  dateJoined: string;
  nextRenewalDate: string;
  renewalPeriod: string;
  customerSource: string;
  crossSellSource?: string | null;
  futureProspect?: string | null;
};

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 9876543210',
    insuranceType: 'Health Insurance',
    dateJoined: '2023-01-15',
    nextRenewalDate: '2025-01-14',
    renewalPeriod: 'Annual',
    customerSource: 'Website',
    crossSellSource: 'Interested in Travel Insurance',
    futureProspect: 'High',
  },
  {
    id: '2',
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    phone: '+91 9876543211',
    insuranceType: 'Car Insurance',
    dateJoined: '2023-03-22',
    nextRenewalDate: '2025-03-21',
    renewalPeriod: 'Annual',
    customerSource: 'Referral',
    crossSellSource: '',
    futureProspect: 'Medium',
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    email: 'rohan.gupta@example.com',
    phone: '+91 9876543212',
    insuranceType: 'Home Insurance',
    dateJoined: '2023-05-10',
    nextRenewalDate: '2025-05-09',
    renewalPeriod: 'Annual',
    customerSource: 'Walk-in',
    crossSellSource: 'Needs Bike Insurance',
    futureProspect: 'High',
  },
];

const CustomersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleOpenModal = (customer: Customer | null = null) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-blue dark:text-white">Customer Management</h1>
        <div className="space-x-2">
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg">
            Export to CSV
          </button>
          <button onClick={() => handleOpenModal()} className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg">
            Add Customer
          </button>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Contact</th>
              <th scope="col" className="px-6 py-3">Source</th>
              <th scope="col" className="px-6 py-3">Next Renewal</th>
              <th scope="col" className="px-6 py-3">Future Prospect</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer) => (
              <tr key={customer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{customer.name}</td>
                <td className="px-6 py-4">{customer.email}<br/>{customer.phone}</td>
                <td className="px-6 py-4">{customer.customerSource}</td>
                <td className="px-6 py-4">{customer.nextRenewalDate} ({customer.renewalPeriod})</td>
                <td className="px-6 py-4">{customer.futureProspect}</td>
                <td className="px-6 py-4 space-x-2">
                  <button onClick={() => handleOpenModal(customer)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placeholder for Pagination */}
      <div className="flex justify-center mt-6">
        <p className="text-gray-600 dark:text-gray-400">Pagination UI</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedCustomer ? 'Edit Customer' : 'Add New Customer'}>
        <CustomerForm customer={selectedCustomer} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default CustomersPage;
