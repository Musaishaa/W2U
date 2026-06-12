import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';

export default function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <CartProvider>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
}