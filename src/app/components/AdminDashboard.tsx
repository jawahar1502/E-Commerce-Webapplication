import { useState } from 'react';
import { Package, DollarSign, Users, TrendingUp, Plus, Edit, Trash2 } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { GlowButton } from './GlowButton';

const stats = [
  {
    label: 'Total Revenue',
    value: '$124,592',
    change: '+12.5%',
    icon: DollarSign,
    gradient: 'from-[#00d4ff] to-[#06b6d4]'
  },
  {
    label: 'Total Products',
    value: '156',
    change: '+8',
    icon: Package,
    gradient: 'from-[#a855f7] to-[#ec4899]'
  },
  {
    label: 'Total Customers',
    value: '2,543',
    change: '+156',
    icon: Users,
    gradient: 'from-[#10b981] to-[#059669]'
  },
  {
    label: 'Growth Rate',
    value: '23.5%',
    change: '+4.3%',
    icon: TrendingUp,
    gradient: 'from-[#f59e0b] to-[#ea580c]'
  }
];

const products = [
  { id: '1', name: 'Quantum Headphones', category: 'Audio', price: 299.99, stock: 45, sales: 128 },
  { id: '2', name: 'Neural Watch Pro', category: 'Wearables', price: 599.99, stock: 23, sales: 89 },
  { id: '3', name: 'Holographic Lens', category: 'Optics', price: 199.99, stock: 67, sales: 156 },
  { id: '4', name: 'Cyber Keyboard', category: 'Tech', price: 149.99, stock: 92, sales: 234 },
  { id: '5', name: 'Plasma Mouse', category: 'Tech', price: 89.99, stock: 156, sales: 312 }
];

const recentOrders = [
  { id: 'ORD-2024-105', customer: 'John Doe', total: 899.98, status: 'processing' },
  { id: 'ORD-2024-104', customer: 'Jane Smith', total: 179.99, status: 'shipped' },
  { id: 'ORD-2024-103', customer: 'Mike Johnson', total: 299.99, status: 'delivered' },
  { id: 'ORD-2024-102', customer: 'Sarah Williams', total: 599.99, status: 'processing' }
];

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <GlowButton variant="primary">
            <Plus className="w-5 h-5 mr-2 inline" />
            Add Product
          </GlowButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={index} hover3D className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-gray-400">{stat.label}</p>
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.3)]`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-3xl text-white mb-1">{stat.value}</p>
                <p className="text-sm text-[#10b981]">{stat.change}</p>
              </GlassCard>
            );
          })}
        </div>

        <div className="mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 rounded-t-lg transition-all duration-300 ${
                activeTab === 'products'
                  ? 'bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border-b-2 border-[#00d4ff]'
                  : 'text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-6 py-3 rounded-t-lg transition-all duration-300 ${
                activeTab === 'orders'
                  ? 'bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border-b-2 border-[#00d4ff]'
                  : 'text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              Recent Orders
            </button>
          </div>
        </div>

        <GlassCard className="overflow-hidden">
          {activeTab === 'products' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[rgba(255,255,255,0.05)]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-gray-400">Product</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400">Category</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400">Price</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400">Stock</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400">Sales</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={product.id}
                      className={`border-t border-[rgba(255,255,255,0.1)] hover:bg-[rgba(0,212,255,0.05)] transition-colors duration-300 ${
                        index % 2 === 0 ? 'bg-[rgba(255,255,255,0.02)]' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-white">{product.name}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-xs bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)]">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            product.stock > 50
                              ? 'bg-[rgba(16,185,129,0.1)] text-[#10b981] border border-[rgba(16,185,129,0.3)]'
                              : product.stock > 20
                              ? 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b] border border-[rgba(245,158,11,0.3)]'
                              : 'bg-[rgba(239,68,68,0.1)] text-[#ef4444] border border-[rgba(239,68,68,0.3)]'
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{product.sales}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 rounded-lg hover:bg-[rgba(0,212,255,0.2)] text-[#00d4ff] transition-all duration-300">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-[rgba(239,68,68,0.2)] text-[#ef4444] transition-all duration-300">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map(order => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300"
                  >
                    <div>
                      <p className="text-white mb-1">{order.id}</p>
                      <p className="text-sm text-gray-400">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white mb-1">${order.total.toFixed(2)}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          order.status === 'delivered'
                            ? 'bg-[rgba(16,185,129,0.1)] text-[#10b981]'
                            : order.status === 'shipped'
                            ? 'bg-[rgba(0,212,255,0.1)] text-[#00d4ff]'
                            : 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b]'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
