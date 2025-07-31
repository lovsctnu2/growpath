export interface EducationDetail {
  university: string;
  major: string;
  degree: 'Vocational Degree' | 'Bachelor\'s Degree (S1)' | 'Master\'s Degree (S2)' | 'Doctorate (S3)' | 'Other';
  graduationYear?: number | null;
}

export interface OnboardingData {
  userId: string; 
  careerInterests: ('Software Engineering' | 'Product Management' | 'UX/UI Designer' | 'Data Science / Analytics' | 'Digital Marketing' | 'Finance & Banking' | 'Human Resources' | 'Tech Industry' | 'Fintech Industry' | 'E-commerce Industry' | 'Healthcare Industry' | 'Education Sector' | 'Manufacturing' | 'Consulting' | 'Other')[]; 
  skills: ('JavaScript' | 'Python' | 'React' | 'Node.js' | 'SQL' | 'Cloud Computing' | 'Machine Learning' | 'Data Analysis' | 'UI/UX Design' | 'Cybersecurity' | 'Project Management' | 'SEO' | 'SEM' | 'Content Marketing' | 'Social Media Management' | 'Google Analytics' | 'Communication' | 'Problem Solving' | 'Teamwork' | 'Leadership' | 'Adaptability' | 'Critical Thinking' | 'Creativity' | 'Negotiation' | 'Time Management' | 'Git' | 'Jira' | 'Figma' | 'Tableau' | 'Salesforce' | 'Adobe Creative Suite' | 'Microsoft Office' | 'Google Workspace' | 'Other Tools/Skills')[];
  education: EducationDetail[]; 
}

export const mockOnboardingData: OnboardingData[] = [
  {
    userId: 'user-001',
    careerInterests: ['Software Engineering', 'Tech Industry'],
    skills: ['JavaScript', 'Python', 'React', 'Git', 'Problem Solving', 'Teamwork'],
    education: [
      {
        university: 'Bandung Institute of Technology',
        major: 'Informatics Engineering',
        degree: 'Bachelor\'s Degree (S1)',
        graduationYear: 2022,
      },
    ],
  },
  {
    userId: 'user-002',
    careerInterests: ['Digital Marketing', 'E-commerce Industry'],
    skills: ['SEO', 'Content Marketing', 'Social Media Management', 'Communication', 'Creativity'],
    education: [
      {
        university: 'University of Gadjah Mada',
        major: 'Marketing Management',
        degree: 'Bachelor\'s Degree (S1)',
        graduationYear: 2021,
      },
      {
        university: 'Jakarta Vocational School',
        major: 'Digital Media Production',
        degree: 'Vocational Degree',
        graduationYear: 2019,
      }
    ],
  },
  {
    userId: 'user-003',
    careerInterests: ['Data Science / Analytics'],
    skills: ['Python', 'SQL', 'Data Analysis', 'Machine Learning', 'Critical Thinking', 'Tableau'],
    education: [
      {
        university: 'University of Indonesia',
        major: 'Statistics',
        degree: 'Master\'s Degree (S2)',
        graduationYear: 2024,
      },
      {
        university: 'Online Data Science Bootcamp',
        major: 'Data Science',
        degree: 'Other',
        graduationYear: 2023,
      }
    ],
  },
];