import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all"
        >
          <img
                  src={movie.posterURL}
                  alt={movie.title}
                  className="w-full h-80 object-contain"
                />

          <div className="p-4">
            <h3 className="text-xl font-semibold">{movie.title}</h3>
            <p className="text-gray-400">{movie.description.substring(0, 100)}...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-indigo-400">Rating: {movie.rating}</span>
              <Link
                to={`/movie/${movie.title}`}
                className="text-indigo-500 hover:text-indigo-400"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;