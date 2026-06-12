import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { useSearch } from '../context/SearchContext';

const categories = [
  {
    id: 1,
    name: 'Bomber Jacket',
    image: 'https://images.unsplash.com/photo-1629353689974-af4d5c70440f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iZXIlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3NTEzNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '50+ Produk',
    description: 'Gaya kasual yang timeless'
  },
  {
    id: 2,
    name: 'Denim Jacket',
    image: 'https://images.unsplash.com/photo-1657349038547-b18a07fb4329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldCUyMHN0eWxlfGVufDF8fHx8MTc3NTEzNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '45+ Produk',
    description: 'Klasik dan versatile'
  },
  {
    id: 3,
    name: 'Leather Jacket',
    image: 'https://images.unsplash.com/photo-1606715791286-6e43e9838f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzc1MTMxMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '30+ Produk',
    description: 'Premium dan stylish'
  },
  {
    id: 4,
    name: 'Hoodie Jacket',
    image: 'https://images.unsplash.com/photo-1773650783799-38ba31d19a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBqYWNrZXQlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3NTEzNTM2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '60+ Produk',
    description: 'Streetwear essential'
  },
  {
    id: 5,
    name: 'Varsity Jacket',
    image: 'https://images.unsplash.com/photo-1640182837191-0620ae2d9b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJzaXR5JTIwamFja2V0JTIwc3BvcnR8ZW58MXx8fHwxNzc1MTM1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '35+ Produk',
    description: 'College vibes'
  },
  {
    id: 6,
    name: 'Windbreaker',
    image: 'https://images.unsplash.com/photo-1773848090001-e8245ee48957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kYnJlYWtlciUyMGphY2tldCUyMG91dGRvb3J8ZW58MXx8fHwxNzc1MTM1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '40+ Produk',
    description: 'Lightweight & functional'
  },
  {
    id: 7,
    name: 'Parka Jacket',
    image: 'https://images.unsplash.com/photo-1557479613-9f88c8450c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrYSUyMGphY2tldCUyMHdpbnRlcnxlbnwxfHx8fDE3NzUxMzUzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '25+ Produk',
    description: 'Winter essential'
  },
  {
    id: 8,
    name: 'Trench Coat',
    image: 'https://images.unsplash.com/photo-1563671889-7bfa8c578a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuY2glMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzUwOTUzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '20+ Produk',
    description: 'Elegant & sophisticated'
  },
  {
    id: 9,
    name: 'Blazer',
    image: 'https://images.unsplash.com/photo-1770364022753-7bb3ffe973dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGF6ZXIlMjBqYWNrZXQlMjBmb3JtYWx8ZW58MXx8fHwxNzc1MTM1MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '55+ Produk',
    description: 'Professional look'
  },
  {
    id: 10,
    name: 'Puffer Jacket',
    image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWZmZXIlMjBqYWNrZXQlMjB3aW50ZXJ8ZW58MXx8fHwxNzc1MTM1MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '50+ Produk',
    description: 'Warm & trendy'
  },
];

export function Categories() {
  const { setSelectedCategory } = useSearch();

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600">
            Temukan jaket yang sesuai dengan gaya Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to="/products"
                onClick={() => handleCategoryClick(category.name)}
                className="group block relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/4] relative">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{category.description}</p>
                    <p className="text-xs text-yellow-400 font-semibold">{category.count}</p>
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