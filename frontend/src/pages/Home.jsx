import React from 'react';
import BlogCard from '../components/BlogCard';

function Home() {
    const blogs = [
        { 
            id: 1,
            title: 'React Basics', 
            excerpt: 'Learn the fundamentals of React.', 
            link: '/blog/react-basics' 
        },
        { 
            id: 2,
            title: 'Tailwind Tips', 
            excerpt: 'Write clean and responsive UI with Tailwind CSS.', 
            link: '/blog/tailwind-tips' 
        },
        { 
            id: 3,
            title: 'JavaScript ES6 Features', 
            excerpt: 'Explore new features introduced in ES6.', 
            link: '/blog/js-es6-features' 
        },
        { 
            id: 4,
            title: 'Deploying MERN Apps', 
            excerpt: 'Step-by-step guide to deploy your MERN stack applications.', 
            link: '/blog/deploying-mern-apps' 
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <header className="mb-10 text-center">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
                    Welcome to My Blog
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover insightful tutorials, tips, and articles about web development, React, Tailwind CSS, and more.
                    Dive in and start learning today!
                </p>
            </header>

            <section>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block pb-1">
                    Latest Blog Posts
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <BlogCard 
                            key={blog.id} 
                            title={blog.title} 
                            excerpt={blog.excerpt} 
                            link={blog.link} 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
