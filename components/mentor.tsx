"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { allMentorsData, MentorData } from '@/data/mentors';
import MentorCard from './mentorCard';

const careerFields: string[] = [
  "Software Engineering",
  "Product Management",
  "UX/UI Design",
  "Data Science / Analytics",
  "Digital Marketing",
  "Finance & Banking",
  "Human Resources",
  "Other...",
];

const categoryKeywordsMap: { [key: string]: string[] } = {
  "Software Engineering": ["software", "engineer", "developer", "coding", "programming"],
  "Product Management": ["product management", "product manager", "pm"],
  "UX/UI Design": ["ux", "ui", "design", "user experience", "user interface", "visual design", "product design"],
  "Data Science / Analytics": ["data science", "analytics", "data analyst", "machine learning", "ml", "ai"],
  "Digital Marketing": ["digital marketing", "seo", "sem", "content marketing", "social media"],
  "Finance & Banking": ["finance", "banking", "financial analyst", "investment"],
  "Human Resources": ["human resources", "hr", "talent acquisition", "recruitment"],
  "Other...": [],
};


const Mentor: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredMentors, setFilteredMentors] = useState<MentorData[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectField = (field: string) => {
    setSearchValue(field);
    setIsDropdownOpen(false);
  };

  const handleShowMentors = () => {
    if (!searchValue) {
      setFilteredMentors(allMentorsData);
      setHasSearched(true);
      return;
    }

    const lowerSearchValue = searchValue.toLowerCase();
    const relevantKeywords = categoryKeywordsMap[searchValue] || [lowerSearchValue];

    const results = allMentorsData.filter(
      (mentor) => {
        const lowerMentorTitle = mentor.title.toLowerCase();
        const lowerMentorSkills = mentor.skills.map(skill => skill.toLowerCase());

        return relevantKeywords.some(keyword =>
          lowerMentorTitle.includes(keyword) ||
          lowerMentorSkills.some(skill => skill.includes(keyword))
        );
      }
    );
    setFilteredMentors(results);
    setHasSearched(true);
  };

  const backgroundStyle = hasSearched
    ? { backgroundColor: '#FFFFFF', backgroundImage: 'none' }
    : {
        backgroundImage: 'url("/background.svg")',
        backgroundSize: '100%',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
      };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={backgroundStyle}
    >
      <div className="relative z-10 w-full max-w-4xl text-center px-4 md:px-0">
        <h1 className="text-4xl font-semibold text-black mb-4">Career Mentoring</h1>
        <p className="text-2xl font-normal text-black">
          Get personalized career advice and direct feedback by booking a one-on-one session with an experienced industry professional.
        </p>

        <div className="relative mt-20 mb-10 bg-tertier">
          <input
            type="text"
            placeholder="Choose mentor by field"
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
                  className="p-3 cursor-pointer hover:bg-gray-100 text-left text-blue-700"
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
            onClick={handleShowMentors}
            disabled={!searchValue}
            className={clsx(
              "px-10 py-3 text-white text-2xl font-semibold rounded-full shadow-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
              {
                'bg-primary': searchValue,
                'bg-secondary hover:bg-primary': !searchValue,
              }
            )}
          >
            Show Recommended Mentor
          </button>
        </div>
      </div>

      {hasSearched && (
        <div className="w-full max-w-5xl mt-12 mb-12">
          {filteredMentors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white/50 rounded-lg">
              <p className="text-xl text-gray-700 font-semibold">
                Maaf, tidak ada mentor yang cocok untuk {searchValue}.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mentor;