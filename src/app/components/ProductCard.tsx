import { ShoppingCart, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

export function ProductCard({ 
  id,
  name, 
  category, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews 
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image });
    toast.success('Produk ditambahkan ke keranjang!');
  };

  return (
    <Link to={`/products/${id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 aspect-square">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{discount}%
            </div>
          )}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
          >
            <Heart className="h-5 w-5 text-gray-700 hover:text-red-500" />
          </button>
          
          {/* Quick Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="font-semibold">Tambah ke Keranjang</span>
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{category}</p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>
          
          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-blue-600">
                Rp {price.toLocaleString('id-ID')}
              </p>
              {originalPrice && (
                <p className="text-sm text-gray-400 line-through">
                  Rp {originalPrice.toLocaleString('id-ID')}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}