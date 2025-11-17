import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img src={product.image_url} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{product.title}</h3>
          {product.rating && (
            <span className="text-xs px-2 py-1 rounded bg-yellow-50 text-yellow-700 border border-yellow-200">★ {product.rating.toFixed(1)}</span>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="text-sm px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-black">Add</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
