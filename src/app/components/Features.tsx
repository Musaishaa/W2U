import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Truck,
    title: 'Pengiriman Gratis',
    description: 'Gratis ongkir untuk pembelian minimal Rp 500.000'
  },
  {
    icon: Shield,
    title: 'Garansi Resmi',
    description: 'Semua produk bergaransi resmi 100% original'
  },
  {
    icon: CreditCard,
    title: 'Pembayaran Aman',
    description: 'Berbagai metode pembayaran yang aman dan terpercaya'
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Layanan pelanggan siap membantu 24/7'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}