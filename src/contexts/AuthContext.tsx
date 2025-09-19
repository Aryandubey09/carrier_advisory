import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, name?: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useLocalStorage<User[]>('skill-challenge-users', []);
  const [currentUser, setCurrentUser] = useLocalStorage<User | null>('skill-challenge-current-user', null);

  const login = async (email: string, password: string, name?: string): Promise<boolean> => {
    // Check if user exists
    let user = users.find(u => u.email === email);
    
    if (!user && name) {
      // Register new user
      user = {
        id: Date.now().toString(),
        name,
        email,
        class: undefined
      };
      setUsers([...users, user]);
    }
    
    if (user) {
      setCurrentUser(user);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        login,
        logout,
        isAuthenticated: !!currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};