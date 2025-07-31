
"use client";

import React, { useState, useEffect } from 'react';

export interface FilterValues {
  careerRelevance: string;
  duration: string;
  subjectArea: string;
  difficultyLevel: string;
  freePaid: string;
  language: string;
  certificateAvailability: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (filters: FilterValues) => void;
  initialFilters: FilterValues;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onSubmit, initialFilters }) => {
  const [careerRelevance, setCareerRelevance] = useState(initialFilters?.careerRelevance || '');
  const [duration, setDuration] = useState(initialFilters?.duration || '');
  const [subjectArea, setSubjectArea] = useState(initialFilters?.subjectArea || '');
  const [difficultyLevel, setDifficultyLevel] = useState(initialFilters?.difficultyLevel || '');
  const [freePaid, setFreePaid] = useState(initialFilters?.freePaid || '');
  const [language, setLanguage] = useState(initialFilters?.language || '');
  const [certificateAvailability, setCertificateAvailability] = useState(initialFilters?.certificateAvailability || '');

  useEffect(() => {
    if (isOpen) {
      setCareerRelevance(initialFilters.careerRelevance);
      setDuration(initialFilters.duration);
      setSubjectArea(initialFilters.subjectArea);
      setDifficultyLevel(initialFilters.difficultyLevel);
      setFreePaid(initialFilters.freePaid);
      setLanguage(initialFilters.language);
      setCertificateAvailability(initialFilters.certificateAvailability);
    }
  }, [isOpen, initialFilters]);

  const handleSubmit = () => {
    const filters: FilterValues = {
      careerRelevance,
      duration,
      subjectArea,
      difficultyLevel,
      freePaid,
      language,
      certificateAvailability,
    };
    onSubmit(filters);
    onClose();
  };

  const CustomSelect: React.FC<{
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
  }> = ({ id, label, value, onChange, children }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className="appearance-none block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm cursor-pointer"
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
        </div>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Filter Training</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close filter"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <CustomSelect
            id="career-relevance"
            label="Career Relevance"
            value={careerRelevance}
            onChange={(e) => setCareerRelevance(e.target.value)}
          >
            <option value="">Any</option>
            <option value="Directly related to my current role">Directly related to my current role</option>
            <option value="Helps me grow in current path">Helps me grow in current path</option>
            <option value="Exploring new roles">Exploring new roles</option>
            <option value="Not sure yet">Not sure yet</option>
          </CustomSelect>

          <CustomSelect
            id="duration"
            label="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Any</option>
            <option value="Less than 1 week">Less than 1 week</option>
            <option value="1-4 weeks">1-4 weeks</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3+ months">3+ months</option>
          </CustomSelect>

          <CustomSelect
            id="subject-area"
            label="Subject Area"
            value={subjectArea}
            onChange={(e) => setSubjectArea(e.target.value)}
          >
            <option value="">Any</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </CustomSelect>

          <CustomSelect
            id="difficulty-level"
            label="Difficulty Level"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            <option value="">Any</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </CustomSelect>

          <CustomSelect
            id="free-paid"
            label="Free/Paid"
            value={freePaid}
            onChange={(e) => setFreePaid(e.target.value)}
          >
            <option value="">Both</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
            <option value="Scholarship available">Scholarship available</option>
          </CustomSelect>

          <CustomSelect
            id="language"
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Any</option>
            <option value="English">English</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Spanish">Spanish</option>
          </CustomSelect>

          <CustomSelect
            id="certificate-availability"
            label="Certificate Availability"
            value={certificateAvailability}
            onChange={(e) => setCertificateAvailability(e.target.value)}
          >
            <option value="">Either</option>
            <option value="Includes certificate">Includes certificate</option>
            <option value="Industry-recognized only">Industry-recognized only</option>
            <option value="No certificate">No certificate</option>
          </CustomSelect>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;