
import React from 'react';
import Image from 'next/image';
import { MentorData } from '@/data/mentors';

interface MentorCardProps {
  mentor: MentorData;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <div className="border border-primary rounded-4xl p-4 flex flex-col shadow-lg bg-tertier h-full">
      
      <div className="flex items-center mb-4">
        <Image
          src={mentor.avatar}
          alt={`${mentor.name}'s avatar`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="font-bold text-lg text-primary">{mentor.name}</h3>
          <p className="text-sm text-black">
            {mentor.name} at {mentor.title}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-black mb-6">
        <p>📍 {mentor.location}</p>
        <p>💬 {mentor.description}</p>
        <p>✨ {mentor.skills.join(', ')}</p>
        <p>⭐ {mentor.rating}</p>
      </div>

      <button className="mt-auto ml-auto w-[236px] bg-primary text-white font-semibold py-2 rounded-full">
        View Profile
      </button>
    </div>
  );
};

export default MentorCard;