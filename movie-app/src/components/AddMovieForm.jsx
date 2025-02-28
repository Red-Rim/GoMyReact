import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailerLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);    //add the new movie
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
      trailerLink: '',
    });
  };

   //add the new movie form
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-indigo-500">Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={newMovie.title}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-lg font-medium">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={newMovie.description}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="posterURL" className="block text-lg font-medium">Poster URL</label>
          <input
            type="text"
            name="posterURL"
            id="posterURL"
            value={newMovie.posterURL}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="rating" className="block text-lg font-medium">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={newMovie.rating}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="trailerLink" className="block text-lg font-medium">Trailer Link (Embed Link)</label>
          <input
            type="text"
            name="trailerLink"
            id="trailerLink"
            value={newMovie.trailerLink}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;