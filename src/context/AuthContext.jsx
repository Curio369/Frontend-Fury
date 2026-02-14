import React, { createContext, useContext, useState, useEffect } from 'react';
import { hasPermission, ROLES } from '../utils/rbac';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('aegis-user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('aegis-user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password, role) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          role,
          name: email.split('@')[0].split('.').map(w=> w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          institutionId: `IIT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          avatar: null,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        };

        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('aegis-user', JSON.stringify(userData));
        resolve({ success: true, user: userData });
      }, 1500);
    });
  };

  const register = async (userData) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          ...userData,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString(),
          status: 'pending', // Requires admin approval
        };
        resolve({ success: true, user: newUser });
      }, 2000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('aegis-user');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('aegis-user', JSON.stringify(updatedUser));
  };

  const checkPermission = (permission) => {
    if (!user || !user.role) return false;
    return hasPermission(user.role, permission);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
    updateUser,
    checkPermission,
    // Convenience role checkers
    isStudent: user?.role === ROLES.STUDENT,
    isFaculty: user?.role === ROLES.FACULTY,
    isAuthority: user?.role === ROLES.AUTHORITY,
    isAdmin: user?.role === ROLES.ADMIN,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
