import { motion } from 'motion/react';
import { Target, Users, Award, Heart, Truck, Shield, CreditCard, Headphones, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function About() {
  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'Gratis ongkir untuk pembelian minimal Rp 500.000' },
    { icon: Shield, title: 'Quality Guarantee', description: 'Semua produk bergaransi resmi 100% original' },
    { icon: CreditCard, title: 'Secure Payment', description: 'Berbagai metode pembayaran yang aman dan terpercaya' },
    { icon: Headphones, title: '24/7 Support', description: 'Layanan pelanggan siap membantu kapan saja' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Misi Kami',
      description: 'Menghadirkan jaket berkualitas premium yang dapat dinikmati oleh semua kalangan dengan harga yang kompetitif.',
    },
    {
      icon: Users,
      title: 'Tim Berpengalaman',
      description: 'Didukung oleh tim yang berpengalaman di industri fashion dengan layanan pelanggan yang responsif.',
    },
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Setiap jaket dipilih dengan cermat berdasarkan kualitas bahan, kenyamanan, desain modern, dan daya tahan.',
    },
    {
      icon: Heart,
      title: 'Kepuasan Pelanggan',
      description: 'Dengan 10.000+ pelanggan puas dan rating 4,9/5, kepuasan Anda adalah prioritas utama kami.',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Pelanggan Puas' },
    { number: '500+', label: 'Koleksi Jaket' },
    { number: '5+', label: 'Tahun Berdiri' },
    { number: '4.9★', label: 'Rating Kepuasan' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl py-16 px-8 mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold mb-4">Tentang W2U</h1>
            <p className="text-yellow-400 text-lg font-semibold mb-6">W2U – Wear Your Style, Anytime, Anywhere.</p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Wear To You — destinasi terpercaya untuk koleksi jaket berkualitas premium di Indonesia, hadir sejak 2020.
            </p>
          </motion.div>
        </section>

        {/* Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Kisah Kami</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  W2U (Wear To You) didirikan pada tahun 2020 dengan visi menghadirkan jaket berkualitas premium
                  yang dapat dinikmati oleh semua kalangan. Berawal dari kecintaan terhadap dunia fashion dan
                  komitmen untuk menyediakan produk terbaik, W2U terus berkembang menjadi salah satu destinasi
                  terpercaya untuk berbagai koleksi jaket berkualitas di Indonesia.
                </p>
                <p>
                  Kami percaya bahwa jaket bukan hanya sekadar pakaian pelindung, tetapi juga bagian dari identitas
                  dan gaya hidup. Oleh karena itu, setiap produk yang kami hadirkan dipilih dengan cermat berdasarkan
                  kualitas bahan, kenyamanan, desain modern, serta daya tahan yang mampu menemani berbagai aktivitas
                  sehari-hari.
                </p>
                <p>
                  Selama lebih dari lima tahun melayani pelanggan di seluruh Indonesia, W2U telah dipercaya oleh
                  10.000+ pelanggan, menghadirkan 500+ pilihan produk, serta mempertahankan rating kepuasan
                  pelanggan 4,9/5. Kami terus berupaya menghadirkan koleksi terbaru yang mengikuti tren fashion
                  tanpa mengesampingkan kualitas dan kenyamanan.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</p>
                      <p className="text-gray-300 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                  <p className="text-yellow-400 font-semibold italic">
                    "W2U – Wear Your Style, Anytime, Anywhere."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Prinsip yang memandu setiap keputusan dan tindakan kami</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100 flex items-start space-x-4"
                >
                  <div className="bg-yellow-100 rounded-full p-4 flex-shrink-0">
                    <Icon className="h-7 w-7 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Keuntungan berbelanja bersama W2U</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-16 bg-gray-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Temukan Kami</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-yellow-400 rounded-full p-4">
                <MapPin className="h-6 w-6 text-gray-900" />
              </div>
              <p className="font-semibold text-yellow-400">Lokasi</p>
              <p className="text-gray-300 text-sm">Lembursitu, Kota Sukabumi</p>
            </div>
            <a
              href="https://wa.me/6281213854451"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="bg-green-500 rounded-full p-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <p className="font-semibold text-yellow-400">WhatsApp / HP</p>
              <p className="text-gray-300 text-sm">0812-1385-4451</p>
            </a>
            <a
              href="mailto:musaxx@gmail.com"
              className="flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="bg-blue-500 rounded-full p-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <p className="font-semibold text-yellow-400">Email</p>
              <p className="text-gray-300 text-sm">musaxx@gmail.com</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Upgrade Gaya Anda?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Bergabunglah bersama ribuan pelanggan yang telah mempercayai W2U untuk koleksi jaket premium mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
              Belanja Sekarang
            </Link>
            <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
