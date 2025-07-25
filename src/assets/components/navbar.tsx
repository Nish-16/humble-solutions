import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between bg-gray-700 rounded-full px-4 py-1 shadow-lg mx-auto max-w-6xl relative opacity-90">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={`${import.meta.env.BASE_URL}photos/logo.png`}
          alt="Logo"
          className="w-30 ml-4"
        />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li className="relative group">
          <a href="#" className="hover:text-blue-400 transition">
            Home
            <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-blue-400 transition">
            Services
            <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-blue-400 transition">
            Portfolio
            <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-blue-400 transition">
            Blogs
            <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-blue-400 transition">
            About Us
            <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1"></span>
          </a>
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow transition hover:cursor-pointer mr-2">
        Get A Quote
      </button>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-700 rounded-b-2xl shadow-lg flex flex-col items-center z-50 md:hidden animate-fade-in">
          <ul className="flex flex-col space-y-4 py-4 text-white font-medium w-full items-center">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
          </ul>
          <button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow transition">
            Get A Quote
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
