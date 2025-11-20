import React from 'react';

const mockPolicies = [
  {
    id: 'pol1',
    policyNumber: 'VHL-2023-12345',
    policyType: 'Car Insurance',
    premium: 500.00,
    renewalDate: '2025-03-21',
    status: 'Active',
  },
  {
    id: 'pol2',
    policyNumber: 'HOS-2022-67890',
    policyType: 'Health Insurance',
    premium: 1200.00,
    renewalDate: '2025-01-14',
    status: 'Active',
  },
  {
    id: 'pol3',
    policyNumber: 'TRV-2024-54321',
    policyType: 'Travel Insurance',
    premium: 150.00,
    renewalDate: '2024-08-30',
    status: 'Expired',
  },
];

const CustomerDashboardPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-blue dark:text-white">My Policies</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Here are all your current and past policies with us.</p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Policy Number</th>
              <th scope="col" className="px-6 py-3">Policy Type</th>
              <th scope="col" className="px-6 py-3">Renewal Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockPolicies.map((policy) => (
              <tr key={policy.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{policy.policyNumber}</td>
                <td className="px-6 py-4">{policy.policyType}</td>
                <td className="px-6 py-4">{policy.renewalDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    policy.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {policy.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDashboardPage;
