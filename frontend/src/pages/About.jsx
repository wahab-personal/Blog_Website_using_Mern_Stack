import React from 'react';

function About() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">About Us</h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome to <strong>My Blog</strong>! Our mission is to create a vibrant community where web developers, designers, and tech enthusiasts can come together to learn, share, and grow. We believe that knowledge sharing is the key to innovation, and through this blog, we aim to provide high-quality tutorials, insightful articles, and the latest updates from the world of technology.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
                Whether you are a beginner starting your coding journey or an experienced developer looking to deepen your skills, you’ll find valuable content tailored just for you. From React and JavaScript fundamentals to advanced concepts in modern web development, we cover a wide range of topics with practical examples and step-by-step guides.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">Our Vision</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
                We envision a world where technology education is accessible to everyone, regardless of background or location. Through consistent and easy-to-understand content, we want to empower individuals to build amazing projects, solve real-world problems, and excel in their careers.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">What We Offer</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>In-depth tutorials on React, JavaScript, CSS, and more.</li>
                <li>Guides on building full-stack applications using the MERN stack.</li>
                <li>Tips on best practices, debugging, and performance optimization.</li>
                <li>Latest trends in web development and emerging technologies.</li>
                <li>Community interviews and guest posts from industry experts.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">Meet the Team</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
                Our passionate team consists of developers, writers, and educators who are dedicated to making technology understandable and fun. We continually update our content to reflect the latest advancements and feedback from our readers.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">Join Our Community</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
                We encourage you to engage with us through comments, questions, and suggestions. Follow us on social media, subscribe to our newsletter, and participate in our upcoming webinars and workshops. Together, we can make learning a collaborative and enjoyable experience.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed italic">
                Thank you for visiting My Blog — your go-to resource for all things web development!
            </p>
        </div>
    );
}

export default About;
