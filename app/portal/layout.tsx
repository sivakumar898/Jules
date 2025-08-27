import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PortalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="https://placehold.co/180x50/0D244F/FFFFFF?text=Best+Insurance"
              alt="Best Insurance Solution Logo"
              width={180}
              height={50}
              className="h-auto"
            />
          </Link>
          <nav className="space-x-4">
            <Link href="/portal/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-brand-gold">My Policies</Link>
            <button className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg text-sm">
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default PortalLayout;
