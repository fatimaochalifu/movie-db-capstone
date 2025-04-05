import MovieCard from "../components/MovieCard";
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
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          🎬 Movie Explorer
        </h1>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <p className="text-center text-lg mt-10 text-gray-600 animate-pulse">
            Fetching awesome movies...
          </p>
        ) : (
          <div className="mt-6">
            <MovieList
              movies={movies}
              renderMovie={(movie) => (
                <Link
                  to={`/movie/${movie.imdbID}`}
                  key={movie.imdbID}
                  className="transition-transform hover:scale-105"
                >
                  <MovieCard movie={movie} />
                </Link>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
