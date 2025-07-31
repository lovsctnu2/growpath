// components/trainingSection.tsx
import React, { RefObject } from 'react'; // Pastikan RefObject diimpor
import TrainingCard from './trainingCard'; // Path ke TrainingCard
import { TrainingData } from '@/data/training';
import Image from 'next/image';

interface TrainingSectionProps {
  title: string;
  trainings: TrainingData[];
  scrollRef?: RefObject<HTMLDivElement>; // <<< TAMBAHKAN PROPERTI INI
}

const TrainingSection: React.FC<TrainingSectionProps> = ({ title, trainings, scrollRef }) => {
  const renderDynamicTitle = () => {
    const fixedPart = " Training Recommendations";
    if (title.includes(fixedPart)) {
      const fixedPartStartIndex = title.indexOf(fixedPart);

      if (fixedPartStartIndex !== -1 && title.endsWith(fixedPart)) {
        const dynamicBrandPart = title.substring(0, fixedPartStartIndex);

        return (
          <>
            <span className="text-primary">{dynamicBrandPart}</span>
            <span className="text-gray-900">{fixedPart}</span>
          </>
        );
      }
    }
    return <span className="text-gray-900">{title}</span>;
  };

  return (
    <section className="w-full mb-10 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {renderDynamicTitle()}
      </h2>
      <div className="relative">
        {/* Terapkan ref ke div yang bisa discroll */}
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {trainings.map((training) => (
            <TrainingCard key={training.id} training={training} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;