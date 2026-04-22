import { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { GlowButton } from './GlowButton';

const orderItems = [
  { name: 'Quantum Headphones', price: 299.99, quantity: 1 },
  { name: 'Neural Watch Pro', price: 599.99, quantity: 1 }
];

export function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const steps = ['Shipping', 'Payment', 'Review'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
          Checkout
        </h1>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep > index + 1
                        ? 'bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-[#0a0a0a]'
                        : currentStep === index + 1
                        ? 'bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-[#0a0a0a] shadow-[0_0_20px_rgba(0,212,255,0.5)]'
                        : 'bg-[rgba(255,255,255,0.1)] text-gray-400'
                    }`}
                  >
                    {currentStep > index + 1 ? '✓' : index + 1}
                  </div>
                  <span
                    className={`hidden sm:inline ${
                      currentStep >= index + 1 ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                      currentStep > index + 1
                        ? 'bg-gradient-to-r from-[#00d4ff] to-[#06b6d4]'
                        : 'bg-[rgba(255,255,255,0.1)]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GlassCard className="p-8">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl text-white mb-6">Shipping Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Address</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                        placeholder="123 Main St"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">City</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl text-white mb-6">Payment Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                          placeholder="1234 5678 9012 3456"
                        />
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">CVV</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 rounded-lg bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff]">
                      <Lock className="w-5 h-5" />
                      <span className="text-sm">Your payment information is secure and encrypted</span>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl text-white mb-6">Review Order</h2>
                  <div className="space-y-4 mb-6">
                    {orderItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-3 border-b border-[rgba(255,255,255,0.1)]"
                      >
                        <div>
                          <div className="text-white">{item.name}</div>
                          <div className="text-sm text-gray-400">Quantity: {item.quantity}</div>
                        </div>
                        <div className="text-white">${item.price.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.3)]">
                    <div className="text-gray-300 mb-2">
                      <strong>Shipping to:</strong> John Doe, 123 Main St, New York, 10001
                    </div>
                    <div className="text-gray-300">
                      <strong>Payment:</strong> **** **** **** 3456
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <GlowButton
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Back
                  </GlowButton>
                )}
                <GlowButton
                  variant="primary"
                  className="flex-1"
                  onClick={() => {
                    if (currentStep < 3) {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                >
                  {currentStep === 3 ? 'Place Order' : 'Continue'}
                </GlowButton>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-1">
            <GlassCard className="p-6 sticky top-28">
              <h3 className="text-xl text-white mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-[#00d4ff]">FREE</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-[rgba(255,255,255,0.1)]">
                  <div className="flex justify-between text-2xl text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
