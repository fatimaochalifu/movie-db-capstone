// src/pages/Home.jsx
import MovieCard from "../components/MovieCard"; // ✅ Add this line
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { fetchMovies } from "../api/fetchMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await fetchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center text-lg mt-10">Loading...</p>
      ) : (
        <MovieList
          movies={movies}
          renderMovie={(movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Link>
          )}
        />
      )}
    </div>
  );
};

export default Home;
