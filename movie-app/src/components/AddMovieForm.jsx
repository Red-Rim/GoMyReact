import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailerLink: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.trailerLink) return;
    addMovie(newMovie);
    navigate(`/movie/${newMovie.title}`);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          name="trailerLink"
          placeholder="YouTube Embed Link"
          value={newMovie.trailerLink}
          onChange={handleChange}
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
