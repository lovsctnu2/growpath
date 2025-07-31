"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface GoalOption {
  id: string;
  title: string;
  imageUrl: string;
}

const goalOptions: GoalOption[] = [
  {
    id: 'full_time_job',
    title: 'Full-time Job',
    imageUrl: '/onboarding.svg',
  },
  {
    id: 'internship',
    title: 'Internship',
    imageUrl: '/onboarding.svg',
  },
  {
    id: 'graduate_school',
    title: 'Graduate School',
    imageUrl: '/onboarding.svg',
  },
  {
    id: 'exploring_options',
    title: 'Still Exploring Options',
    imageUrl: '/onboarding.svg',
  },
];

interface GoalCardProps {
  goal: GoalOption;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal, isSelected, onSelect }) => {
  return (
    <div
      className={clsx(
        "relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-200 ease-in-out",
        "hover:scale-105 hover:shadow-xl",
        {
          "ring-4 ring-secondary ring-offset-2": isSelected,
          "ring-1 ring-gray-200": !isSelected,
        }
      )}
      onClick={() => onSelect(goal.id)}
    >
      <Image
        src="/onboarding.svg"
        alt={goal.title}
        width={360}
        height={200}
        layout="responsive"
        className="w-full h-auto object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Crect width="600" height="400" fill="%23e0e0e0"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="30" fill="%23555555"%3EImage Error%3C/text%3E%3C/svg%3E';
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
        <h3 className="text-white text-lg font-semibold drop-shadow-md">{goal.title}</h3>
      </div>
    </div>
  );
};

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center space-x-2 w-full max-w-6xl mx-auto mb-10 px-4 pt-4">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <React.Fragment key={step}>
          <div
            className={clsx(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
              {
                "bg-secondary text-white": step === currentStep,
                "bg-gray-200 text-gray-600": step !== currentStep,
              }
            )}
          >
            {step}
          </div>
          {step < totalSteps && (
            <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const Training: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleSelectGoal = (id: string) => {
    setSelectedGoal(id === selectedGoal ? null : id);
  };

  const handleNext = () => {
    if (selectedGoal) {
      console.log("Selected Goal:", selectedGoal);
      alert(`Anda memilih: ${selectedGoal}`);
    } else {
      alert("Silakan pilih salah satu tujuan.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url("/background.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ProgressBar currentStep={1} totalSteps={4} />

      <div className="mb-8 text-center md:text-left w-full max-w-6xl px-6">
        <h1 className="text-[40px] font-semibold text-gray-900 mb-2">What is your main goal right now?</h1>
        <p className="text-black font-normal text-[32px]">
          Choose one that fits best. This will help us prioritize recommendations for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-4xl px-4">
        {goalOptions.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            isSelected={selectedGoal === goal.id}
            onSelect={handleSelectGoal}
          />
        ))}
      </div>

      <div className="flex justify-end w-full max-w-4xl px-4 pb-4">
        <button
          onClick={handleNext}
          disabled={!selectedGoal}
          className={clsx(
            "px-8 py-3 rounded-full text-white font-semibold transition-colors duration-200",
            {
              "bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2": selectedGoal,
              "bg-secondary cursor-not-allowed": !selectedGoal,
            }
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Training;