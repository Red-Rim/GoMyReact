import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';
import AddMovieForm from './components/AddMovieForm';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'John Wick 1',
      description: 'A retired hitman seeks vengeance against those who wronged him.',
      posterURL: '/john1.png',
      rating: 1000,
      trailerLink: 'https://www.youtube.com/embed/2AUmvWm5ZDQ',
    },
    {
      title: 'John Wick 2',
      description: 'John Wick is forced to honor a blood oath to a former associate.',
      posterURL: '/john2.png',
      rating: 1000,
      trailerLink: 'https://www.youtube.com/embed/XGk2EfbD_Ps',
    },
    {
      title: 'John Wick 3',
      description: 'After being excommunicated, John Wick fights for survival against the world’s deadliest assassins.',
      posterURL: '/john3.png',
      rating: 1000,
      trailerLink: 'https://www.youtube.com/embed/M7XM597XO94',
    },
    {
      title: 'John Wick 4',
      description: 'John Wick uncovers a path to defeating the High Table, but must face new enemies.',
      posterURL: '/john4.png',
      rating: 1000,
      trailerLink: 'https://www.youtube.com/embed/qEVUtrk8_B4',
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]); //add new movie to list
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= (ratingFilter || 0);
    return matchesTitle && matchesRating;
  });

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <h1 className="text-4xl font-bold text-indigo-500 mb-8">Movie App</h1>
        
        <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />

        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
          <Route path="/add-movie" element={<AddMovieForm addMovie={addMovie} />} />
        </Routes>

        <Link to="/add-movie" className="text-indigo-400 hover:text-indigo-300 mt-6 inline-block text-lg">
          + Add a New Movie
        </Link>
      </div>
    </Router>
  );
};

export default App;
