import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: 'react-basics',
    title: 'React Basics',
    content: 'This is a detailed article about React basics...'
  },
  {
    slug: 'tailwind-tips',
    title: 'Tailwind Tips',
    content: 'Tips and tricks to write clean and responsive UI using Tailwind CSS...'
  },
  {
    slug: 'js-es6-features',
    title: 'JavaScript ES6 Features',
    content: 'Learn about the important ES6 features introduced in JavaScript...'
  },
  {
    slug: 'deploying-mern-apps',
    title: 'Deploying MERN Apps',
    content: 'Step-by-step guide on how to deploy MERN stack applications...'
  }
];

function BlogDetail() {
  const { slug } = useParams();

  // Find blog post matching the slug
  const blog = blogPosts.find(post => post.slug === slug);

  if (!blog) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Blog Not Found</h2>
        <p className="mb-6 text-gray-700">
          Sorry, we couldn't find the blog you are looking for.
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed">{blog.content}</p>
      <Link to="/" className="inline-block mt-6 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}

export default BlogDetail;
