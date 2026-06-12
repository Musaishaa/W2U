import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useSearch } from '../context/SearchContext';

const categories = [
  {
    id: 1,
    name: 'Bomber Jacket',
    image: 'https://images.unsplash.com/photo-1629353689974-af4d5c70440f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iZXIlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3NTEzNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '50+ Produk',
    description: 'Jaket bomber klasik dengan style casual yang timeless. Perfect untuk tampilan kasual sehari-hari.'
  },
  {
    id: 2,
    name: 'Denim Jacket',
    image: 'https://images.unsplash.com/photo-1657349038547-b18a07fb4329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldCUyMHN0eWxlfGVufDF8fHx8MTc3NTEzNTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '45+ Produk',
    description: 'Koleksi jaket denim dengan berbagai wash dan style. Versatile dan mudah dipadukan dengan outfit apapun.'
  },
  {
    id: 3,
    name: 'Leather Jacket',
    image: 'https://images.unsplash.com/photo-1606715791286-6e43e9838f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzc1MTMxMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '30+ Produk',
    description: 'Jaket kulit premium untuk tampilan yang edgy dan stylish. Investment piece yang bertahan lama.'
  },
  {
    id: 4,
    name: 'Hoodie Jacket',
    image: 'https://images.unsplash.com/photo-1773650783799-38ba31d19a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBqYWNrZXQlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc3NTEzNTM2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '60+ Produk',
    description: 'Hoodie jacket streetwear dengan design trendy. Essential untuk gaya urban casual.'
  },
  {
    id: 5,
    name: 'Varsity Jacket',
    image: 'https://images.unsplash.com/photo-1640182837191-0620ae2d9b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJzaXR5JTIwamFja2V0JTIwc3BvcnR8ZW58MXx8fHwxNzc1MTM1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '35+ Produk',
    description: 'College style varsity jacket dengan detail premium. Retro vibes yang always in style.'
  },
  {
    id: 6,
    name: 'Windbreaker',
    image: 'https://images.unsplash.com/photo-1773848090001-e8245ee48957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kYnJlYWtlciUyMGphY2tldCUyMG91dGRvb3J8ZW58MXx8fHwxNzc1MTM1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '40+ Produk',
    description: 'Windbreaker ringan untuk aktivitas outdoor. Water-resistant dan packable.'
  },
  {
    id: 7,
    name: 'Parka Jacket',
    image: 'https://images.unsplash.com/photo-1557479613-9f88c8450c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrYSUyMGphY2tldCUyMHdpbnRlcnxlbnwxfHx8fDE3NzUxMzUzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '25+ Produk',
    description: 'Parka jacket untuk musim dingin. Insulated dan sangat hangat dengan style yang tetap fashionable.'
  },
  {
    id: 8,
    name: 'Trench Coat',
    image: 'https://images.unsplash.com/photo-1563671889-7bfa8c578a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuY2glMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzUwOTUzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '20+ Produk',
    description: 'Trench coat klasik untuk tampilan yang elegant dan sophisticated. Perfect untuk business casual.'
  },
  {
    id: 9,
    name: 'Blazer',
    image: 'https://images.unsplash.com/photo-1770364022753-7bb3ffe973dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGF6ZXIlMjBqYWNrZXQlMjBmb3JtYWx8ZW58MXx8fHwxNzc1MTM1MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '55+ Produk',
    description: 'Blazer formal untuk tampilan professional. Essential untuk wardrobe formal Anda.'
  },
  {
    id: 10,
    name: 'Puffer Jacket',
    image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWZmZXIlMjBqYWNrZXQlMjB3aW50ZXJ8ZW58MXx8fHwxNzc1MTM1MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '50+ Produk',
    description: 'Puffer jacket trendy dengan insulation maksimal. Warm, stylish, dan comfortable.'
  },
];

export function Categories() {
  const { setSelectedCategory } = useSearch();

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Jacket Categories
            </h1>
            <p className="text-xl text-gray-600">
              Temukan jaket yang sesuai dengan style dan kebutuhan Anda
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/products"
                  onClick={() => handleCategoryClick(category.name)}
                  className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[4/5] relative">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/90 mb-3 leading-relaxed">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold bg-yellow-500 text-gray-900 px-4 py-2 rounded-full">
                          {category.count}
                        </span>
                        <span className="text-sm font-semibold group-hover:translate-x-2 transition-transform flex items-center">
                          Shop Now →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}