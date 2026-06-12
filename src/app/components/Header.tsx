import { ShoppingCart, Search, Menu, User, LogOut, Package } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const totalItems = getTotalItems();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/products');
    }
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    toast.success('Logout berhasil');
    navigate('/');
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-yellow-400">W2U</h1>
            <p className="text-xs text-gray-400 -mt-1">Wear To You</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-yellow-400 transition-colors">Products</Link>
            <Link to="/categories" className="text-gray-300 hover:text-yellow-400 transition-colors">Categories</Link>
            <Link to="/promo" className="text-gray-300 hover:text-yellow-400 transition-colors">Deals</Link>
            <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jackets..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-500"
              />
              <button type="submit" className="absolute left-3 top-2.5">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </form>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <User className="h-6 w-6" />
                  <span className="hidden lg:block text-sm">{user?.name}</span>
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <Link
                      to="/orders"
                      onClick={() => setUserMenuOpen(false)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Package className="h-4 w-4" />
                      <span>Riwayat Pesanan</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center space-x-1"
              >
                <User className="h-6 w-6" />
                <span className="hidden lg:block text-sm">Login</span>
              </Link>
            )}

            <button 
              onClick={() => navigate('/cart')}
              className="text-gray-300 hover:text-yellow-400 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-yellow-400 transition-colors">Products</Link>
              <Link to="/categories" className="text-gray-300 hover:text-yellow-400 transition-colors">Categories</Link>
              <Link to="/promo" className="text-gray-300 hover:text-yellow-400 transition-colors">Deals</Link>
              <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link>
              {!isAuthenticated && (
                <Link to="/login" className="text-yellow-400 font-semibold">Login / Register</Link>
              )}
            </nav>
            <form onSubmit={handleSearch} className="mt-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jackets..."
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
}