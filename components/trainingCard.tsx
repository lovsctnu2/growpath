import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrainingData } from '@/data/training';

interface TrainingCardProps {
  training: TrainingData;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ training }) => {
  return (
    <Link href={`/training/${training.id}`} passHref>
      <div className="relative flex-shrink-0 w-[226px] h-[272px] bg-white rounded-3xl shadow-md overflow-hidden border border-primary cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <div className="relative w-full h-[112px]">
          <Image
            src={training.imageUrl}
            alt={training.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
          <div className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.545 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.79.565-1.845-.197-1.545-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.925 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
            </svg>
            <span>{training.rating} ({training.enrolledByCount})</span>
          </div>
        </div>

        <div className="p-4 flex flex-col justify-between h-[calc(100%-112px)]">
          <div>
            <h3 className="text-xl font-bold text-primary whitespace-nowrap overflow-hidden text-ellipsis">
              {training.title}
            </h3>
            <p className="text-sm text-black line-clamp-2" title={training.description}>{training.description}</p>
            <p className="text-sm text-black bg-bg1 rounded-full px-2 py-1 inline-block mt-1">{training.benefit}</p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="text-[8px] text-gray-600 font-medium">Enrolled by +{training.enrolledByCount}</div>
                <Image
                  src="/user.svg"
                  alt="Enrolled user"
                  width={24}
                  height={24}
                  className="rounded-full ring-2 ring-white"
                />
              </div>
            </div>
            <button className="bg-primary text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrainingCard;