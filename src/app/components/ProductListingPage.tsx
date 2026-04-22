import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { GlassCard } from './GlassCard';

const allProducts = [
  {
    id: '1',
    name: 'Quantum Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Audio',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Neural Watch Pro',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Wearables',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Holographic Lens',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    category: 'Optics',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Cyber Keyboard',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    category: 'Tech',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Plasma Mouse',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'Tech',
    rating: 4.5
  },
  {
    id: '6',
    name: 'Infinity Speaker',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Audio',
    rating: 4.8
  },
  {
    id: '7',
    name: 'Photon Earbuds',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    category: 'Audio',
    rating: 4.7
  },
  {
    id: '8',
    name: 'Stellar Tablet',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop',
    category: 'Tech',
    rating: 4.9
  }
];

const categories = ['All', 'Audio', 'Wearables', 'Optics', 'Tech'];
const priceRanges = ['All', '$0-$100', '$100-$300', '$300-$500', '$500+'];

interface ProductListingPageProps {
  onNavigate?: (page: string) => void;
}

export function ProductListingPage({ onNavigate }: ProductListingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(true);

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;

    let priceMatch = true;
    if (selectedPriceRange !== 'All') {
      if (selectedPriceRange === '$0-$100') priceMatch = product.price <= 100;
      else if (selectedPriceRange === '$100-$300') priceMatch = product.price > 100 && product.price <= 300;
      else if (selectedPriceRange === '$300-$500') priceMatch = product.price > 300 && product.price <= 500;
      else if (selectedPriceRange === '$500+') priceMatch = product.price > 500;
    }

    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              All Products
            </h1>
            <p className="text-gray-400">{filteredProducts.length} products found</p>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff] hover:bg-[rgba(0,212,255,0.2)] transition-all duration-300"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <GlassCard className="p-6 sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#00d4ff]" />
                <h3 className="text-xl text-white">Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-[rgba(0,212,255,0.2)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)]'
                            : 'text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[rgba(255,255,255,0.1)]">
                  <h4 className="text-white mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <button
                        key={range}
                        onClick={() => setSelectedPriceRange(range)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                          selectedPriceRange === range
                            ? 'bg-[rgba(168,85,247,0.2)] text-[#a855f7] border border-[rgba(168,85,247,0.3)]'
                            : 'text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onProductClick={() => onNavigate?.('product-detail')}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-400">No products found</p>
                <p className="text-gray-500 mt-2">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
