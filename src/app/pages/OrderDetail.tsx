import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Package, MapPin, CreditCard, CheckCircle, Truck, Clock, XCircle } from 'lucide-react';

const statusSteps = [
  { key: 'processing', label: 'Pesanan Diproses', icon: Clock },
  { key: 'shipped', label: 'Sedang Dikirim', icon: Truck },
  { key: 'delivered', label: 'Pesanan Diterima', icon: CheckCircle },
];

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  processing: { label: 'Diproses', color: 'text-yellow-700', bg: 'bg-yellow-100' },
  shipped: { label: 'Dikirim', color: 'text-blue-700', bg: 'bg-blue-100' },
  delivered: { label: 'Diterima', color: 'text-green-700', bg: 'bg-green-100' },
  cancelled: { label: 'Dibatalkan', color: 'text-red-700', bg: 'bg-red-100' },
};

const paymentLabels: Record<string, string> = {
  'credit-card': 'Kartu Kredit/Debit',
  'e-wallet': 'E-Wallet (OVO, GoPay, Dana)',
  'bank-transfer': 'Transfer Bank',
};

function getStepIndex(status: string) {
  const idx = statusSteps.findIndex(s => s.key === status);
  return idx === -1 ? 0 : idx;
}

export function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const { getOrderById } = useOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const order = getOrderById(id!);

  if (!order) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-20 w-20 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Pesanan tidak ditemukan</h2>
          <Link to="/orders" className="text-yellow-600 hover:underline font-semibold">
            Kembali ke Riwayat Pesanan
          </Link>
        </div>
      </div>
    );
  }

  const status = statusConfig[order.status];
  const currentStep = getStepIndex(order.status);
  const date = new Date(order.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back */}
        <Link
          to="/orders"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-500 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Riwayat Pesanan
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Pesanan #{order.id}</h1>
              <p className="text-sm text-gray-500 mt-1">{date}</p>
            </div>
            <span className={`self-start sm:self-auto px-4 py-2 rounded-full text-sm font-bold ${status.bg} ${status.color}`}>
              {status.label}
            </span>
          </div>

          {/* Status tracker (hide if cancelled) */}
          {order.status !== 'cancelled' && (
            <div className="mt-8">
              <div className="flex items-center justify-between relative">
                {/* Progress line */}
                <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-500"
                    style={{ width: `${(currentStep / (statusSteps.length - 1)) * 100}%` }}
                  />
                </div>
                {statusSteps.map((step, i) => {
                  const Icon = step.icon;
                  const done = i <= currentStep;
                  return (
                    <div key={step.key} className="flex flex-col items-center z-10">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${done ? 'bg-yellow-400 border-yellow-400' : 'bg-white border-gray-300'}`}>
                        <Icon className={`h-5 w-5 ${done ? 'text-gray-900' : 'text-gray-400'}`} />
                      </div>
                      <p className={`text-xs mt-2 font-semibold text-center max-w-[80px] ${done ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-yellow-500" /> Item Pesanan
              </h2>
              <div className="space-y-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b last:border-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                      {item.size && <p className="text-sm text-gray-500">Ukuran: {item.size}</p>}
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm text-gray-500">Rp {item.price.toLocaleString('id-ID')} /pcs</p>
                      <p className="font-bold text-gray-900">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-500" /> Alamat Pengiriman
              </h2>
              <div className="text-gray-700 space-y-1">
                <p className="font-semibold">{order.shippingInfo.fullName}</p>
                <p>{order.shippingInfo.phone}</p>
                <p>{order.shippingInfo.email}</p>
                <p className="mt-2">
                  {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.province} {order.shippingInfo.postalCode}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="space-y-6">
            {/* Payment */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-yellow-500" /> Pembayaran
              </h2>
              <p className="text-gray-700">{paymentLabels[order.paymentMethod] || order.paymentMethod}</p>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Rincian Harga</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({order.items.reduce((t, i) => t + i.quantity, 0)} item)</span>
                  <span>Rp {order.subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Ongkos Kirim</span>
                  <span>
                    {order.shippingCost === 0 ? (
                      <span className="text-green-600 font-semibold">Gratis</span>
                    ) : (
                      `Rp ${order.shippingCost.toLocaleString('id-ID')}`
                    )}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-base">
                  <span>Total</span>
                  <span>Rp {order.total.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>

            <Link
              to="/products"
              className="block w-full text-center bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              Belanja Lagi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
