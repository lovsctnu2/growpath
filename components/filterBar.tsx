
import React from 'react';
import Image from 'next/image';

interface FilterBarProps {
  onClick: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onClick }) => {
  return (
    <div className="flex w-full max-w-6xl mt-52">

      <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors mt-2">
        <Image src="/arrowLeft.svg" alt="Back" width={24} height={24} />
      </button>

      <button
        onClick={onClick}
        className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 text-gray-700 text-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-4" // Menambahkan ml-4 untuk jarak dari tombol back
      >
        <Image src="/filter.svg" alt="Filter" width={20} height={20} className="mr-2" />
        Filter
      </button>
    </div>
  );
};

export default FilterBar;