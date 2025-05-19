import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold px-15">MyBlog</div>
        <div className="flex space-x-10 px-20">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
        </div>
      </div>
    </nav>
    );
}

export default Header;
