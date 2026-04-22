import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemCount?: number;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ cartItemCount = 0, onNavigate, currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'admin', label: 'Admin' }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(10,10,10,0.8)] border-b border-[rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#a855f7] shadow-[0_0_20px_rgba(0,212,255,0.5)] flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,212,255,0.7)] transition-all duration-300">
              <span className="text-white text-xl">⚡</span>
            </div>
            <span className="text-2xl bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`relative text-white hover:text-[#00d4ff] transition-colors duration-300 ${
                  currentPage === item.id ? 'text-[#00d4ff]' : ''
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] shadow-[0_0_10px_rgba(0,212,255,0.6)]" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] transition-colors duration-300">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-48"
              />
            </div>

            <button className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300">
              <Heart className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => onNavigate?.('cart')}
              className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-[#0a0a0a] text-xs flex items-center justify-center shadow-[0_0_10px_rgba(0,212,255,0.6)]">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate?.('login')}
              className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300"
            >
              <User className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.1)] bg-[rgba(10,10,10,0.95)] backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate?.(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-[rgba(0,212,255,0.1)] hover:text-[#00d4ff] transition-all duration-300 ${
                  currentPage === item.id ? 'bg-[rgba(0,212,255,0.1)] text-[#00d4ff]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
