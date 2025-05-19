import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails' // 🔸 Importing BlogDetails
import About from './pages/About';            // ✅ About component
import Blog from './pages/Blog';

function App() {
  return (

    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App
