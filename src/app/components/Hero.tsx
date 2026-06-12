import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full text-sm font-bold">
                NEW COLLECTION 2024
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Style Your
              <span className="block text-yellow-400">Perfect Jacket</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Temukan koleksi jaket premium untuk setiap gaya dan kesempatan. 
              Dari casual hingga formal, kami punya yang Anda cari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/categories"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
              >
                Browse Categories
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700">
              <div>
                <p className="text-3xl font-bold text-yellow-400">500+</p>
                <p className="text-gray-400 text-sm">Produk Jaket</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">10K+</p>
                <p className="text-gray-400 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">4.9★</p>
                <p className="text-gray-400 text-sm">Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 rounded-xl p-4">
                    <svg className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Premium Quality</p>
                    <p className="text-gray-300">Material berkualitas tinggi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 rounded-xl p-4">
                    <svg className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Fast Shipping</p>
                    <p className="text-gray-300">Pengiriman cepat ke seluruh Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 rounded-xl p-4">
                    <svg className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Garansi Tukar</p>
                    <p className="text-gray-300">Jaminan uang kembali 30 hari</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}