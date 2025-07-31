// app/training/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TrainingSection from './trainingSection';
import FilterBar from './filterBar';
import FilterModal, { FilterValues } from './filterModal';
import { TrainingData, transformRecommendationToTrainingData } from '@/data/training';
import { Recommendations } from '@/data/recommendation';
import NavbarHome from "@/components/navbar/navbarHome";
import Training from "@/components/training";

const TrainingPage: React.FC = () => {
  const [allTrainings, setAllTrainings] = useState<TrainingData[]>([]);
  const [recommendedTrainings, setRecommendedTrainings] = useState<TrainingData[]>([]);
  const [topPlatformTrainings, setTopPlatformTrainings] = useState<TrainingData[]>([]);
  const [secondTopPlatformTrainings, setSecondTopPlatformTrainings] = useState<TrainingData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  const [currentFilters, setCurrentFilters] = useState<FilterValues>({
    careerRelevance: '',
    duration: '',
    subjectArea: '',
    difficultyLevel: '',
    freePaid: '',
    language: '',
    certificateAvailability: '',
  });

  useEffect(() => {
    const fetchAndProcessRecommendations = async () => {
      try {
        setLoading(true);
        setError(null);

        const mockApiResponse: Recommendations[] = [
          { platform: "edX", similarity_score: 0.681476625210877, title: "Computational Thinking and Big Data" },
          { platform: "edX", similarity_score: 0.5998107852795231, title: "Big Data Capstone Project" },
          { platform: "Coursera", similarity_score: 0.5292961158832871, title: "Whole genome sequencing of bacterial genomes - tools and applications" },
          { platform: "Corporate Finance Institute", similarity_score: 0.5131849928653224, title: "Loan Default Prediction with Machine Learning" },
          { platform: "Coursera", similarity_score: 0.4966520801032446, title: "Use Tableau for your Data Science Workflow" },
          { platform: "Udemy", similarity_score: 0.701234567890123, title: "The Complete 2024 Web Development Bootcamp" },
          { platform: "Coursera", similarity_score: 0.654321098765432, title: "Machine Learning Engineering for Production (MLOps) Specialization" },
          { platform: "edX", similarity_score: 0.600000000000000, title: "Introduction to Computer Science and Programming Using Python" },
          { platform: "Udemy", similarity_score: 0.555555555555555, title: "Python for Data Science and Machine Learning Bootcamp" },
          { platform: "Coursera", similarity_score: 0.500000000000000, title: "Deep Learning Specialization" },
          { platform: "Udemy", similarity_score: 0.480000000000000, title: "React - The Complete Guide (incl Hooks, React Router, Redux)" },
          { platform: "edX", similarity_score: 0.450000000000000, title: "Data Science: R Basics" },
          { platform: "Corporate Finance Institute", similarity_score: 0.400000000000000, title: "Financial Modeling & Valuation Analyst (FMVA)®" },
        ];

        await new Promise(resolve => setTimeout(resolve, 1000));

        const transformedData = mockApiResponse.map((rec, index) => transformRecommendationToTrainingData(rec, index));
        setAllTrainings(transformedData);
        applyFilters(transformedData, currentFilters);

      } catch (err) {
        console.error("Gagal mengambil rekomendasi:", err);
        setError("Gagal memuat rekomendasi. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchAndProcessRecommendations();
  }, []);

  const applyFilters = (dataToFilter: TrainingData[], filters: FilterValues) => {
    let filteredData = [...dataToFilter];

    if (filters.careerRelevance && filters.careerRelevance !== 'Any' && filters.careerRelevance !== '') {
      filteredData = filteredData.filter(t => t.careerRelevance === filters.careerRelevance);
    }
    if (filters.duration && filters.duration !== 'Any' && filters.duration !== '') {
      filteredData = filteredData.filter(t => t.duration === filters.duration);
    }
    if (filters.subjectArea && filters.subjectArea !== 'Any' && filters.subjectArea !== '') {
      filteredData = filteredData.filter(t => t.subjectArea === filters.subjectArea);
    }
    if (filters.difficultyLevel && filters.difficultyLevel !== 'Any' && filters.difficultyLevel !== '') {
      filteredData = filteredData.filter(t => t.difficultyLevel === filters.difficultyLevel);
    }
    if (filters.freePaid) {
      if (filters.freePaid === 'Free') {
        filteredData = filteredData.filter(t => t.isFree);
      } else if (filters.freePaid === 'Paid') {
        filteredData = filteredData.filter(t => !t.isFree);
      }
    }
    if (filters.language && filters.language !== 'Any' && filters.language !== '') {
      filteredData = filteredData.filter(t => t.language === filters.language);
    }
    if (filters.certificateAvailability) {
      if (filters.certificateAvailability === 'Yes') {
        filteredData = filteredData.filter(t => t.hasCertificate);
      } else if (filters.certificateAvailability === 'No') {
        filteredData = filteredData.filter(t => !t.hasCertificate);
      }
    }

    const platformCounts: { [key: string]: number } = {};
    filteredData.forEach(item => {
      const platformName = item.platform;
      if (platformName) {
        platformCounts[platformName] = (platformCounts[platformName] || 0) + 1;
      }
    });

    const sortedPlatforms = Object.entries(platformCounts).sort(([, countA], [, countB]) => countB - countA);

    const topPlatform = sortedPlatforms[0]?.[0];
    const secondTopPlatform = sortedPlatforms.length > 1 && sortedPlatforms[0]?.[0] !== sortedPlatforms[1]?.[0] ? sortedPlatforms[1]?.[0] : undefined;

    setRecommendedTrainings(filteredData);

    if (topPlatform) {
      setTopPlatformTrainings(filteredData.filter(item => item.platform === topPlatform));
    } else {
      setTopPlatformTrainings([]);
    }

    if (secondTopPlatform) {
      setSecondTopPlatformTrainings(filteredData.filter(item => item.platform === secondTopPlatform));
    } else {
      setSecondTopPlatformTrainings([]);
    }
  };

  const handleFilterSubmit = (filters: FilterValues) => {
    setCurrentFilters(filters);
    applyFilters(allTrainings, filters);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
        <svg className="animate-spin h-8 w-8 text-primary mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p>Memuat rekomendasi...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white ">
      <NavbarHome />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-4 mb-8">
          <button className="pt-2 rounded-full hover:bg-gray-100 transition-colors">
            <Image src="/arrowLeft.svg" alt="Scroll Left" width={24} height={24} />
          </button>
          <FilterBar onClick={() => setIsFilterModalOpen(true)} />
        </div>

        {recommendedTrainings.length > 0 && (
          <TrainingSection
            title="Brand Training Recommendations"
            trainings={recommendedTrainings}
          />
        )}

        {topPlatformTrainings.length > 0 && (
          <TrainingSection
            title={`${topPlatformTrainings[0].platform} Training Recommendations`}
            trainings={topPlatformTrainings}
          />
        )}

        {secondTopPlatformTrainings.length > 0 && (
          <TrainingSection
            title={`${secondTopPlatformTrainings[0].platform} Training Recommendations`}
            trainings={secondTopPlatformTrainings}
          />
        )}

        {recommendedTrainings.length === 0 && topPlatformTrainings.length === 0 && secondTopPlatformTrainings.length === 0 && (
          <div className="text-center text-gray-600 text-xl py-10">
            Maaf, belum ada rekomendasi pelatihan yang tersedia saat ini yang cocok dengan filter.
          </div>
        )}
      </main>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onSubmit={handleFilterSubmit}
        initialFilters={currentFilters}
      />
    </div>
  );
};

export default TrainingPage;