import { Student, Counsellor, GovernmentInstitute, AppUser } from '../types/career';

// Mock API service - replace with actual API endpoints
const API_BASE_URL = 'https://your-api-endpoint.com/api';

export class ApiService {
  // Student Registration
  static async registerStudent(studentData: Omit<Student, 'id' | 'createdAt'>): Promise<Student> {
    try {
      // Mock API call - replace with actual implementation
      const response = await fetch(`${API_BASE_URL}/students/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // For now, return mock data
      const mockStudent: Student = {
        id: Date.now().toString(),
        ...studentData,
        createdAt: new Date(),
      };

      // Store in localStorage as fallback
      const existingStudents = JSON.parse(localStorage.getItem('registered-students') || '[]');
      existingStudents.push(mockStudent);
      localStorage.setItem('registered-students', JSON.stringify(existingStudents));

      return mockStudent;
    } catch (error) {
      console.error('Registration error:', error);
      // Fallback to localStorage
      const mockStudent: Student = {
        id: Date.now().toString(),
        ...studentData,
        createdAt: new Date(),
      };

      const existingStudents = JSON.parse(localStorage.getItem('registered-students') || '[]');
      existingStudents.push(mockStudent);
      localStorage.setItem('registered-students', JSON.stringify(existingStudents));

      return mockStudent;
    }
  }

  // Student Login
  static async loginStudent(email: string, password: string): Promise<Student | null> {
    try {
      // Mock API call - replace with actual implementation
      const response = await fetch(`${API_BASE_URL}/students/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // For now, check localStorage
      const existingStudents = JSON.parse(localStorage.getItem('registered-students') || '[]');
      const student = existingStudents.find((s: Student) => s.email === email);
      
      return student || null;
    } catch (error) {
      console.error('Login error:', error);
      // Fallback to localStorage
      const existingStudents = JSON.parse(localStorage.getItem('registered-students') || '[]');
      const student = existingStudents.find((s: Student) => s.email === email);
      
      return student || null;
    }
  }

  // Counsellor Registration
  static async registerCounsellor(counsellorData: Omit<Counsellor, 'id'>): Promise<Counsellor> {
    // Mock implementation
    const mockCounsellor: Counsellor = {
      id: Date.now().toString(),
      ...counsellorData,
    };

    const existingCounsellors = JSON.parse(localStorage.getItem('registered-counsellors') || '[]');
    existingCounsellors.push(mockCounsellor);
    localStorage.setItem('registered-counsellors', JSON.stringify(existingCounsellors));

    return mockCounsellor;
  }

  // Government Institute Registration
  static async registerGovernmentInstitute(instituteData: Omit<GovernmentInstitute, 'id'>): Promise<GovernmentInstitute> {
    // Mock implementation
    const mockInstitute: GovernmentInstitute = {
      id: Date.now().toString(),
      ...instituteData,
    };

    const existingInstitutes = JSON.parse(localStorage.getItem('registered-institutes') || '[]');
    existingInstitutes.push(mockInstitute);
    localStorage.setItem('registered-institutes', JSON.stringify(existingInstitutes));

    return mockInstitute;
  }

  // Get Nearby Colleges (Mock)
  static async getNearbyColleges(location: string) {
    // Mock data - replace with actual API
    return [
      {
        id: '1',
        name: 'Government Degree College',
        type: 'government',
        courses: ['B.A.', 'B.Sc.', 'B.Com.'],
        location: 'City Center',
        cutoff: 75,
        fees: 15000,
        facilities: ['Library', 'Computer Lab', 'Sports Complex']
      },
      {
        id: '2',
        name: 'State University',
        type: 'government',
        courses: ['B.Tech', 'BBA', 'BCA'],
        location: 'University Area',
        cutoff: 85,
        fees: 25000,
        facilities: ['Hostel', 'Research Labs', 'Cafeteria']
      }
    ];
  }

  // Get Scholarships (Mock)
  static async getScholarships(studentClass: string) {
    // Mock data - replace with actual API
    return [
      {
        id: '1',
        name: 'Merit Scholarship 2024',
        eligibility: ['10th', '12th'],
        amount: 50000,
        deadline: new Date('2024-12-31'),
        applyLink: 'https://scholarship.gov.in'
      },
      {
        id: '2',
        name: 'Minority Scholarship',
        eligibility: ['UG', 'PG'],
        amount: 75000,
        deadline: new Date('2024-11-30'),
        applyLink: 'https://minorities.gov.in'
      }
    ];
  }

  // Get Exams (Mock)
  static async getExams(studentClass: string) {
    // Mock data - replace with actual API
    return [
      {
        id: '1',
        name: 'JEE Main 2024',
        eligibleClasses: ['12th'],
        examDate: new Date('2024-04-15'),
        registrationDeadline: new Date('2024-03-15'),
        description: 'Joint Entrance Examination for Engineering'
      },
      {
        id: '2',
        name: 'NEET 2024',
        eligibleClasses: ['12th'],
        examDate: new Date('2024-05-05'),
        registrationDeadline: new Date('2024-03-20'),
        description: 'National Eligibility cum Entrance Test for Medical'
      }
    ];
  }
}