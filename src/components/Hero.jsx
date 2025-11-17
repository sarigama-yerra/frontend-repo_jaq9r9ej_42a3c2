import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Effortless staples for every day
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Clean silhouettes. Premium fabrics. Thoughtful details. Discover shirts and pants designed to mix and match with ease.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#shirts" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">Shop Shirts</a>
            <a href="#pants" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors">Shop Pants</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1507297448044-a99b358cd06e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwY2xvdGhpbmd8ZW58MHwwfHx8MTc2MzQwMDg4NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Minimal clothing" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-200/50 rounded-full blur-2xl" />
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-200/50 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
