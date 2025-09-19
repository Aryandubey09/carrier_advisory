import { Student } from '../types/career';

// Create a demo student for testing
export const createDemoStudent = (): Student => {
  const demoStudent: Student = {
    id: 'demo-student-1',
    name: 'Demo Student',
    class: '12th',
    collegeName: 'Government Higher Secondary School',
    parentsName: 'Demo Parent',
    parentsPhone: '9876543210',
    email: 'student@demo.com',
    createdAt: new Date()
  };

  // Store in localStorage for login functionality
  const existingStudents = JSON.parse(localStorage.getItem('registered-students') || '[]');
  const studentExists = existingStudents.find((s: Student) => s.email === demoStudent.email);
  
  if (!studentExists) {
    existingStudents.push(demoStudent);
    localStorage.setItem('registered-students', JSON.stringify(existingStudents));
  }

  return demoStudent;
};

// Initialize demo student when module is loaded
createDemoStudent();