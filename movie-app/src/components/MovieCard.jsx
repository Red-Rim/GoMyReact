import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-64 h-auto">
      <Link to={`/movie/${movie.title}`}>
        <img 
          src={movie.posterURL} 
          alt={movie.title} 
          className="w-full h-96 object-cover rounded-lg"
        />
        <h2 className="text-lg font-bold mt-2 text-white">{movie.title}</h2>
        <p className="text-gray-400">{movie.rating}/10</p>
      </Link>
    </div>
  );
};

export default MovieCard;