import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [seeded, setSeeded] = useState(false)

  useEffect(() => {
    // Try to seed products once (non-blocking)
    const doSeed = async () => {
      try {
        const res = await fetch(`${API_BASE}/seed`, { method: 'POST' })
        if (res.ok) setSeeded(true)
      } catch (_) {
        // ignore if backend not available
      }
    }
    doSeed()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App
