const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72 md:w-80 lg:w-72 xl:w-64 mx-auto">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
        className="w-full h-72 object-cover sm:h-80 md:h-72"
      />
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 truncate">{movie.Title}</h3>
        <p className="text-gray-500 text-sm sm:text-base">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
