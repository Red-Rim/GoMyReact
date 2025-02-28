import React from 'react';

//filter component
const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div className="mb-8 flex space-x-4 justify-center">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => setTitleFilter(e.target.value)}
        className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => setRatingFilter(e.target.value)}
        className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default Filter;