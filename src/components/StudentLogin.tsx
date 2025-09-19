import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, GraduationCap, Mail, Lock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useCareerAuth } from '../contexts/CareerAuthContext';

interface StudentLoginProps {
  onBack: () => void;
}

export const StudentLogin: React.FC<StudentLoginProps> = ({ onBack }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const { login } = useCareerAuth();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!formData.password.trim()) {
      toast.error('Please enter your password');
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(formData.email.trim().toLowerCase(), formData.password, 'student');
      
      if (success) {
        toast.success('Login successful! Welcome back.');
      } else {
        toast.error('Invalid email or password. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl">Student Login</h1>
          </div>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <p className="text-muted-foreground">
              Sign in to continue your career journey
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button 
                  type="button"
                  onClick={onBack}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Register here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Demo Credentials */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-800">Demo Account</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-blue-700 mb-2">
              You can use these credentials to test the app:
            </p>
            <div className="text-sm text-blue-600 space-y-1">
              <p><strong>Email:</strong> student@demo.com</p>
              <p><strong>Password:</strong> demo123</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 w-full border-blue-300 text-blue-700 hover:bg-blue-100"
              onClick={() => {
                setFormData({ email: 'student@demo.com', password: 'demo123' });
              }}
            >
              Use Demo Credentials
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};