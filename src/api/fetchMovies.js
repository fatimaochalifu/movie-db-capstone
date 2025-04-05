export const fetchMovies = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=5af799c6&s=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
  
      if (data.Response === "True") {
        return data.Search;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  };
  