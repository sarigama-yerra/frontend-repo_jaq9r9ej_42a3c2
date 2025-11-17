import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductGrid() {
  const [tab, setTab] = useState('all')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchProducts = async (category) => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams()
      if (category && category !== 'all') params.set('category', category)
      const res = await fetch(`${API_BASE}/products?${params.toString()}`)
      if (!res.ok) throw new Error('Failed to load products')
      const data = await res.json()
      setProducts(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts('all')
  }, [])

  const handleTab = (next) => {
    setTab(next)
    fetchProducts(next)
  }

  return (
    <section id="all" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Browse</h2>
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
          {['all','shirt','pants'].map((t) => (
            <button
              key={t}
              onClick={() => handleTab(t)}
              className={`px-4 py-2 rounded-md text-sm capitalize transition-colors ${tab===t ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {Array.from({length:8}).map((_,i) => (
            <div key={i} className="animate-pulse rounded-xl border border-gray-200 bg-white overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100" />
              <div className="p-4 space-y-2">
                <div className="h-4 w-2/3 bg-gray-100 rounded" />
                <div className="h-3 w-1/2 bg-gray-100 rounded" />
                <div className="h-8 w-24 bg-gray-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-8 text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <div id="shirts" className="mt-16">
        <h3 className="text-xl font-semibold text-gray-900">Shirts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {products.filter(p=>p.category==='shirt').slice(0,4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div id="pants" className="mt-16">
        <h3 className="text-xl font-semibold text-gray-900">Pants</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {products.filter(p=>p.category==='pants').slice(0,4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
