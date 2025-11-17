import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500" />
          <span className="text-xl font-bold tracking-tight text-gray-900">Minimal Wear</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#shirts" className="hover:text-gray-900 transition-colors">Shirts</a>
          <a href="#pants" className="hover:text-gray-900 transition-colors">Pants</a>
          <a href="#all" className="hover:text-gray-900 transition-colors">All</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
