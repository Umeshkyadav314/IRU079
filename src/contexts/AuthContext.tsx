'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'developer' | 'viewer';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage for saved user
    const savedUser = localStorage.getItem('iru079-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const users = JSON.parse(localStorage.getItem('iru079-users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const user = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        avatar: foundUser.avatar,
      };
      setUser(user);
      localStorage.setItem('iru079-user', JSON.stringify(user));
      return true;
    }
    
    // Default demo login
    if (email === 'admin@iru079.com' && password === 'admin123') {
      const user = {
        id: '1',
        email: 'admin@iru079.com',
        name: 'Admin User',
        role: 'admin' as const,
      };
      setUser(user);
      localStorage.setItem('iru079-user', JSON.stringify(user));
      return true;
    }
    
    if (email === 'demo@iru079.com' && password === 'demo123') {
      const user = {
        id: '2',
        email: 'demo@iru079.com',
        name: 'Demo User',
        role: 'developer' as const,
      };
      setUser(user);
      localStorage.setItem('iru079-user', JSON.stringify(user));
      return true;
    }
    
    return false;
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate API call
    const users = JSON.parse(localStorage.getItem('iru079-users') || '[]');
    
    // Check if user already exists
    if (users.find((u: any) => u.email === email)) {
      return false;
    }
    
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // In real app, this would be hashed
      name,
      role: 'user' as const,
    };
    
    users.push(newUser);
    localStorage.setItem('iru079-users', JSON.stringify(users));
    
    const user = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    };
    setUser(user);
    localStorage.setItem('iru079-user', JSON.stringify(user));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('iru079-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
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
