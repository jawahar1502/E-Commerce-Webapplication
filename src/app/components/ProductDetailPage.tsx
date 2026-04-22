import { useState } from 'react';
import { Star, ShoppingCart, Heart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { GlowButton } from './GlowButton';

const productImages = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop'
];

const features = [
  { icon: Shield, text: '2 Year Warranty' },
  { icon: Truck, text: 'Free Shipping' },
  { icon: RotateCcw, text: '30 Day Returns' }
];

const specifications = [
  { label: 'Brand', value: 'Quantum Audio' },
  { label: 'Model', value: 'QH-2000X' },
  { label: 'Connectivity', value: 'Bluetooth 5.3, USB-C' },
  { label: 'Battery Life', value: '40 hours' },
  { label: 'Weight', value: '250g' }
];

export function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <GlassCard className="overflow-hidden mb-4">
              <div className="aspect-square bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(168,85,247,0.1)] flex items-center justify-center">
                <img
                  src={productImages[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </GlassCard>

            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-2 ring-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-square bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(168,85,247,0.1)]">
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="inline-block mb-3 px-3 py-1 rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff] text-sm">
                Audio
              </div>
              <h1 className="text-4xl md:text-5xl text-white mb-3">
                Quantum Headphones
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? 'text-[#f59e0b] fill-[#f59e0b]' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">(4.8) 256 reviews</span>
              </div>
              <div className="text-5xl text-white mb-6">$299.99</div>
            </div>

            <GlassCard className="p-6">
              <p className="text-gray-300 leading-relaxed">
                Experience audio perfection with our Quantum Headphones. Featuring advanced noise
                cancellation, premium drivers, and luxurious comfort for extended listening sessions.
                Engineered for audiophiles and professionals alike.
              </p>
            </GlassCard>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] text-white flex items-center justify-center transition-all duration-300"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-2xl text-white w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] text-white flex items-center justify-center transition-all duration-300"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <GlowButton variant="primary" className="flex-1">
                <ShoppingCart className="inline w-5 h-5 mr-2" />
                Add to Cart
              </GlowButton>

              <button className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#ec4899] hover:bg-[rgba(236,72,153,0.1)] text-white flex items-center justify-center transition-all duration-300">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <GlassCard key={index} className="p-4 text-center">
                  <feature.icon className="w-6 h-6 text-[#00d4ff] mx-auto mb-2" />
                  <p className="text-sm text-gray-300">{feature.text}</p>
                </GlassCard>
              ))}
            </div>

            <GlassCard className="p-6">
              <h3 className="text-xl text-white mb-4">Specifications</h3>
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-[rgba(255,255,255,0.1)] last:border-0"
                  >
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
