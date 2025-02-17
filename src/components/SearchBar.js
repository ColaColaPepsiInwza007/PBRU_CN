'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()!== '') {
      router.push(`/map?place=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full flex items-center bg-gray-100 p-2 rounded-md shadow-sm">
      <input
        type="text"
        placeholder="Search for a location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 bg-transparent outline-none"
      />
      {/* นำ button ออกจาก flex container */}
      <button type="submit" className="text-blue-500 font-semibold ml-6"> 
        Search
      </button> 
    </form>
  );
};

export default SearchBar;