import { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useSearch } from '../context/SearchContext';

export function Products() {
  const { searchQuery, selectedCategory, setSelectedCategory } = useSearch();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = [
    'All Products',
    'Bomber Jacket',
    'Denim Jacket',
    'Leather Jacket',
    'Hoodie Jacket',
    'Varsity Jacket',
    'Windbreaker',
    'Parka Jacket',
    'Trench Coat',
    'Blazer',
    'Puffer Jacket'
  ];

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All Products' ? '' : category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                (category === 'All Products' && !selectedCategory) ||
                category === selectedCategory
                  ? 'bg-gray-900 text-yellow-400'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-4">No products found</p>
            <button
              onClick={() => {
                setSelectedCategory('');
              }}
              className="text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}