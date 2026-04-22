import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { GlassCard } from './GlassCard';

const orders = [
  {
    id: 'ORD-2024-001',
    date: '2026-04-20',
    total: 899.98,
    status: 'delivered',
    items: [
      { name: 'Quantum Headphones', quantity: 1, price: 299.99 },
      { name: 'Neural Watch Pro', quantity: 1, price: 599.99 }
    ]
  },
  {
    id: 'ORD-2024-002',
    date: '2026-04-18',
    total: 179.99,
    status: 'in-transit',
    items: [{ name: 'Photon Earbuds', quantity: 1, price: 179.99 }]
  },
  {
    id: 'ORD-2024-003',
    date: '2026-04-15',
    total: 149.99,
    status: 'processing',
    items: [{ name: 'Cyber Keyboard', quantity: 1, price: 149.99 }]
  },
  {
    id: 'ORD-2024-004',
    date: '2026-04-10',
    total: 199.99,
    status: 'cancelled',
    items: [{ name: 'Holographic Lens', quantity: 1, price: 199.99 }]
  }
];

const statusConfig = {
  delivered: {
    icon: CheckCircle,
    text: 'Delivered',
    color: 'text-[#10b981]',
    bg: 'bg-[rgba(16,185,129,0.1)]',
    border: 'border-[rgba(16,185,129,0.3)]'
  },
  'in-transit': {
    icon: Package,
    text: 'In Transit',
    color: 'text-[#00d4ff]',
    bg: 'bg-[rgba(0,212,255,0.1)]',
    border: 'border-[rgba(0,212,255,0.3)]'
  },
  processing: {
    icon: Clock,
    text: 'Processing',
    color: 'text-[#f59e0b]',
    bg: 'bg-[rgba(245,158,11,0.1)]',
    border: 'border-[rgba(245,158,11,0.3)]'
  },
  cancelled: {
    icon: XCircle,
    text: 'Cancelled',
    color: 'text-[#ef4444]',
    bg: 'bg-[rgba(239,68,68,0.1)]',
    border: 'border-[rgba(239,68,68,0.3)]'
  }
};

export function UserDashboard() {
  const totalSpent = orders
    .filter(order => order.status !== 'cancelled')
    .reduce((sum, order) => sum + order.total, 0);
  const activeOrders = orders.filter(
    order => order.status === 'processing' || order.status === 'in-transit'
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
          My Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard hover3D className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-1">Total Orders</p>
                <p className="text-3xl text-white">{orders.length}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#06b6d4] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                <Package className="w-6 h-6 text-[#0a0a0a]" />
              </div>
            </div>
          </GlassCard>

          <GlassCard hover3D className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-1">Active Orders</p>
                <p className="text-3xl text-white">{activeOrders}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </GlassCard>

          <GlassCard hover3D className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-1">Total Spent</p>
                <p className="text-3xl text-white">${totalSpent.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <span className="text-2xl text-white">💰</span>
              </div>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <h2 className="text-2xl text-white mb-6">Order History</h2>

          <div className="space-y-4">
            {orders.map(order => {
              const config = statusConfig[order.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;

              return (
                <div
                  key={order.id}
                  className="p-6 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl text-white">{order.id}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm border ${config.bg} ${config.color} ${config.border} flex items-center gap-1`}
                        >
                          <StatusIcon className="w-4 h-4" />
                          {config.text}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">Order Date: {order.date}</p>
                    </div>
                    <div className="text-2xl text-white">${order.total.toFixed(2)}</div>
                  </div>

                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm py-2 border-t border-[rgba(255,255,255,0.1)]"
                      >
                        <span className="text-gray-300">
                          {item.name} <span className="text-gray-500">x{item.quantity}</span>
                        </span>
                        <span className="text-gray-400">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  {order.status === 'in-transit' && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                        <span>Tracking Progress</span>
                        <span>75%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[rgba(255,255,255,0.1)] overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
