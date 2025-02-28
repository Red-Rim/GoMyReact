import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-2 text-gray-400">{movie.description}</p>
      <p className="mt-2 text-yellow-400">Rating: {movie.rating}</p>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Trailer</h2>
            <iframe
              width="100%"
              height="500px"
              src={movie.trailerLink}
              title={movie.title}
            
              allowFullScreen
              className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
            ></iframe>

      </div>

      <Link to="/" className="mt-4 text-blue-400 hover:text-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDescription;