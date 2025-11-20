"use client";

import React, { useState } from 'react';
import Modal from '@/components/admin/Modal';
import BlogPostForm from '@/components/admin/BlogPostForm';

type Post = {
  id: string;
  title: string;
  status: 'Published' | 'Draft';
  createdAt: string;
  content?: string;
  slug?: string;
};

const mockPosts: Post[] = [
  {
    id: '1',
    title: '5 Tips for Choosing the Right Health Insurance',
    status: 'Published',
    createdAt: '2023-06-10',
  },
  {
    id: '2',
    title: 'Understanding Comprehensive Car Insurance',
    status: 'Published',
    createdAt: '2023-05-28',
  },
  {
    id: '3',
    title: 'Why Every Business Needs Commercial Insurance',
    status: 'Draft',
    createdAt: '2023-06-15',
  },
];

const BlogManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleOpenModal = (post: Post | null = null) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-blue dark:text-white">Blog Management</h1>
        <button onClick={() => handleOpenModal()} className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg">
          Add New Post
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Created At</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockPosts.map((post) => (
              <tr key={post.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{post.title}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    post.status === 'Published'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4">{post.createdAt}</td>
                <td className="px-6 py-4 space-x-2">
                  <button onClick={() => handleOpenModal(post)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedPost ? 'Edit Blog Post' : 'Add New Post'}>
        <BlogPostForm post={selectedPost} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default BlogManagementPage;
