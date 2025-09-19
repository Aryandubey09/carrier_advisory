import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Trophy, Target, Clock, CheckCircle, XCircle, ArrowLeft, RotateCcw } from 'lucide-react';
import { QuizSession, QuizResult } from '../types';
import { useAuth } from '../contexts/AuthContext';

interface ResultsPageProps {
  session: QuizSession;
  onBack: () => void;
  onRetakeQuiz: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ session, onBack, onRetakeQuiz }) => {
  const { user } = useAuth();

  // Calculate results
  const results = React.useMemo(() => {
    const answers = session.answers.map(answer => {
      const question = session.quiz.questions.find(q => q.id === answer.questionId);
      return {
        ...answer,
        isCorrect: question ? answer.selectedAnswer === question.correctAnswer : false
      };
    });

    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const totalQuestions = session.quiz.questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const timeSpent = (Date.now() - session.startTime.getTime()) / 1000;

    return {
      score,
      correctAnswers,
      totalQuestions,
      timeSpent,
      answers,
      percentage: score
    };
  }, [session]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return 'default';
    if (score >= 60) return 'secondary';
    return 'destructive';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-xl">Quiz Results</h1>
            </div>
            <Button variant="outline" onClick={onRetakeQuiz}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Quiz
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Overview */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Trophy className={`h-16 w-16 ${getScoreColor(results.percentage)}`} />
            </div>
            <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
            <p className="text-muted-foreground">{session.quiz.title}</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(results.percentage)}`}>
                  {results.percentage}%
                </div>
                <p className="text-sm text-muted-foreground mt-1">Overall Score</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-700">
                  {results.correctAnswers}/{results.totalQuestions}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Correct Answers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-700">
                  {formatTime(results.timeSpent)}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Time Taken</p>
              </div>
              <div className="text-center">
                <Badge variant={getScoreBadgeVariant(results.percentage)} className="text-lg px-4 py-2">
                  {results.percentage >= 80 ? 'Excellent!' : 
                   results.percentage >= 60 ? 'Good Job!' : 'Keep Practicing!'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question by Question Review */}
        <Card>
          <CardHeader>
            <CardTitle>Question Review</CardTitle>
            <p className="text-muted-foreground">
              Review your answers and see the correct solutions
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {session.quiz.questions.map((question, index) => {
                const userAnswer = results.answers.find(a => a.questionId === question.id);
                const isCorrect = userAnswer?.isCorrect ?? false;
                const selectedOption = userAnswer?.selectedAnswer ?? -1;

                return (
                  <div key={question.id} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {isCorrect ? (
                          <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-600 mt-1" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-3">
                          {index + 1}. {question.question}
                        </h4>
                        
                        <div className="space-y-2 mb-4">
                          {question.options.map((option, optionIndex) => {
                            let className = "p-3 rounded-lg border text-sm";
                            
                            if (optionIndex === question.correctAnswer) {
                              className += " bg-green-100 border-green-500 text-green-800";
                            } else if (optionIndex === selectedOption && !isCorrect) {
                              className += " bg-red-100 border-red-500 text-red-800";
                            } else {
                              className += " bg-gray-50 border-gray-200";
                            }

                            return (
                              <div key={optionIndex} className={className}>
                                <div className="flex items-center justify-between">
                                  <span>{option}</span>
                                  {optionIndex === question.correctAnswer && (
                                    <Badge variant="secondary" className="text-xs">Correct</Badge>
                                  )}
                                  {optionIndex === selectedOption && selectedOption !== question.correctAnswer && (
                                    <Badge variant="destructive" className="text-xs">Your Answer</Badge>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {question.explanation && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-sm text-blue-800">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};