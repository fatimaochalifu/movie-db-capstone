import { Link } from "react-router-dom";
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (!movies?.length) {
    return <p className="text-center mt-6 text-gray-600">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
