import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('w2u_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Create demo account if not exists
    const users = JSON.parse(localStorage.getItem('w2u_users') || '[]');
    const demoExists = users.find((u: any) => u.email === 'demo@w2u.com');
    if (!demoExists) {
      users.push({
        id: 'demo-001',
        name: 'Demo User',
        email: 'demo@w2u.com',
        password: 'demo123',
      });
      localStorage.setItem('w2u_users', JSON.stringify(users));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('w2u_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      };
      setUser(userData);
      localStorage.setItem('w2u_user', JSON.stringify(userData));
      return true;
    }

    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('w2u_users') || '[]');
    const existingUser = users.find((u: any) => u.email === email);

    if (existingUser) {
      return false; // Email already exists
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In real app, this should be hashed
    };

    users.push(newUser);
    localStorage.setItem('w2u_users', JSON.stringify(users));

    // Auto login after register
    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };
    setUser(userData);
    localStorage.setItem('w2u_user', JSON.stringify(userData));

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('w2u_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}