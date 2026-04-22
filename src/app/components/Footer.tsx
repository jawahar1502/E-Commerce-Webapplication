import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[rgba(10,10,10,0.95)] border-t border-[rgba(255,255,255,0.1)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#a855f7] shadow-[0_0_20px_rgba(0,212,255,0.5)] flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <span className="text-2xl bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Experience the future of shopping with premium tech products and cutting-edge design.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.1)] flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-[#00d4ff]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.1)] flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#00d4ff]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.1)] flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#00d4ff]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.1)] flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-[#00d4ff]" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] text-center text-gray-400 text-sm">
          <p>&copy; 2026 NEXUS. All rights reserved. Built with cutting-edge technology.</p>
        </div>
      </div>
    </footer>
  );
}
