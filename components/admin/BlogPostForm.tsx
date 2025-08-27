"use client";

import React from 'react';

type Post = {
  id?: string;
  title: string;
  content: string;
  slug: string;
  published: boolean;
};

interface BlogPostFormProps {
  post?: Post | null;
  onClose: () => void;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({ post, onClose }) => {
  const [formData, setFormData] = React.useState<Post>(
    post || { title: '', content: '', slug: '', published: false }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blog post data:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Post Title</label>
          <input type="text" defaultValue={formData.title} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Slug (URL Path)</label>
          <input type="text" defaultValue={formData.slug} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
          <textarea rows={10} defaultValue={formData.content} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        {/* Published Toggle */}
        <div className="flex items-center">
          <input type="checkbox" defaultChecked={formData.published} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          <label className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Publish Post</label>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <button type="button" onClick={onClose} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg">
          Cancel
        </button>
        <button type="submit" className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg">
          Save Post
        </button>
      </div>
    </form>
  );
};

export default BlogPostForm;
