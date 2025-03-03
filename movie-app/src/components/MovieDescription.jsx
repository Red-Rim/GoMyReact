import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div className="text-white text-center text-2xl">Movie not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-2 text-gray-400">{movie.description}</p>
      <p className="mt-2 text-yellow-400">Rating: {movie.rating}</p>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Trailer</h2>
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={movie.trailerLink}
            title={movie.title}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Link to="/" className="mt-4 text-blue-400 hover:text-blue-600 block">
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDescription;