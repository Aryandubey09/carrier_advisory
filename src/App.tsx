import React, { useState, Suspense } from 'react';
import { CareerAuthProvider, useCareerAuth } from './contexts/CareerAuthContext';
import { LandingPage } from './components/LandingPage';
import { StudentRegistration } from './components/StudentRegistration';
import { StudentLogin } from './components/StudentLogin';
import { StudentDashboard } from './components/StudentDashboard';
import { Toaster } from './components/ui/sonner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Loading } from './components/Loading';
import { UserRole } from './types/career';

type AppState = 'landing' | 'student-register' | 'student-login' | 'dashboard';

const AppContent: React.FC = () => {
  const { isAuthenticated, userRole } = useCareerAuth();
  const [currentState, setCurrentState] = useState<AppState>('landing');

  const handleRoleSelect = (role: UserRole) => {
    try {
      if (role === 'student') {
        setCurrentState('student-register');
      } else if (role === 'counsellor' || role === 'government') {
        // TODO: Implement counsellor and government registration
        console.log(`${role} registration coming soon`);
      }
    } catch (error) {
      console.error('Error in role selection:', error);
    }
  };

  const handleRegistrationComplete = () => {
    try {
      setCurrentState('student-login');
    } catch (error) {
      console.error('Error completing registration:', error);
    }
  };

  const handleBackToLanding = () => {
    try {
      setCurrentState('landing');
    } catch (error) {
      console.error('Error navigating back to landing:', error);
    }
  };

  const handleBackToRegistration = () => {
    try {
      setCurrentState('student-register');
    } catch (error) {
      console.error('Error navigating back to registration:', error);
    }
  };

  // If user is authenticated, show appropriate dashboard
  if (isAuthenticated && userRole) {
    return (
      <Suspense fallback={<Loading />}>
        <StudentDashboard />
      </Suspense>
    );
  }

  switch (currentState) {
    case 'student-register':
      return (
        <Suspense fallback={<Loading />}>
          <StudentRegistration
            onBack={handleBackToLanding}
            onRegistrationComplete={handleRegistrationComplete}
          />
        </Suspense>
      );

    case 'student-login':
      return (
        <Suspense fallback={<Loading />}>
          <StudentLogin onBack={handleBackToRegistration} />
        </Suspense>
      );

    default:
      return (
        <Suspense fallback={<Loading />}>
          <LandingPage onRoleSelect={handleRoleSelect} />
        </Suspense>
      );
  }
};

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <CareerAuthProvider>
          <div className="min-h-screen">
            <AppContent />
            <Toaster position="top-right" />
          </div>
        </CareerAuthProvider>
      </Suspense>
    </ErrorBoundary>
  );
}