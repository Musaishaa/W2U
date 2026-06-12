import { Facebook, Instagram, Twitter, Youtube, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router';

const WA_LINK = `https://wa.me/6281213854451?text=${encodeURIComponent('Halo W2U, saya ingin bertanya tentang produk jaket Anda.')}`;

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-1">W2U</h3>
            <p className="text-xs text-gray-500 mb-3">Wear Your Style, Anytime, Anywhere.</p>
            <p className="text-sm mb-5 leading-relaxed">
              Toko jaket premium terpercaya sejak 2020. Menghadirkan koleksi terlengkap dengan kualitas terbaik untuk semua kalangan.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:text-yellow-400 hover:bg-gray-700 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Kategori Produk</h4>
            <ul className="space-y-2 text-sm">
              {['Bomber Jacket', 'Denim Jacket', 'Leather Jacket', 'Hoodie Jacket', 'Varsity Jacket', 'Parka Jacket'].map(cat => (
                <li key={cat}>
                  <Link to="/products" className="hover:text-yellow-400 transition-colors">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-to-buy" className="hover:text-yellow-400 transition-colors">Cara Belanja</Link></li>
              <li><Link to="/orders" className="hover:text-yellow-400 transition-colors">Riwayat Pesanan</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Hubungi Kami</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Tentang W2U</Link></li>
              <li><Link to="/promo" className="hover:text-yellow-400 transition-colors">Promo & Deals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>Lembursitu, Kota Sukabumi, Jawa Barat</span>
              </li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>0812-1385-4451 (WA)</span>
                </a>
              </li>
              <li>
                <a href="tel:+6281213854451" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  <span>0812-1385-4451</span>
                </a>
              </li>
              <li>
                <a href="mailto:musaxx@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>musaxx@gmail.com</span>
                </a>
              </li>
            </ul>

            {/* WA Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center space-y-1">
          <p>&copy; {new Date().getFullYear()} W2U – Wear To You. All rights reserved.</p>
          <p className="text-gray-500 italic">W2U – Wear Your Style, Anytime, Anywhere.</p>
        </div>
      </div>
    </footer>
  );
}
