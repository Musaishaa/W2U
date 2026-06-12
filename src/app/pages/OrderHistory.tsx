import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { Package, ChevronRight, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  processing: { label: 'Diproses', color: 'text-yellow-700', bg: 'bg-yellow-100' },
  shipped: { label: 'Dikirim', color: 'text-blue-700', bg: 'bg-blue-100' },
  delivered: { label: 'Diterima', color: 'text-green-700', bg: 'bg-green-100' },
  cancelled: { label: 'Dibatalkan', color: 'text-red-700', bg: 'bg-red-100' },
};

export function OrderHistory() {
  const { isAuthenticated } = useAuth();
  const { orders } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/orders' } } });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center space-x-3 mb-8">
          <Package className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-900">Riwayat Pesanan</h1>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-24">
            <ShoppingBag className="h-20 w-20 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Belum ada pesanan</h2>
            <p className="text-gray-500 mb-8">Yuk, mulai belanja jaket favoritmu!</p>
            <Link
              to="/products"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              Belanja Sekarang
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => {
              const status = statusConfig[order.status];
              const date = new Date(order.createdAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
              return (
                <Link
                  key={order.id}
                  to={`/orders/${order.id}`}
                  className="block bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md hover:border-yellow-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-gray-900 text-lg">#{order.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${status.bg} ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{date}</p>

                      {/* Thumbnails */}
                      <div className="flex items-center gap-2">
                        {order.items.slice(0, 4).map((item, i) => (
                          <div key={i} className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {order.items.length > 4 && (
                          <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 flex-shrink-0">
                            +{order.items.length - 4}
                          </div>
                        )}
                        <span className="text-sm text-gray-500 ml-1">
                          {order.items.reduce((t, i) => t + i.quantity, 0)} item
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Total Pembayaran</p>
                        <p className="text-xl font-bold text-gray-900">
                          Rp {order.total.toLocaleString('id-ID')}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
