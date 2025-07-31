import React from 'react';
import Image from 'next/image';
import { JobData } from '@/data/jobs';
interface JobCardProps {
  job: JobData;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="border border-primary rounded-4xl p-4 flex flex-col shadow-md bg-tertier">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-primary">{job.title}</h3>
          <p className="text-black">{job.company}</p>
        </div>
        <Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} />
      </div>
      <div className="space-y-2 text-sm text-black mb-4">
        <p>📍 {job.location}</p>
        <p>💰 {job.salary}</p>
        <p>🕒 {job.type}</p>
      </div>
      <button className="mt-auto ml-auto w-[236px] bg-primary text-white font-semibold py-2 rounded-full">
        Apply
      </button>
    </div>
  );
};

export default JobCard;