import { CheckCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

export function OrderComplete() {
  const location = useLocation();
  const orderId = (location.state as { orderId?: string })?.orderId || ('W2U' + Date.now().toString().slice(-6));

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Pesanan Berhasil Dibuat!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Terima kasih telah berbelanja di W2U
          </p>
          <p className="text-gray-500 mb-8">
            Kami akan mengirimkan konfirmasi pesanan ke email Anda
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">Nomor Pesanan</p>
            <p className="text-2xl font-bold text-gray-900">#{orderId}</p>
          </div>

          <div className="space-y-3">
            <Link
              to="/orders"
              className="block w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Lihat Riwayat Pesanan
            </Link>
            <Link
              to="/products"
              className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Lanjut Belanja
            </Link>
            <Link
              to="/"
              className="block w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}