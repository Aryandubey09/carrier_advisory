import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Brain, 
  Users, 
  MapPin, 
  Gift, 
  FileText, 
  Map, 
  Heart, 
  BookOpen,
  User,
  LogOut,
  GraduationCap,
  Bell,
  Calendar,
  Target,
  Bus
} from 'lucide-react';
import { useCareerAuth } from '../contexts/CareerAuthContext';
import { Student } from '../types/career';
import { ApiService } from '../services/api';

export const StudentDashboard: React.FC = () => {
  const { user, logout } = useCareerAuth();
  const [nearbyColleges, setNearbyColleges] = useState<any[]>([]);
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [exams, setExams] = useState<any[]>([]);

  const student = user?.profile as Student;
  const showQuizSection = student?.class === '10th' || student?.class === '12th';

  useEffect(() => {
    loadDashboardData();
  }, [student?.class]);

  const loadDashboardData = async () => {
    try {
      if (student?.class) {
        const [collegesData, scholarshipsData, examsData] = await Promise.all([
          ApiService.getNearbyColleges('current-location'),
          ApiService.getScholarships(student.class),
          ApiService.getExams(student.class)
        ]);
        
        setNearbyColleges(collegesData);
        setScholarships(scholarshipsData);
        setExams(examsData);
      }
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    }
  };

  const getDashboardSections = () => {
    const allSections = [
      {
        id: 'quiz',
        title: 'Interest Based Quiz',
        description: 'Discover your ideal career path through personalized assessments',
        icon: Brain,
        color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        show: showQuizSection,
        action: () => console.log('Navigate to quiz')
      },
      {
        id: 'counsellor',
        title: 'Connect to Counsellor',
        description: 'Get expert guidance from professional career counsellors',
        icon: Users,
        color: 'bg-gradient-to-br from-green-500 to-emerald-600',
        show: true,
        action: () => console.log('Navigate to counsellor')
      },
      {
        id: 'colleges',
        title: 'Nearby Colleges/Schools',
        description: `Find ${nearbyColleges.length}+ institutions near you`,
        icon: MapPin,
        color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
        show: true,
        action: () => console.log('Navigate to colleges')
      },
      {
        id: 'scholarships',
        title: 'Scholarship Dates',
        description: `${scholarships.length} active scholarships available`,
        icon: Gift,
        color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
        show: true,
        action: () => console.log('Navigate to scholarships')
      },
      {
        id: 'exams',
        title: 'Exam Information',
        description: `${exams.length} upcoming exams for ${student?.class}`,
        icon: FileText,
        color: 'bg-gradient-to-br from-red-500 to-pink-600',
        show: true,
        action: () => console.log('Navigate to exams')
      },
      {
        id: 'roadmap',
        title: 'Career Roadmap',
        description: 'Explore detailed career paths and requirements',
        icon: Map,
        color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
        show: true,
        action: () => console.log('Navigate to roadmap')
      },
      {
        id: 'stress',
        title: 'Stress Release Section',
        description: 'Mental health support and stress management resources',
        icon: Heart,
        color: 'bg-gradient-to-br from-pink-500 to-rose-600',
        show: true,
        action: () => console.log('Navigate to stress relief')
      },
      {
        id: 'girls-support',
        title: 'Girls Education Support',
        description: 'Free bus services and safety initiatives for girls',
        icon: Bus,
        color: 'bg-gradient-to-br from-pink-600 to-purple-600',
        show: student?.class === '10th' || student?.class === '12th', // Show for school students
        action: () => console.log('Navigate to girls support')
      }
    ];

    return allSections.filter(section => section.show);
  };

  const formatDeadline = (date: Date) => {
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    if (days < 0) return 'Expired';
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `${days} days left`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl">CareerGuide</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                <BookOpen className="h-4 w-4" />
                <span>E-Book</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                About
              </a>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">{student?.name}</p>
                  <p className="text-xs text-gray-500">{student?.class} Student</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Welcome back, {student?.name}!</h2>
          <p className="text-gray-600 mb-4">
            Continue your journey towards a successful career. We're committed to reducing dropouts, increasing enrollment, and supporting girls' education.
          </p>
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <h4 className="font-medium">📈 Boost Enrollment</h4>
                <p className="text-sm text-indigo-100">Government college awareness</p>
              </div>
              <div>
                <h4 className="font-medium">🎯 Reduce Dropouts</h4>
                <p className="text-sm text-indigo-100">Personalized career guidance</p>
              </div>
              <div>
                <h4 className="font-medium">👩‍🎓 Support Girls</h4>
                <p className="text-sm text-indigo-100">Free bus & safety initiatives</p>
              </div>
              <div>
                <h4 className="font-medium">👨‍👩‍👧‍👦 Aware Parents</h4>
                <p className="text-sm text-indigo-100">Videos, counsellors & roadmaps</p>
              </div>
            </div>
          </div>
          
          {/* Student Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Current Class</p>
                    <p className="text-lg font-medium">{student?.class}</p>
                  </div>
                  <Target className="h-6 w-6 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Institution</p>
                    <p className="text-lg font-medium truncate">{student?.collegeName}</p>
                  </div>
                  <GraduationCap className="h-6 w-6 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Active Scholarships</p>
                    <p className="text-lg font-medium">{scholarships.length}</p>
                  </div>
                  <Gift className="h-6 w-6 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Upcoming Exams</p>
                    <p className="text-lg font-medium">{exams.length}</p>
                  </div>
                  <Calendar className="h-6 w-6 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getDashboardSections().map((section) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={section.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-indigo-200"
                onClick={section.action}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Updates Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Scholarships */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gift className="h-5 w-5 text-yellow-600" />
                <span>Active Scholarships</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scholarships.slice(0, 3).map((scholarship) => (
                  <div key={scholarship.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{scholarship.name}</p>
                      <p className="text-xs text-gray-600">Amount: ₹{scholarship.amount.toLocaleString()}</p>
                    </div>
                    <Badge variant={formatDeadline(scholarship.deadline) === 'Today' ? 'destructive' : 'secondary'}>
                      {formatDeadline(scholarship.deadline)}
                    </Badge>
                  </div>
                ))}
                {scholarships.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No active scholarships found</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Exams */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-red-600" />
                <span>Upcoming Exams</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {exams.slice(0, 3).map((exam) => (
                  <div key={exam.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{exam.name}</p>
                      <p className="text-xs text-gray-600">{exam.description}</p>
                    </div>
                    <Badge variant="secondary">
                      {formatDeadline(exam.registrationDeadline)}
                    </Badge>
                  </div>
                ))}
                {exams.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No upcoming exams found</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};