import { motion } from 'motion/react';
import { Tag, Clock, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useSearch } from '../context/SearchContext';

const promos = [
  {
    id: 1,
    title: 'Flash Sale - Bomber Jackets',
    description: 'Diskon hingga 50% untuk semua bomber jacket. Berbagai warna dan size tersedia dengan harga spesial.',
    image: 'https://images.unsplash.com/photo-1629353689974-af4d5c70440f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iZXIlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3NTEzNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '50%',
    category: 'Bomber Jacket',
    validUntil: '31 April 2026',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 2,
    title: 'Leather Jacket Premium Sale',
    description: 'Beli leather jacket dan dapatkan leather care kit senilai 200rb gratis. Limited stock!',
    image: 'https://images.unsplash.com/photo-1606715791286-6e43e9838f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzc1MTMxMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 'FREE GIFT',
    category: 'Leather Jacket',
    validUntil: '15 April 2026',
    color: 'from-gray-800 to-gray-600'
  },
  {
    id: 3,
    title: 'Winter Collection 40% OFF',
    description: 'Diskon besar untuk parka dan puffer jacket. Perfect untuk musim dingin atau perjalanan ke negara dingin.',
    image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWZmZXIlMjBqYWNrZXQlMjB3aW50ZXJ8ZW58MXx8fHwxNzc1MTM1MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '40%',
    category: 'Puffer Jacket',
    validUntil: '30 April 2026',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 4,
    title: 'Denim Jacket Vintage Sale',
    description: 'Koleksi denim jacket dengan berbagai wash tersedia dengan harga spesial. Timeless piece untuk wardrobe Anda.',
    image: 'https://images.unsplash.com/photo-1657349038547-b18a07fb4329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldCUyMHN0eWxlfGVufDF8fHx8MTc3NTEzNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '35%',
    category: 'Denim Jacket',
    validUntil: '20 April 2026',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 5,
    title: 'Streetwear Hoodie Promo',
    description: 'Beli 2 hoodie jacket gratis 1. Mix and match berbagai warna dan design untuk style streetwear Anda.',
    image: 'https://images.unsplash.com/photo-1773650783799-38ba31d19a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBqYWNrZXQlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3NTEzNTM2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 'BUY 2 GET 1',
    category: 'Hoodie Jacket',
    validUntil: '25 April 2026',
    color: 'from-purple-600 to-pink-500'
  },
  {
    id: 6,
    title: 'Formal Blazer Discount',
    description: 'Diskon 30% untuk semua blazer formal. Essential untuk professional wardrobe dengan kualitas premium.',
    image: 'https://images.unsplash.com/photo-1770364022753-7bb3ffe973dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGF6ZXIlMjBqYWNrZXQlMjBmb3JtYWx8ZW58MXx8fHwxNzc1MTM1MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '30%',
    category: 'Blazer',
    validUntil: '28 April 2026',
    color: 'from-slate-700 to-gray-800'
  },
];

export function Promo() {
  const { setSelectedCategory } = useSearch();

  const handlePromoClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Tag className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Special Deals & Promos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jangan lewatkan penawaran terbaik untuk koleksi jaket premium kami. Hemat hingga 50%!
          </p>
        </motion.div>

        {/* Promo Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promos.map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10]">
                      <ImageWithFallback
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${promo.color} opacity-80`} />
                      
                      {/* Discount Badge */}
                      <div className="absolute top-4 right-4 bg-white text-red-600 px-5 py-3 rounded-full font-bold text-xl shadow-lg">
                        {promo.discount.includes('%') ? `-${promo.discount}` : promo.discount}
                      </div>

                      {/* Flash Icon */}
                      <div className="absolute top-4 left-4 bg-yellow-400 p-3 rounded-full">
                        <Zap className="h-6 w-6 text-gray-900 fill-gray-900" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                        <Clock className="h-4 w-4" />
                        <span>Valid until {promo.validUntil}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {promo.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        {promo.description}
                      </p>

                      <Link
                        to="/products"
                        onClick={() => handlePromoClick(promo.category)}
                        className="block w-full bg-gray-900 text-yellow-400 text-center py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to Get Exclusive Deals?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and get notifications for exclusive promos
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
              />
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}