"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { allJobsData, JobData } from '@/data/jobs';
import JobCard from './jobcard';


const careerFields: string[] = [
  "Software Engineering",
  "Product Management",
  "UX/UI Designer",
  "Data Science / Analytics",
  "Digital Marketing",
  "Finance & Banking",
  "Human Resources",
  "Other...",
];

const Job: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredJobs, setFilteredJobs] = useState<JobData[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectField = (field: string) => {
    setSearchValue(field);
    setIsDropdownOpen(false);
  };

  const handleShowJobs = () => {
    if (!searchValue) return;

    const results = allJobsData.filter(
      (job) => job.category === searchValue
    );
    setFilteredJobs(results);
    setHasSearched(true);
  };

  const backgroundStyle = hasSearched
    ? { backgroundColor: '#FFFFFFF', backgroundImage: 'none' }
    : {
        backgroundImage: 'url("/background.svg")',
        backgroundSize: '100%',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
      };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-8"
      style={backgroundStyle}
    >
      <div className="relative z-10 w-full max-w-4xl text-center px-4 md:px-0">

        <h1 className="text-4xl font-semibold text-black mb-4"><span className="text-primary">Growpath</span> Job Recommendations System</h1>
        <p className="text-2xl font-normal text-black">
          Find Your Career Opportunities from Growpath!
        </p>

        <div className="relative mt-20 mb-10">
          <input
            type="text"
            placeholder="Type or select a career interest to find matching jobs"
            className="w-full text-2xl p-4 pr-12 font-semibold border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleDropdown}
            value={searchValue}
            readOnly
          />
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-20 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {careerFields.map((field) => (
                <div
                  key={field}
                  className="p-3 cursor-pointer hover:bg-white text-left text-blue-700"
                  onClick={() => handleSelectField(field)}
                >
                  {field}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-start w-full max-w-4xl">
          <button
            onClick={handleShowJobs}
            disabled={!searchValue}
            className={clsx(
              "px-10 py-3 text-white text-2xl font-semibold rounded-full shadow-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
              {
                'bg-primary': searchValue,
                'bg-secondary hover:bg-primary': !searchValue,
              }
            )}
          >
            Show Recommended Jobs
          </button>
        </div>
      </div>

      {hasSearched && (
        <div className="w-full max-w-5xl mt-12 mb-12">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white/50 rounded-lg">
              <p className="text-xl text-gray-700 font-semibold">
                Maaf, tidak ada pekerjaan yang cocok untuk {searchValue}.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Job;