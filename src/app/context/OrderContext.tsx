import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useAuth } from './AuthContext';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  shippingInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
  };
  paymentMethod: string;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'userId' | 'createdAt' | 'status'>) => string;
  getOrderById: (id: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const STORAGE_KEY = 'w2u_orders';

function generateOrderId(): string {
  return 'W2U' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100).toString().padStart(2, '0');
}

// Simulate status progression based on order age
function getSimulatedStatus(createdAt: string): Order['status'] {
  const age = Date.now() - new Date(createdAt).getTime();
  const hours = age / (1000 * 60 * 60);
  if (hours < 1) return 'processing';
  if (hours < 24) return 'shipped';
  return 'delivered';
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      const allOrders: Order[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const userOrders = allOrders
        .filter(o => o.userId === user.id)
        .map(o => ({ ...o, status: getSimulatedStatus(o.createdAt) }));
      setOrders(userOrders);
    } else {
      setOrders([]);
    }
  }, [user]);

  const addOrder = (orderData: Omit<Order, 'id' | 'userId' | 'createdAt' | 'status'>): string => {
    if (!user) return '';
    const newOrder: Order = {
      ...orderData,
      id: generateOrderId(),
      userId: user.id,
      createdAt: new Date().toISOString(),
      status: 'processing',
    };

    const allOrders: Order[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    allOrders.push(newOrder);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allOrders));

    setOrders(prev => [newOrder, ...prev]);
    return newOrder.id;
  };

  const getOrderById = (id: string) => orders.find(o => o.id === id);

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrders must be used within OrderProvider');
  return context;
}
