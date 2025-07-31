"use client";

import React, { useState, useRef, useEffect } from 'react';
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
    imageUrl: 'https://placehold.co/600x400/c7d3dd/000000?text=Full-time+Job',
  },
  {
    id: 'internship',
    title: 'Internship',
    imageUrl: 'https://placehold.co/600x400/d7e0e7/000000?text=Internship',
  },
  {
    id: 'graduate_school',
    title: 'Graduate School',
    imageUrl: 'https://placehold.co/600x400/e0e7ed/000000?text=Graduate+School',
  },
  {
    id: 'exploring_options',
    title: 'Still Exploring Options',
    imageUrl: 'https://placehold.co/600x400/e7edf2/000000?text=Exploring+Options',
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
          "ring-4 ring-primary ring-offset-2": isSelected,
          "ring-1 ring-gray-200": !isSelected,
        }
      )}
      onClick={() => onSelect(goal.id)}
    >
      <img
        src="/onboarding.svg"
        alt={goal.title}
        className="w-full h-auto object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/e0e0e0/555555?text=Image+Error';
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
        <h3 className="text-white text-xl font-semibold drop-shadow-md">{goal.title}</h3>
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
    <div className="flex items-center justify-center space-x-3 w-full max-w-6xl mx-auto mb-12 px-4 pt-10">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <React.Fragment key={step}>
          <div
            className={clsx(
              "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold",
              {
                "bg-primary text-white": step <= currentStep,
                "bg-gray-200 text-gray-600": step > currentStep,
              }
            )}
          >
            {step}
          </div>
          {step < totalSteps && (
            <div className={clsx(
              "flex-1 h-2 rounded-full",
              {
                "bg-primary": step < currentStep,
                "bg-gray-300": step >= currentStep,
              }
            )}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

interface CareerFieldsSectionProps {
  selectedCareerFields: string[];
  onAddCareerField: (field: string) => void;
  onRemoveCareerField: (field: string) => void;
}

const CareerFieldsSection: React.FC<CareerFieldsSectionProps> = ({ selectedCareerFields, onAddCareerField, onRemoveCareerField }) => {
  const allCareerFields = [
    "Software Engineering", "Product Management", "UX/UI Design", "Data Science / Analytics",
    "Digital Marketing", "Finance & Banking", "Human Resources", "Cybersecurity", "Cloud Computing",
    "Machine Learning", "Artificial Intelligence", "Project Management", "Business Analysis",
    "Technical Writing", "Customer Success", "Sales", "Operations", "Research & Development",
    "Quality Assurance"
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCareerFields = allCareerFields.filter(field => {
    const matchesSearch = searchTerm === '' || field.toLowerCase().includes(searchTerm.toLowerCase());
    const isNotSelected = !selectedCareerFields.includes(field);
    return matchesSearch && isNotSelected;
  });

  const handleAddCareerField = (field: string) => {
    if (!selectedCareerFields.includes(field)) {
      onAddCareerField(field);
      setSearchTerm('');
      inputRef.current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredCareerFields.length > 0) {
      handleAddCareerField(filteredCareerFields[0]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl px-6 pt-20">
      <h1 className="text-[40px] font-semibold text-gray-900 mb-4">What career fields are you interested in?</h1>
      <p className="text-[32px] text-black font-normal mb-8">
        You can pick more than one. Your training and job recommendations will be based on this.
      </p>

      <div className="mt-8 relative w-full max-w-6xl mx-auto" ref={wrapperRef}>
        <div className="relative flex flex-wrap items-center w-full p-3 border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary">
          {selectedCareerFields.map((field) => (
            <span
              key={field}
              className="flex items-center bg-primary text-white text-lg px-4 py-2 rounded-full font-medium mr-2 mb-1 mt-1"
            >
              {field}
              <button
                type="button"
                onClick={() => onRemoveCareerField(field)}
                className="ml-2 text-primary hover:text-primary focus:outline-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            type="text"
            placeholder={selectedCareerFields.length === 0 ? "Search" : ""}
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            className="flex-grow p-1 outline-none border-none bg-transparent text-xl min-w-[100px]"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
        </div>

        {showSuggestions && filteredCareerFields.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto text-left">
            {filteredCareerFields.map((field) => (
              <div
                key={field}
                className="p-3 cursor-pointer hover:bg-gray-100 text-xl"
                onClick={() => handleAddCareerField(field)}
              >
                {field}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface SkillsAndToolsSectionProps {
  selectedTechSkills: string[];
  onAddTechSkill: (skill: string) => void;
  onRemoveTechSkill: (skill: string) => void;
}

const SkillsAndToolsSection: React.FC<SkillsAndToolsSectionProps> = ({ selectedTechSkills, onAddTechSkill, onRemoveTechSkill }) => {
  const allTechSkills = [
    "JavaScript", "Python", "Java", "C++", "React", "Angular", "Vue.js", "Node.js", "Express.js",
    "Django", "Flask", "Spring Boot", "SQL", "NoSQL", "MongoDB", "PostgreSQL", "AWS", "Azure",
    "Google Cloud", "Docker", "Kubernetes", "Git", "Jira", "Figma", "Adobe XD", "Photoshop",
    "Illustrator", "Excel", "PowerPoint", "Tableau", "Power BI", "Salesforce", "SAP", "Linux"
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredTechSkills = allTechSkills.filter(skill => {
    const matchesSearch = searchTerm === '' || skill.toLowerCase().includes(searchTerm.toLowerCase());
    const isNotSelected = !selectedTechSkills.includes(skill);
    return matchesSearch && isNotSelected;
  });

  const handleAddTechSkill = (skill: string) => {
    if (!selectedTechSkills.includes(skill)) {
      onAddTechSkill(skill);
      setSearchTerm('');
      inputRef.current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredTechSkills.length > 0) {
      handleAddTechSkill(filteredTechSkills[0]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl pt-20 px-6">
      <h1 className="text-[40px] font-semibold text-gray-900 mb-4">What skills do you already have?</h1>
      <p className="text-[32px] text-black font-normal mb-8">
        Select your relevant skills. Don&apos;t worry if you have just a few, we&apos;re here to help you add more!
      </p>

      <div className="mt-8 relative w-full max-w-6xl mx-auto" ref={wrapperRef}>
        <div className="relative flex flex-wrap items-center w-full p-3 border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary">
          {selectedTechSkills.map((skill) => (
            <span
              key={skill}
              className="flex items-center bg-primary text-white text-lg px-4 py-2 rounded-full font-medium mr-2 mb-1 mt-1"
            >
              {skill}
              <button
                type="button"
                onClick={() => onRemoveTechSkill(skill)}
                className="ml-2 text-primary hover:text-primary focus:outline-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            type="text"
            placeholder={selectedTechSkills.length === 0 ? "Search for skills or tools" : ""}
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            className="flex-grow p-1 outline-none border-none bg-transparent text-xl min-w-[100px]"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
        </div>

        {showSuggestions && filteredTechSkills.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto text-left">
            {filteredTechSkills.map((skill) => (
              <div
                key={skill}
                className="p-3 cursor-pointer hover:bg-gray-100 text-xl"
                onClick={() => handleAddTechSkill(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


interface EducationalBackgroundSectionProps {
  university: string;
  major: string;
  degreeLevel: string;
  onUniversityChange: (value: string) => void;
  onMajorChange: (value: string) => void;
  onDegreeLevelChange: (value: string) => void;
}

const EducationalBackgroundSection: React.FC<EducationalBackgroundSectionProps> = ({
  university,
  major,
  degreeLevel,
  onUniversityChange,
  onMajorChange,
  onDegreeLevelChange,
}) => {
  const degreeLevels = ["SMA/SMK", "D3", "S1", "S2", "S3"];

  return (
    <div className="w-full max-w-6xl pt-20 px-6">
      <h1 className="text-[40px] font-semibold text-gray-900 mb-4">Tell us a bit about your educational background.</h1>
      <p className="text-[32px] text-black font-normal mb-8">
        This information will be used to find opportunities that match your qualifications.
      </p>
      <div className="mt-8 p-4 max-w-6xl mx-auto text-left">
        <div className="mb-4">
          <label htmlFor="university" className="block text-gray-700 text-xl font-medium mb-2">
            University
          </label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={(e) => onUniversityChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xl shadow-sm"
            placeholder="e.g., Universitas Indonesia"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="major" className="block text-gray-700 text-xl font-medium mb-2">
            Major
          </label>
          <input
            type="text"
            id="major"
            value={major}
            onChange={(e) => onMajorChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xl shadow-sm"
            placeholder="e.g., Ilmu Komputer"
          />
        </div>
        <div>
          <label htmlFor="degreeLevel" className="block text-gray-700 text-xl font-medium mb-2">
            Degree Level
          </label>
          <div className="relative">
            <select
              id="degreeLevel"
              value={degreeLevel}
              onChange={(e) => onDegreeLevelChange(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-xl bg-white appearance-none shadow-sm"
            >
              <option value="">Select your degree level</option>
              {degreeLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedCareerFields, setSelectedCareerFields] = useState<string[]>([]);
  const [selectedTechSkills, setSelectedTechSkills] = useState<string[]>([]);
  const [university, setUniversity] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [degreeLevel, setDegreeLevel] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const totalSteps = 4;

  const handleSelectGoal = (id: string) => {
    setSelectedGoal(id === selectedGoal ? null : id);
    setMessage(null);
  };

  const handleAddCareerField = (field: string) => {
    setSelectedCareerFields((prevFields) => [...prevFields, field]);
    setMessage(null);
  };

  const handleRemoveCareerField = (fieldToRemove: string) => {
    setSelectedCareerFields((prevFields) => prevFields.filter((field) => field !== fieldToRemove));
    setMessage(null);
  };

  const handleAddTechSkill = (skill: string) => {
    setSelectedTechSkills((prevSkills) => [...prevSkills, skill]);
    setMessage(null);
  };

  const handleRemoveTechSkill = (skillToRemove: string) => {
    setSelectedTechSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToRemove));
    setMessage(null);
  };

  const handleUniversityChange = (value: string) => setUniversity(value);
  const handleMajorChange = (value: string) => setMajor(value);
  const handleDegreeLevelChange = (value: string) => setDegreeLevel(value);

  const handleNext = () => {
    if (currentStep === 1) {
      if (selectedGoal) {
        console.log("Selected Goal:", selectedGoal);
        setCurrentStep(currentStep + 1);
        setMessage(null);
      } else {
        setMessage("Please select one goal to proceed.");
      }
    } else if (currentStep === 2) {
      if (selectedCareerFields.length > 0) {
        console.log("Selected Career Fields:", selectedCareerFields);
        setCurrentStep(currentStep + 1);
        setMessage(null);
      } else {
        setMessage("Please select at least one career field to proceed.");
      }
    } else if (currentStep === 3) {
      if (selectedTechSkills.length > 0) {
        console.log("Selected Technical Skills/Tools:", selectedTechSkills);
        setCurrentStep(currentStep + 1);
        setMessage(null);
      } else {
        setMessage("Please select at least one skill or tool to proceed.");
      }
    } else if (currentStep === 4) {
      if (university && major && degreeLevel) {
        console.log("Educational Background:", { university, major, degreeLevel });
        console.log("Onboarding Complete!");
        setMessage("Onboarding complete! You can now explore your personalized recommendations.");
      } else {
        setMessage("Please fill in all educational background fields.");
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setMessage(null);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 font-sans bg-cover bg-center"
      style={{ backgroundImage: 'url("/background.svg")' }}
    >
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      {currentStep === 1 && (
        <>
          <div className="md:text-left w-full max-w-6xl px-6 pt-8">
            <h1 className="text-[40px] font-semibold text-black mb-4">What is your main goal right now?</h1>
            <p className="text-[32px] text-black font-normal mb-8">
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
        </>
      )}

      {currentStep === 2 && (
        <CareerFieldsSection
          selectedCareerFields={selectedCareerFields}
          onAddCareerField={handleAddCareerField}
          onRemoveCareerField={handleRemoveCareerField}
        />
      )}
      {currentStep === 3 && (
        <SkillsAndToolsSection
          selectedTechSkills={selectedTechSkills}
          onAddTechSkill={handleAddTechSkill}
          onRemoveTechSkill={handleRemoveTechSkill}
        />
      )}
      {currentStep === 4 && (
        <EducationalBackgroundSection
          university={university}
          major={major}
          degreeLevel={degreeLevel}
          onUniversityChange={handleUniversityChange}
          onMajorChange={handleMajorChange}
          onDegreeLevelChange={handleDegreeLevelChange}
        />
      )}

      {message && (
        <div className="mt-4 p-3 text-black rounded-md text-center w-full max-w-md">
          {message}
        </div>
      )}

      <div className="flex justify-end space-x-4 w-full max-w-4xl px-4 pb-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={clsx(
            "px-8 py-3 rounded-full text-gray-700 font-semibold transition-colors duration-200",
            {
              "bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2": currentStep > 1,
              "bg-gray-100 cursor-not-allowed": currentStep === 1,
            }
          )}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className={clsx(
            "px-8 py-3 rounded-full text-white font-semibold transition-colors duration-200",
            {
              "bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2": true,
              "bg-secondary cursor-not-allowed":
                (currentStep === 1 && !selectedGoal) ||
                (currentStep === 2 && selectedCareerFields.length === 0) ||
                (currentStep === 3 && selectedTechSkills.length === 0) ||
                (currentStep === 4 && (!university || !major || !degreeLevel)),
            }
          )}
          disabled={
            (currentStep === 1 && !selectedGoal) ||
            (currentStep === 2 && selectedCareerFields.length === 0) ||
            (currentStep === 3 && selectedTechSkills.length === 0) ||
            (currentStep === 4 && (!university || !major || !degreeLevel))
          }
        >
          {currentStep === totalSteps ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
