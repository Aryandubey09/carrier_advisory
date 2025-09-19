export interface Student {
  id: string;
  name: string;
  class: '10th' | '12th' | 'UG' | 'PG';
  collegeName: string;
  parentsName: string;
  parentsPhone: string;
  email: string;
  createdAt: Date;
}

export interface Counsellor {
  id: string;
  name: string;
  email: string;
  specialization: string;
  experience: number;
  qualification: string;
}

export interface GovernmentInstitute {
  id: string;
  instituteName: string;
  contactPersonName: string;
  email: string;
  phone: string;
  address: string;
  type: 'school' | 'college' | 'university' | 'exam_board';
}

export type UserRole = 'student' | 'counsellor' | 'government';

export interface AppUser {
  id: string;
  role: UserRole;
  email: string;
  profile: Student | Counsellor | GovernmentInstitute;
}

export interface CollegeInfo {
  id: string;
  name: string;
  type: 'government' | 'private';
  courses: string[];
  location: string;
  cutoff: number;
  fees: number;
  facilities: string[];
}

export interface ScholarshipInfo {
  id: string;
  name: string;
  eligibility: string[];
  amount: number;
  deadline: Date;
  applyLink: string;
}

export interface ExamInfo {
  id: string;
  name: string;
  eligibleClasses: string[];
  examDate: Date;
  registrationDeadline: Date;
  description: string;
}