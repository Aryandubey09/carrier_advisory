import { Quiz } from '../types';

export const mockQuizzes: Quiz[] = [
  // Coding Section
  {
    id: 'coding-1',
    title: 'JavaScript Fundamentals',
    category: 'coding',
    questions: [
      {
        id: 'js-1',
        question: 'What is the output of console.log(typeof null)?',
        options: ['null', 'undefined', 'object', 'boolean'],
        correctAnswer: 2,
        explanation: 'typeof null returns "object" due to a historical bug in JavaScript.'
      },
      {
        id: 'js-2',
        question: 'Which method is used to add an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
        explanation: 'push() adds one or more elements to the end of an array.'
      },
      {
        id: 'js-3',
        question: 'What does "=== " check in JavaScript?',
        options: ['Value only', 'Type only', 'Both value and type', 'Reference only'],
        correctAnswer: 2,
        explanation: 'The === operator checks for strict equality (both value and type).'
      },
      {
        id: 'js-4',
        question: 'How do you declare a constant in JavaScript?',
        options: ['var x = 5', 'let x = 5', 'const x = 5', 'constant x = 5'],
        correctAnswer: 2,
        explanation: 'const is used to declare constants in JavaScript.'
      },
      {
        id: 'js-5',
        question: 'What is the result of 3 + "3" in JavaScript?',
        options: ['6', '33', 'Error', 'undefined'],
        correctAnswer: 1,
        explanation: 'JavaScript concatenates the number 3 with the string "3" resulting in "33".'
      },
      {
        id: 'js-6',
        question: 'Which of these is NOT a JavaScript data type?',
        options: ['String', 'Boolean', 'Float', 'Number'],
        correctAnswer: 2,
        explanation: 'JavaScript has Number type but no specific Float type.'
      },
      {
        id: 'js-7',
        question: 'How do you create a function in JavaScript?',
        options: ['function = myFunc() {}', 'function myFunc() {}', 'create myFunc() {}', 'def myFunc() {}'],
        correctAnswer: 1,
        explanation: 'Functions are declared using the function keyword followed by the function name.'
      },
      {
        id: 'js-8',
        question: 'What does JSON stand for?',
        options: ['JavaScript Object Notation', 'Java Syntax Object Notation', 'JavaScript Operation Network', 'Java Standard Object Network'],
        correctAnswer: 0,
        explanation: 'JSON stands for JavaScript Object Notation.'
      },
      {
        id: 'js-9',
        question: 'Which method is used to remove the last element from an array?',
        options: ['pop()', 'push()', 'delete()', 'remove()'],
        correctAnswer: 0,
        explanation: 'pop() removes and returns the last element from an array.'
      },
      {
        id: 'js-10',
        question: 'What is the correct way to write a JavaScript array?',
        options: ['var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
        correctAnswer: 1,
        explanation: 'Arrays in JavaScript are declared using square brackets with comma-separated values.'
      }
    ],
    timePerQuestion: 60
  },
  
  // Aptitude Section
  {
    id: 'aptitude-1',
    title: 'Logical Reasoning',
    category: 'aptitude',
    questions: [
      {
        id: 'logic-1',
        question: 'If all roses are flowers and all flowers are plants, then all roses are:',
        options: ['Trees', 'Plants', 'Bushes', 'None of the above'],
        correctAnswer: 1,
        explanation: 'This is a logical syllogism. If all roses are flowers and all flowers are plants, then all roses must be plants.'
      },
      {
        id: 'logic-2',
        question: 'What comes next in the sequence: 2, 4, 8, 16, ?',
        options: ['24', '32', '20', '18'],
        correctAnswer: 1,
        explanation: 'Each number is doubled: 2×2=4, 4×2=8, 8×2=16, 16×2=32.'
      },
      {
        id: 'logic-3',
        question: 'If 5 books cost $25, how much do 8 books cost?',
        options: ['$35', '$40', '$45', '$50'],
        correctAnswer: 1,
        explanation: 'Each book costs $5 ($25÷5), so 8 books cost 8×$5=$40.'
      },
      {
        id: 'logic-4',
        question: 'Which number should replace the question mark: 3, 6, 12, 24, ?',
        options: ['36', '48', '42', '30'],
        correctAnswer: 1,
        explanation: 'Each number is doubled: 3×2=6, 6×2=12, 12×2=24, 24×2=48.'
      },
      {
        id: 'logic-5',
        question: 'If TODAY is MONDAY, what day will it be 100 days from now?',
        options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        correctAnswer: 1,
        explanation: '100 ÷ 7 = 14 remainder 2. So it will be 2 days after Monday, which is Wednesday.'
      },
      {
        id: 'logic-6',
        question: 'In a certain code, MOUSE is written as NPTUF. How is CHAIR written?',
        options: ['DIBJS', 'DHBJS', 'DIBUS', 'CHAIR'],
        correctAnswer: 0,
        explanation: 'Each letter is shifted by +1 in the alphabet. C→D, H→I, A→B, I→J, R→S.'
      },
      {
        id: 'logic-7',
        question: 'Find the odd one out: 121, 144, 169, 196, 225',
        options: ['121', '144', '169', 'All are same'],
        correctAnswer: 3,
        explanation: 'All are perfect squares: 11², 12², 13², 14², 15².'
      },
      {
        id: 'logic-8',
        question: 'If 2 + 3 = 10, 3 + 4 = 21, then 4 + 5 = ?',
        options: ['36', '40', '45', '50'],
        correctAnswer: 0,
        explanation: 'Pattern: (a+b) × a = result. So (4+5) × 4 = 9 × 4 = 36.'
      },
      {
        id: 'logic-9',
        question: 'A train travels 60 km in 40 minutes. What is its speed in km/hr?',
        options: ['80', '90', '100', '120'],
        correctAnswer: 1,
        explanation: 'Speed = 60 km in 40 min = 60 km in 2/3 hr = 60 × 3/2 = 90 km/hr.'
      },
      {
        id: 'logic-10',
        question: 'Which letter comes next: A, D, G, J, ?',
        options: ['K', 'L', 'M', 'N'],
        correctAnswer: 2,
        explanation: 'Pattern: +3 letters each time. A(+3)→D(+3)→G(+3)→J(+3)→M.'
      }
    ],
    timePerQuestion: 60
  },

  // Class 10 Mathematics
  {
    id: 'class10-math',
    title: 'Mathematics - Algebra',
    category: 'academic',
    subject: 'Mathematics',
    class: '10',
    questions: [
      {
        id: 'math-1',
        question: 'What is the value of x in the equation 2x + 5 = 15?',
        options: ['5', '10', '7.5', '2.5'],
        correctAnswer: 0,
        explanation: '2x + 5 = 15, so 2x = 10, therefore x = 5.'
      },
      {
        id: 'math-2',
        question: 'The discriminant of the quadratic equation ax² + bx + c = 0 is:',
        options: ['b² - 4ac', 'b² + 4ac', '4ac - b²', 'a² + b² + c²'],
        correctAnswer: 0,
        explanation: 'The discriminant is b² - 4ac, which determines the nature of roots.'
      },
      {
        id: 'math-3',
        question: 'If the sum of first n natural numbers is n(n+1)/2, what is the sum of first 10 natural numbers?',
        options: ['45', '50', '55', '60'],
        correctAnswer: 2,
        explanation: 'Sum = 10(10+1)/2 = 10×11/2 = 55.'
      },
      {
        id: 'math-4',
        question: 'What is the HCF of 48 and 72?',
        options: ['12', '18', '24', '36'],
        correctAnswer: 2,
        explanation: 'Using Euclidean algorithm: HCF(48,72) = HCF(48,24) = HCF(24,0) = 24.'
      },
      {
        id: 'math-5',
        question: 'If log₁₀ 2 = 0.301, what is log₁₀ 8?',
        options: ['0.602', '0.903', '1.204', '2.408'],
        correctAnswer: 1,
        explanation: 'log₁₀ 8 = log₁₀ 2³ = 3 log₁₀ 2 = 3 × 0.301 = 0.903.'
      },
      {
        id: 'math-6',
        question: 'The nth term of an arithmetic progression is given by:',
        options: ['a + nd', 'a + (n-1)d', 'a + n(n-1)d', 'na + d'],
        correctAnswer: 1,
        explanation: 'The nth term of an AP is a + (n-1)d, where a is the first term and d is the common difference.'
      },
      {
        id: 'math-7',
        question: 'What is the area of a circle with radius 7 cm? (Take π = 22/7)',
        options: ['154 cm²', '44 cm²', '22 cm²', '77 cm²'],
        correctAnswer: 0,
        explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm².'
      },
      {
        id: 'math-8',
        question: 'If sin θ = 3/5, what is cos θ?',
        options: ['4/5', '3/4', '5/4', '5/3'],
        correctAnswer: 0,
        explanation: 'Using Pythagoras theorem: cos²θ = 1 - sin²θ = 1 - 9/25 = 16/25, so cos θ = 4/5.'
      },
      {
        id: 'math-9',
        question: 'The probability of getting a head when a fair coin is tossed is:',
        options: ['0', '1/2', '1', '2'],
        correctAnswer: 1,
        explanation: 'A fair coin has equal probability of heads and tails, so P(head) = 1/2.'
      },
      {
        id: 'math-10',
        question: 'What is the slope of the line passing through points (2,3) and (4,7)?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1,
        explanation: 'Slope = (y₂-y₁)/(x₂-x₁) = (7-3)/(4-2) = 4/2 = 2.'
      }
    ],
    timePerQuestion: 60
  },

  // Class 10 Science
  {
    id: 'class10-science',
    title: 'Science - Physics',
    category: 'academic',
    subject: 'Science',
    class: '10',
    questions: [
      {
        id: 'sci-1',
        question: 'What is the SI unit of force?',
        options: ['Newton', 'Joule', 'Watt', 'Pascal'],
        correctAnswer: 0,
        explanation: 'Newton (N) is the SI unit of force, named after Sir Isaac Newton.'
      },
      {
        id: 'sci-2',
        question: 'The speed of light in vacuum is approximately:',
        options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '3 × 10¹² m/s'],
        correctAnswer: 1,
        explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ m/s.'
      },
      {
        id: 'sci-3',
        question: 'Which law states that "Force equals mass times acceleration"?',
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation"],
        correctAnswer: 1,
        explanation: "Newton's Second Law states that F = ma (Force = mass × acceleration)."
      },
      {
        id: 'sci-4',
        question: 'What is the chemical formula for water?',
        options: ['H₂O', 'CO₂', 'O₂', 'H₂SO₄'],
        correctAnswer: 0,
        explanation: 'Water has the chemical formula H₂O (two hydrogen atoms and one oxygen atom).'
      },
      {
        id: 'sci-5',
        question: 'The process by which plants make their food is called:',
        options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Digestion'],
        correctAnswer: 1,
        explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy (food).'
      },
      {
        id: 'sci-6',
        question: 'What is the atomic number of carbon?',
        options: ['4', '6', '8', '12'],
        correctAnswer: 1,
        explanation: 'Carbon has atomic number 6, meaning it has 6 protons in its nucleus.'
      },
      {
        id: 'sci-7',
        question: 'Which organ in the human body produces insulin?',
        options: ['Liver', 'Kidney', 'Pancreas', 'Heart'],
        correctAnswer: 2,
        explanation: 'The pancreas produces insulin, which regulates blood sugar levels.'
      },
      {
        id: 'sci-8',
        question: 'What type of energy is stored in a stretched rubber band?',
        options: ['Kinetic Energy', 'Potential Energy', 'Thermal Energy', 'Chemical Energy'],
        correctAnswer: 1,
        explanation: 'A stretched rubber band stores elastic potential energy.'
      },
      {
        id: 'sci-9',
        question: 'The unit of electric current is:',
        options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correctAnswer: 1,
        explanation: 'Ampere (A) is the SI unit of electric current.'
      },
      {
        id: 'sci-10',
        question: 'Which gas is most abundant in Earth\'s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
        correctAnswer: 2,
        explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere, making it the most abundant gas.'
      }
    ],
    timePerQuestion: 60
  }
];

export const getQuizzesByCategory = (category: string) => {
  return mockQuizzes.filter(quiz => quiz.category === category);
};

export const getQuizzesByClass = (className: string) => {
  return mockQuizzes.filter(quiz => quiz.class === className);
};

export const getQuizById = (id: string) => {
  return mockQuizzes.find(quiz => quiz.id === id);
};