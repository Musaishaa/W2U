import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, Phone, Clock } from 'lucide-react';

const WA_NUMBER = '6281213854451';
const WA_MESSAGE = encodeURIComponent('Halo W2U, saya ingin bertanya tentang produk jaket Anda.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const EMAIL = 'musaxx@gmail.com';

export function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Hubungi Kami</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Punya pertanyaan tentang produk, pesanan, atau layanan kami? Kami siap membantu Anda!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left — Contact Cards */}
          <div className="space-y-5">

            {/* WhatsApp */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-5 bg-white rounded-2xl shadow-md p-6 border-2 border-transparent hover:border-green-400 hover:shadow-lg transition-all group"
            >
              <div className="bg-green-500 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Chat Langsung</p>
                <p className="text-xl font-bold text-gray-900">WhatsApp</p>
                <p className="text-green-600 font-semibold">0812-1385-4451</p>
                <p className="text-sm text-gray-500 mt-1">Klik untuk chat langsung di WhatsApp →</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-5 bg-white rounded-2xl shadow-md p-6 border-2 border-transparent hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div className="bg-blue-500 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Kirim Email</p>
                <p className="text-xl font-bold text-gray-900">Email</p>
                <p className="text-blue-600 font-semibold">{EMAIL}</p>
                <p className="text-sm text-gray-500 mt-1">Klik untuk buka aplikasi email →</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+6281213854451"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-5 bg-white rounded-2xl shadow-md p-6 border-2 border-transparent hover:border-yellow-400 hover:shadow-lg transition-all group"
            >
              <div className="bg-yellow-400 rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-gray-900" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Telepon</p>
                <p className="text-xl font-bold text-gray-900">Nomor HP</p>
                <p className="text-yellow-600 font-semibold">0812-1385-4451</p>
                <p className="text-sm text-gray-500 mt-1">Klik untuk menelepon langsung →</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-5 bg-white rounded-2xl shadow-md p-6"
            >
              <div className="bg-red-100 rounded-xl p-4 flex-shrink-0">
                <MapPin className="h-8 w-8 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Lokasi</p>
                <p className="text-xl font-bold text-gray-900">Alamat Toko</p>
                <p className="text-gray-600 font-semibold">Lembursitu, Kota Sukabumi</p>
                <p className="text-sm text-gray-500 mt-1">Jawa Barat, Indonesia</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Jam Operasional */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-yellow-400" />
                <h2 className="text-xl font-bold">Jam Operasional</h2>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Senin – Jumat', time: '08.00 – 21.00 WIB' },
                  { day: 'Sabtu', time: '09.00 – 20.00 WIB' },
                  { day: 'Minggu', time: '10.00 – 18.00 WIB' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gray-700 pb-3 last:border-0">
                    <span className="text-gray-300">{item.day}</span>
                    <span className="text-yellow-400 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                * Untuk WhatsApp, kami biasanya membalas dalam 1-2 jam selama jam operasional.
              </p>
            </div>

            {/* CTA WA besar */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-bold text-lg transition-colors shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              Chat WhatsApp Sekarang
            </a>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                💡 <strong>Tips:</strong> Untuk respon paling cepat, hubungi kami melalui WhatsApp.
                Sertakan pertanyaan lengkap Anda dan tim kami akan segera membantu!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
