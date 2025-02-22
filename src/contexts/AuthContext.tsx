import { createContext, useContext, useState,useEffect,ReactNode } from 'react';
import { User } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Check for existing session
  //   const checkAuth = async () => {
  //     try {
  //       const session = localStorage.getItem('user');
  //       if (session) {
  //         setUser(JSON.parse(session));
  //       }
  //     } catch (error) {
  //       console.error('Auth check failed:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, []);

  const login = async (email: string, password?: string) => {
    // Mock login - replace with actual authentication
    const mockUser: User = {
      id: '1',
      email,
      password:password,
      name: 'John Doe',
      role: 'admin',
    };
    
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = async () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}