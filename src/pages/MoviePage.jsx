// src/pages/MoviePage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetails from "../components/MovieDetails";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async () => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=5af799c6&i=${id}&plot=full`);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error("Failed to fetch movie details", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {loading ? (
        <p className="text-center text-lg mt-10">Loading movie details...</p>
      ) : (
        <MovieDetails movie={movie} />
      )}
    </div>
  );
};

export default MoviePage;
