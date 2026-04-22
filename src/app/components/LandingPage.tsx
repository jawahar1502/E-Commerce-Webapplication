import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { GlowButton } from './GlowButton';
import { ProductCard } from './ProductCard';
import { GlassCard } from './GlassCard';

interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

const featuredProducts = [
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
  }
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast delivery'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Your data is protected'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50'
  }
];

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7] rounded-full blur-[120px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff]">
              🚀 Welcome to the Future of Shopping
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent leading-tight">
              Experience
              <br />
              Premium Tech
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Discover cutting-edge products with a shopping experience like never before
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => onNavigate?.('products')}
              >
                Explore Products <ArrowRight className="inline ml-2 w-5 h-5" />
              </GlowButton>
              <GlowButton variant="outline" size="lg">
                Learn More
              </GlowButton>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <GlassCard hover3D className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#06b6d4] flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                    <feature.icon className="w-8 h-8 text-[#0a0a0a]" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-gray-400">Handpicked premium tech for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <ProductCard
                  {...product}
                  onProductClick={() => onNavigate?.('product-detail')}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <GlowButton
              variant="primary"
              onClick={() => onNavigate?.('products')}
            >
              View All Products <ArrowRight className="inline ml-2 w-5 h-5" />
            </GlowButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#a855f7] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready to upgrade your tech?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of satisfied customers experiencing the future today
          </p>
          <GlowButton variant="secondary" size="lg">
            Get Started Now
          </GlowButton>
        </div>
      </section>
    </div>
  );
}
