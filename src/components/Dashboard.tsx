import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Code, Brain, GraduationCap, Clock, Trophy, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { mockQuizzes, getQuizzesByCategory, getQuizzesByClass } from '../data/mockQuizzes';

interface DashboardProps {
  onStartQuiz: (quizId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartQuiz }) => {
  const { user, logout } = useAuth();

  const codingQuizzes = getQuizzesByCategory('coding');
  const aptitudeQuizzes = getQuizzesByCategory('aptitude');
  const class10Quizzes = getQuizzesByClass('10');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl">Skill Challenge</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-sm">{user?.name}</span>
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
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-muted-foreground">
            Challenge yourself with our 1-minute skill tests across different categories.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Total Quizzes</p>
                  <p className="text-2xl">{mockQuizzes.length}</p>
                </div>
                <Brain className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Time per Question</p>
                  <p className="text-2xl">1 min</p>
                </div>
                <Clock className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Questions per Quiz</p>
                  <p className="text-2xl">10</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Categories</p>
                  <p className="text-2xl">3</p>
                </div>
                <GraduationCap className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quiz Categories */}
        <div className="space-y-8">
          {/* Coding Section */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Code className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl">Coding Challenges</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <Badge variant="secondary">Coding</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{quiz.questions.length} questions</span>
                        <span>{quiz.timePerQuestion / 60} min per question</span>
                      </div>
                      <Button
                        onClick={() => onStartQuiz(quiz.id)}
                        className="w-full"
                      >
                        Start Challenge
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Aptitude Section */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-6 w-6 text-green-600" />
              <h3 className="text-xl">Aptitude Tests</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aptitudeQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <Badge variant="secondary">Aptitude</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{quiz.questions.length} questions</span>
                        <span>{quiz.timePerQuestion / 60} min per question</span>
                      </div>
                      <Button
                        onClick={() => onStartQuiz(quiz.id)}
                        className="w-full"
                      >
                        Start Challenge
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Academic Section */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl">Class 10 - Academic</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {class10Quizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <Badge variant="secondary">{quiz.subject}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{quiz.questions.length} questions</span>
                        <span>{quiz.timePerQuestion / 60} min per question</span>
                      </div>
                      <Button
                        onClick={() => onStartQuiz(quiz.id)}
                        className="w-full"
                      >
                        Start Challenge
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};