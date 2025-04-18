const MovieDetails = ({ movie }) => {
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full md:w-1/3 object-cover rounded"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-gray-600 italic mb-4">{movie.Released} • {movie.Genre}</p>
          <p className="mb-4">{movie.Plot}</p>

          <div className="mt-6 space-y-3">
            <p><strong>Cast:</strong> {movie.Actors}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Writer:</strong> {movie.Writer}</p>

            <div>
              <strong>Ratings:</strong>
              <div className="space-y-1 mt-2">
                {movie.Ratings && movie.Ratings.map((rating, index) => (
                  <p key={index}>
                    <strong>{rating.Source}:</strong> {rating.Value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
