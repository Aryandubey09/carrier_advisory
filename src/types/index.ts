export interface User {
  id: string;
  name: string;
  email: string;
  class?: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  category: string;
  subject?: string;
  class?: string;
  questions: Question[];
  timePerQuestion: number; // in seconds
}

export interface QuizResult {
  quizId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: { questionId: string; selectedAnswer: number; isCorrect: boolean }[];
  completedAt: Date;
}

export interface QuizSession {
  quiz: Quiz;
  currentQuestionIndex: number;
  answers: { questionId: string; selectedAnswer: number }[];
  startTime: Date;
  timeRemaining: number;
}