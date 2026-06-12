import { motion } from 'motion/react';
import { Search, ShoppingCart, CreditCard, Package, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

const WA_LINK = `https://wa.me/6281213854451?text=${encodeURIComponent('Halo W2U, saya ingin bertanya tentang cara pemesanan.')}`;

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Cari Produk',
    color: 'bg-blue-100 text-blue-700',
    accent: 'border-blue-400',
    description: 'Jelajahi koleksi jaket kami di halaman Products. Gunakan filter kategori (Bomber, Denim, Leather, dll.) atau fitur pencarian untuk menemukan jaket impian Anda.',
    tips: ['Gunakan filter kategori untuk mempersempit pilihan', 'Klik gambar produk untuk melihat detail lengkap', 'Cek tabel ukuran sebelum memilih size'],
  },
  {
    number: '02',
    icon: ShoppingCart,
    title: 'Tambah ke Keranjang',
    color: 'bg-yellow-100 text-yellow-700',
    accent: 'border-yellow-400',
    description: 'Pilih ukuran yang sesuai lalu klik tombol "Tambah ke Keranjang". Anda bisa menambahkan beberapa produk sekaligus sebelum checkout.',
    tips: ['Pilih ukuran dengan tepat sebelum menambahkan', 'Anda bisa tambah lebih dari 1 item', 'Cek isi keranjang di ikon cart (pojok kanan atas)'],
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Checkout & Pembayaran',
    color: 'bg-purple-100 text-purple-700',
    accent: 'border-purple-400',
    description: 'Login atau daftar akun terlebih dahulu, lalu isi alamat pengiriman dan pilih metode pembayaran. Kami menerima kartu kredit/debit, e-wallet, dan transfer bank.',
    tips: ['Pastikan alamat pengiriman sudah benar', 'Pembelian Rp 500.000+ gratis ongkir', 'Pilih metode pembayaran yang paling mudah'],
  },
  {
    number: '04',
    icon: Package,
    title: 'Pesanan Diproses',
    color: 'bg-orange-100 text-orange-700',
    accent: 'border-orange-400',
    description: 'Setelah pembayaran dikonfirmasi, pesanan Anda akan segera diproses dan dikemas dengan hati-hati. Estimasi pengiriman 2-5 hari kerja.',
    tips: ['Pantau status pesanan di "Riwayat Pesanan"', 'Kami akan mengirim notifikasi via email', 'Hubungi kami jika butuh info tracking'],
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Pesanan Diterima',
    color: 'bg-green-100 text-green-700',
    accent: 'border-green-400',
    description: 'Pesanan tiba di alamat Anda! Pastikan cek kondisi paket sebelum tanda tangan. Jika ada masalah, hubungi kami dalam 2x24 jam setelah diterima.',
    tips: ['Periksa kondisi paket saat diterima', 'Foto paket jika ada kerusakan', 'Hubungi kami jika produk tidak sesuai'],
  },
];

const faqs = [
  {
    q: 'Berapa lama proses pengiriman?',
    a: 'Estimasi 2-5 hari kerja tergantung lokasi. Untuk area Sukabumi dan sekitarnya bisa lebih cepat.',
  },
  {
    q: 'Apakah bisa return/tukar produk?',
    a: 'Ya, kami menerima pengembalian dalam 7 hari jika produk cacat atau tidak sesuai pesanan. Hubungi kami via WhatsApp.',
  },
  {
    q: 'Bagaimana cara cek status pesanan?',
    a: 'Login ke akun Anda → klik ikon profil → "Riwayat Pesanan". Status pesanan akan diperbarui secara otomatis.',
  },
  {
    q: 'Apakah bisa bayar di tempat (COD)?',
    a: 'Saat ini kami belum menyediakan COD. Tersedia pembayaran via kartu kredit/debit, e-wallet (OVO, GoPay, Dana), dan transfer bank.',
  },
  {
    q: 'Bagaimana jika ukuran tidak pas?',
    a: 'Kami menyediakan panduan ukuran di setiap halaman produk. Jika masih ragu, hubungi kami via WhatsApp sebelum memesan.',
  },
];

export function HowToBuy() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Cara Belanja di W2U</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Berbelanja di W2U sangat mudah! Ikuti langkah-langkah berikut untuk mendapatkan jaket impian Anda.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-2xl shadow-md border-l-4 ${step.accent} p-6 md:p-8`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start gap-4 md:w-64 flex-shrink-0">
                    <span className="text-5xl font-black text-gray-100">{step.number}</span>
                    <div className={`rounded-xl p-3 ${step.color} flex-shrink-0 mt-1`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <ul className="space-y-1">
                      {step.tips.map((tip, j) => (
                        <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Pertanyaan Umum (FAQ)</h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <p className="font-bold text-gray-900 mb-2">❓ {faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Masih Ada Pertanyaan?</h2>
          <p className="text-gray-300 mb-8 text-lg">Tim kami siap membantu Anda kapan saja via WhatsApp!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp
            </a>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              Mulai Belanja
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
