// src/components/MovieCard.jsx
const MovieCard = ({ movie }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
          alt={movie.Title}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{movie.Title}</h3>
          <p className="text-gray-500">{movie.Year}</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  