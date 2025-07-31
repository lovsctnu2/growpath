
"use client";

import React, { useState, useEffect } from 'react';
import NavbarHome from "@/components/navbar/navbarHome";
import { TrainingData, transformRecommendationToTrainingData } from '@/data/training';
import { Recommendations } from '@/data/recommendation';

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


interface TrainingDetailPageProps {
  params: {
    id: string;
  };
}

export default function TrainingDetailPage({ params }: TrainingDetailPageProps) {
  const { id } = params;
  const [trainingDetail, setTrainingDetail] = useState<TrainingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTraining = async () => {
      setLoading(true);
      setError(null);
      try {
        const allTransformedTrainings: TrainingData[] = mockApiResponse.map((rec, index) =>
          transformRecommendationToTrainingData(rec, index)
        );

        await new Promise(resolve => setTimeout(resolve, 500));

        const foundTraining = allTransformedTrainings.find(t => t.id === id);

        if (foundTraining) {
          setTrainingDetail(foundTraining);
        } else {
          setError("Pelatihan tidak ditemukan.");
        }
      } catch (err) {
        console.error("Gagal memuat detail pelatihan:", err);
        setError("Gagal memuat detail pelatihan. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTraining();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-primary">
        <svg className="animate-spin h-8 w-8 text-primary mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p>Memuat detail pelatihan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-whit text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  if (!trainingDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-whit text-primary">
        <p>Detail pelatihan tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-repeat bg-center"
        style={{ backgroundImage: "url('/detail.svg')" }}
      ></div>

      <NavbarHome /> 
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-56 relative z-10">
        <button onClick={() => window.history.back()} className="flex items-center text-primary text-lg hover:text-blue-800 transition-colors mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali
        </button>

        <h1 className="text-5xl font-semibold text-primary mb-6">
          {trainingDetail.title}
        </h1>
        <p className="text-xl text-black mb-2">
          This course is part of <span className="font-semibold">{trainingDetail.platform}</span>
        </p>

        <div className="flex items-center text-xl text-black mb-6">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
          <span className="font-semibold text-xl mr-2">{trainingDetail.rating}</span> ({trainingDetail.enrolledByCount} already enrolled)
        </div>

        <button className="bg-primary text-white py-3 px-18 rounded-full text-2xl font-bold hover:bg-primary transition-colors duration-200 mb-6">
          Enroll now
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8 bg-white border-2 border-primary rounded-3xl">
          <div className="bg-gray-100 p-8 rounded-3xl text-center text-2xl ">
            <p className="font-semibold text-black">{trainingDetail.difficultyLevel || 'N/A'}</p>
            <p className="text-lg text-black">Difficulty</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-3xl text-center text-2xl">
            <p className="font-semibold text-black">{trainingDetail.duration || 'N/A'}</p>
            <p className="text-lg text-black">Duration</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-3xl text-center text-2xl">
            <p className="font-semibold text-black">{trainingDetail.language || 'N/A'}</p>
            <p className="text-lg text-black">Language</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-3xl text-center text-2xl">
            <p className="font-semibold text-black">{trainingDetail.subjectArea || 'N/A'}</p>
            <p className="text-lg text-black">Subject</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-black mb-4">About this course</h2>
        <p className="text-black text-lg leading-relaxed mb-6">
          {trainingDetail.description}
        </p>
        {trainingDetail.benefit && (
          <>
            <h2 className="text-4xl font-bold text-black mb-4">What you&apos;ll learn</h2>
            <p className="text-black text-lg leading-relaxed">
              {trainingDetail.benefit}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis erat mattis, pharetra sapien nec, rutrum lectus. Maecenas sed magna ac velit rutrum viverra a eu quam. Cras auctor sagittis nisi. Vivamus a tortor bibendum, iaculis mauris non, bibendum ante. Vivamus egestas scelerisque leo eget volutpat. In et nibh ut erat tincidunt pellentesque nec nec turpis. Vestibulum a erat at libero venenatis porttitor quis ut velit. In et nibh ut erat tincidunt pellentesque nec nec turpis. Vestibulum a erat at libero venenatis porttitor quis ut velit.  In et nibh ut erat tincidunt pellentesque nec nec turpis. Vestibulum a erat at libero venenatis porttitor quis ut velit.</p>
          </>
        )}
      </main>
    </div>
  );
}