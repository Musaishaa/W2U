import { motion } from 'motion/react';
import { Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { useSearch } from '../context/SearchContext';

const promos = [
  {
    id: 1,
    title: 'Flash Sale - Bomber Jackets',
    description: 'Diskon hingga 50% untuk semua bomber jacket',
    image: 'https://images.unsplash.com/photo-1629353689974-af4d5c70440f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iZXIlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3NTEzNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '50%',
    category: 'Bomber Jacket',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 2,
    title: 'Leather Jacket Sale',
    description: 'Beli 1 gratis perawatan leather kit senilai 200rb',
    image: 'https://images.unsplash.com/photo-1606715791286-6e43e9838f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzc1MTMxMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: 'FREE GIFT',
    category: 'Leather Jacket',
    color: 'from-gray-800 to-gray-600'
  },
  {
    id: 3,
    title: 'Winter Collection 40% OFF',
    description: 'Diskon besar untuk parka dan puffer jacket',
    image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWZmZXIlMjBqYWNrZXQlMjB3aW50ZXJ8ZW58MXx8fHwxNzc1MTM1MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    discount: '40%',
    category: 'Puffer Jacket',
    color: 'from-blue-600 to-cyan-500'
  },
];

export function Promos() {
  const { setSelectedCategory } = useSearch();

  const handlePromoClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Tag className="h-8 w-8 text-red-500" />
            <h2 className="text-4xl font-bold text-gray-900">
              Special Deals
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Jangan lewatkan penawaran terbaik minggu ini
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/products" onClick={() => handlePromoClick(promo.category)}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-full">
                  <div className="aspect-[4/3] relative">
                    <ImageWithFallback
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${promo.color} opacity-80`} />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-white text-red-600 px-4 py-2 rounded-full font-bold text-xl shadow-lg">
                      {promo.discount.includes('%') ? `-${promo.discount}` : promo.discount}
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                      <p className="text-white/90 mb-4">{promo.description}</p>
                      <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors w-fit">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}