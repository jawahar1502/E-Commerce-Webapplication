import { ShoppingCart, Heart } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
  onAddToCart?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  onProductClick?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  rating = 4.5,
  onAddToCart,
  onToggleFavorite,
  onProductClick
}: ProductCardProps) {
  return (
    <GlassCard hover3D className="group overflow-hidden cursor-pointer">
      <div
        className="relative overflow-hidden rounded-t-xl"
        onClick={() => onProductClick?.(id)}
      >
        <div className="aspect-square bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(168,85,247,0.1)] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite?.(id);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(0,212,255,0.2)] hover:border-[#00d4ff] transition-all duration-300"
        >
          <Heart className="w-5 h-5 text-white" />
        </button>

        {category && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[rgba(0,212,255,0.2)] backdrop-blur-sm border border-[rgba(0,212,255,0.3)] text-[#00d4ff] text-xs">
            {category}
          </div>
        )}
      </div>

      <div
        className="p-5 space-y-3"
        onClick={() => onProductClick?.(id)}
      >
        <div>
          <h3 className="text-white text-lg mb-1 group-hover:text-[#00d4ff] transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < Math.floor(rating) ? 'text-[#f59e0b]' : 'text-gray-600'}`}
              >
                ★
              </span>
            ))}
            <span className="text-gray-400 text-sm ml-1">({rating})</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl text-white">
            ${price.toFixed(2)}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
            }}
            className="p-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-[#0a0a0a] shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] hover:scale-110 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </GlassCard>
  );
}
