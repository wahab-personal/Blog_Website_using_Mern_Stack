import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ title, excerpt, link }) {
    return (
        <Link 
            to={link} 
            className="block bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
        >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{title}</h3>
            <p className="text-gray-600">{excerpt}</p>
            <span className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">
                Read More →
            </span>
        </Link>
    );
}

export default BlogCard;
