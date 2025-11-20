"use client";

import Link from 'next/link';

export default function CustomerLoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This form is non-functional in the UI-only build.
    alert('Login functionality is not available in this UI preview.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-blue dark:text-white">
            Customer Portal Login
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Access your policy details and documents.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="text-sm text-right">
            <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-brand-blue rounded-lg hover:bg-opacity-90"
          >
            Log In
          </button>
          <div className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link href="/portal/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
