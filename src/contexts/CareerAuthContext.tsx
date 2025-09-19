import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppUser, UserRole, Student } from '../types/career';
import { ApiService } from '../services/api';

interface CareerAuthContextType {
  user: AppUser | null;
  isAuthenticated: boolean;
  userRole: UserRole | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  setCurrentUser: (user: AppUser) => void;
}

const CareerAuthContext = createContext<CareerAuthContextType | undefined>(undefined);

export const useCareerAuth = () => {
  const context = useContext(CareerAuthContext);
  if (!context) {
    throw new Error('useCareerAuth must be used within a CareerAuthProvider');
  }
  return context;
};

export const CareerAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);

  // Initialize demo student and load user from localStorage on mount
  useEffect(() => {
    // Create demo student if not exists
    const createDemoStudent = () => {
      const demoStudent = {
        id: 'demo-student-1',
        name: 'Demo Student',
        class: '12th' as const,
        collegeName: 'Government Higher Secondary School',
        parentsName: 'Demo Parent',
        parentsPhone: '9876543210',
        email: 'student@demo.com',
        createdAt: new Date()
      };

      const existingStudents = JSON.parse(localStorage.getItem('registered-students') || '[]');
      const studentExists = existingStudents.find((s: Student) => s.email === demoStudent.email);
      
      if (!studentExists) {
        existingStudents.push(demoStudent);
        localStorage.setItem('registered-students', JSON.stringify(existingStudents));
      }
    };

    createDemoStudent();

    // Load saved user
    const savedUser = localStorage.getItem('career-current-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('career-current-user');
      }
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    try {
      if (role === 'student') {
        const student = await ApiService.loginStudent(email, password);
        if (student) {
          const appUser: AppUser = {
            id: student.id,
            role: 'student',
            email: student.email,
            profile: student
          };
          setUser(appUser);
          localStorage.setItem('career-current-user', JSON.stringify(appUser));
          return true;
        }
      }
      // Add counsellor and government institute login logic here when needed
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('career-current-user');
  };

  const setCurrentUser = (newUser: AppUser) => {
    setUser(newUser);
    localStorage.setItem('career-current-user', JSON.stringify(newUser));
  };

  return (
    <CareerAuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        userRole: user?.role || null,
        login,
        logout,
        setCurrentUser
      }}
    >
      {children}
    </CareerAuthContext.Provider>
  );
};