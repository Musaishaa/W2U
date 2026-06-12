import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Dapatkan Penawaran Terbaik
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Berlangganan newsletter kami dan dapatkan diskon hingga 30% untuk produk pilihan
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-3">
              * Kami tidak akan membagikan email Anda kepada pihak lain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}