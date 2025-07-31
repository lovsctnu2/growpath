import { Recommendations } from './recommendation';

export interface TrainingData {
  id: string;
  imageUrl: string;
  rating: number;
  title: string;
  description: string;
  benefit: string;
  enrolledByCount: number;
  enrolledAvatars: string[];
  platform: string;
  isFree: boolean;
  language: string;
  hasCertificate: boolean;
  careerRelevance: string;
  duration: string;
  subjectArea: string;
  difficultyLevel: string;
}

const SUBJECT_AREA_KEYWORDS: { [key: string]: string[] } = {
  'IT & Software': ['computer', 'data', 'programming', 'software', 'machine learning', 'ai', 'cybersecurity', 'web development', 'python', 'java', 'sql', 'tableau', 'coding', 'algorithm', 'network', 'security', 'deep learning'],
  'Finance & Accounting': ['finance', 'financial', 'accounting', 'loan', 'investment', 'capital', 'audit', 'tax', 'economics'],
  'Marketing': ['marketing', 'digital marketing', 'seo', 'sem', 'social media', 'brand', 'advertising', 'content'],
  'Sales': ['sales', 'selling', 'negotiation', 'business development', 'customer service'],
  'Design': ['design', 'ux', 'ui', 'graphic', 'art', 'photoshop', 'illustrator'],
  'Business': ['business', 'management', 'project', 'strategy', 'leadership', 'entrepreneurship'],
  'Personal Development': ['personal', 'productivity', 'leadership', 'communication', 'mindset', 'growth'],
  
};

export const transformRecommendationToTrainingData = (
  rec: Recommendations,
  index: number
): TrainingData => {
  const simulatedBenefit = `Improve your skill by ${Math.floor(Math.random() * 10) + 5}%!`;
  const simulatedIsFree = Math.random() > 0.7;
  const simulatedLanguage = Math.random() > 0.5 ? 'English' : 'Indonesian';
  const simulatedHasCertificate = Math.random() > 0.6;

  const careerRelevanceOptions = ['Directly related to my current role', 'Helps me grow in current path', 'Exploring new roles', 'Not sure yet'];
  const difficultyLevelOptions = ['Beginner', 'Intermediate', 'Advanced'];
  const subjectAreaOptions = ['Sales', 'Marketing', 'IT', 'Finance'];
  const durationOptions = ['Less than 1 week', '1-4 weeks', '1-3 months', '3+ months'];

  return {
    id: `${rec.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}_${index}`,
    imageUrl: '/training.svg',
    rating: parseFloat((rec.similarity_score * 4 + 1).toFixed(1)),
    title: rec.title,
    description: `Kursus dari ${rec.platform}. Direkomendasikan oleh AI dengan skor kemiripan ${rec.similarity_score.toFixed(2)}.`,
    benefit: simulatedBenefit,
    enrolledByCount: Math.floor(rec.similarity_score * 200) + 50,
    enrolledAvatars: ['/avatar-placeholder.png'],
    platform: rec.platform,
    isFree: simulatedIsFree,
    language: simulatedLanguage,
    hasCertificate: simulatedHasCertificate,
    careerRelevance: careerRelevanceOptions[Math.floor(Math.random() * careerRelevanceOptions.length)],
    duration: durationOptions[Math.floor(Math.random() * durationOptions.length)],
    subjectArea: subjectAreaOptions[Math.floor(Math.random() * subjectAreaOptions.length)],
    difficultyLevel: difficultyLevelOptions[Math.floor(Math.random() * difficultyLevelOptions.length)],
  };
};

