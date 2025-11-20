import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

// This is a placeholder for the authOptions we created in the api route.
// In a real app, you would export it from the route file and import it here.
import { handler as authOptions } from '../api/auth/[...nextauth]/route';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-6">
        <nav className="space-y-4">
          <h2 className="text-xl font-bold text-brand-blue dark:text-white mb-6">Admin Menu</h2>
          <Link href="/admin/dashboard" className="block text-gray-700 dark:text-gray-300 hover:text-brand-gold">Dashboard</Link>
          <Link href="/admin/customers" className="block text-gray-700 dark:text-gray-300 hover:text-brand-gold">Customers</Link>
          <Link href="/admin/blog" className="block text-gray-700 dark:text-gray-300 hover:text-brand-gold">Blog Posts</Link>
          <Link href="/admin/testimonials" className="block text-gray-700 dark:text-gray-300 hover:text-brand-gold">Testimonials</Link>
          <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:text-brand-gold pt-6 border-t border-gray-300 dark:border-gray-700">Back to Site</Link>
        </nav>
      </aside>
      <main className="flex-grow p-8 bg-white dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
