import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')

  // Load blogs from localStorage
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || []
    setBlogs(storedBlogs)
  }, [])

  // Save blogs to localStorage
  const saveToStorage = (blogsData) => {
    localStorage.setItem('blogs', JSON.stringify(blogsData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBlog = {
      id: Date.now(),
      title,
      desc,
      image,
    }
    const updatedBlogs = [newBlog, ...blogs]
    setBlogs(updatedBlogs)
    saveToStorage(updatedBlogs)

    setTitle('')
    setDesc('')
    setImage('')
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Blog
        </button>
      </form>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded shadow p-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover rounded mb-2"
            />
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600 mb-2 line-clamp-2">{blog.desc}</p>
            <Link
              to={`/blog/${blog.id}`}
              className="text-blue-600 hover:underline"
            >
              View More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
