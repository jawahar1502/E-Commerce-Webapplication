import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { GlowButton } from './GlowButton';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

const initialCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Quantum Headphones',
    price: 299.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    category: 'Audio'
  },
  {
    id: '2',
    name: 'Neural Watch Pro',
    price: 599.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
    category: 'Wearables'
  }
];

interface CartPageProps {
  onNavigate?: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <GlassCard className="p-12 text-center">
            <p className="text-2xl text-gray-400 mb-4">Your cart is empty</p>
            <GlowButton variant="primary" onClick={() => onNavigate?.('products')}>
              Continue Shopping
            </GlowButton>
          </GlassCard>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <GlassCard key={item.id} className="p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(168,85,247,0.1)]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="inline-block px-2 py-1 rounded text-xs bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)] mb-2">
                              {item.category}
                            </span>
                            <h3 className="text-xl text-white">{item.name}</h3>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 rounded-lg hover:bg-[rgba(239,68,68,0.2)] hover:text-red-400 text-gray-400 transition-all duration-300"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] text-white flex items-center justify-center transition-all duration-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-lg text-white w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] text-white flex items-center justify-center transition-all duration-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-2xl text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="lg:col-span-1">
              <GlassCard className="p-6 sticky top-28">
                <h3 className="text-2xl text-white mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-[#00d4ff]' : ''}>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="pt-4 border-t border-[rgba(255,255,255,0.1)]">
                    <div className="flex justify-between text-2xl text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <GlowButton
                  variant="primary"
                  className="w-full mb-3"
                  onClick={() => onNavigate?.('checkout')}
                >
                  Proceed to Checkout <ArrowRight className="inline ml-2 w-5 h-5" />
                </GlowButton>

                <GlowButton
                  variant="outline"
                  className="w-full"
                  onClick={() => onNavigate?.('products')}
                >
                  Continue Shopping
                </GlowButton>

                {shipping > 0 && (
                  <div className="mt-4 p-3 rounded-lg bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff] text-sm text-center">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
              </GlassCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
