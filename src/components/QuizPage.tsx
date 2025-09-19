import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import { Quiz, QuizSession, Question } from '../types';
import { toast } from 'sonner@2.0.3';

interface QuizPageProps {
  quiz: Quiz;
  onComplete: (session: QuizSession) => void;
  onBack: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ quiz, onComplete, onBack }) => {
  const [session, setSession] = useState<QuizSession>({
    quiz,
    currentQuestionIndex: 0,
    answers: [],
    startTime: new Date(),
    timeRemaining: quiz.timePerQuestion
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quiz.questions[session.currentQuestionIndex];
  const isLastQuestion = session.currentQuestionIndex === quiz.questions.length - 1;
  const progress = ((session.currentQuestionIndex + 1) / quiz.questions.length) * 100;

  // Timer effect
  useEffect(() => {
    if (session.timeRemaining <= 0 || isAnswered) return;

    const timer = setInterval(() => {
      setSession(prev => {
        const newTimeRemaining = prev.timeRemaining - 1;
        
        if (newTimeRemaining <= 0) {
          // Time's up, automatically submit current question
          handleTimeUp();
          return prev;
        }
        
        return {
          ...prev,
          timeRemaining: newTimeRemaining
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [session.timeRemaining, isAnswered]);

  const handleTimeUp = () => {
    if (isAnswered) return;
    
    // Auto-submit with no answer selected
    const newAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedAnswer ?? -1
    };

    const updatedSession = {
      ...session,
      answers: [...session.answers, newAnswer]
    };

    if (isLastQuestion) {
      onComplete(updatedSession);
    } else {
      moveToNextQuestion(updatedSession);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) {
      toast.error('Please select an answer before submitting');
      return;
    }

    setIsAnswered(true);
    
    const newAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer
    };

    const updatedSession = {
      ...session,
      answers: [...session.answers, newAnswer]
    };

    // Show correct answer briefly
    setTimeout(() => {
      if (isLastQuestion) {
        onComplete(updatedSession);
      } else {
        moveToNextQuestion(updatedSession);
      }
    }, 1500);
  };

  const moveToNextQuestion = (updatedSession: QuizSession) => {
    setSession({
      ...updatedSession,
      currentQuestionIndex: updatedSession.currentQuestionIndex + 1,
      timeRemaining: quiz.timePerQuestion
    });
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getOptionClassName = (optionIndex: number) => {
    let baseClass = "p-4 border rounded-lg cursor-pointer transition-all text-left";
    
    if (isAnswered) {
      if (optionIndex === currentQuestion.correctAnswer) {
        return `${baseClass} bg-green-100 border-green-500 text-green-800`;
      } else if (optionIndex === selectedAnswer && optionIndex !== currentQuestion.correctAnswer) {
        return `${baseClass} bg-red-100 border-red-500 text-red-800`;
      } else {
        return `${baseClass} bg-gray-50 border-gray-300 cursor-not-allowed opacity-60`;
      }
    }
    
    if (selectedAnswer === optionIndex) {
      return `${baseClass} bg-blue-100 border-blue-500 text-blue-800`;
    }
    
    return `${baseClass} hover:bg-gray-50 border-gray-300`;
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
                Back
              </Button>
              <h1 className="text-xl">{quiz.title}</h1>
              <Badge variant="secondary">
                {quiz.category === 'academic' ? quiz.subject : quiz.category}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className={`font-mono text-lg ${
                  session.timeRemaining <= 10 ? 'text-red-600' : 'text-gray-700'
                }`}>
                  {formatTime(session.timeRemaining)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {session.currentQuestionIndex + 1} of {quiz.questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={getOptionClassName(index)}
                  disabled={isAnswered}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {isAnswered && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
                <p className="text-blue-800">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Submit Button */}
            {!isAnswered && (
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  size="lg"
                >
                  {isLastQuestion ? 'Finish Quiz' : 'Submit Answer'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};