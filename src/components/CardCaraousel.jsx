import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardCarousel({ query }) {
  const [movies, setMovies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to fetch movies
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=cdea2041`
      );
      const data = await response.json();

      // Check if the API returned results
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        console.error('No movies found:', data.Error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  // Scroll carousel to the left
  const scrollLeft = () => {
    setScrollPosition((prevPosition) => prevPosition - 300);
  };

  // Scroll carousel to the right
  const scrollRight = () => {
    setScrollPosition((prevPosition) => prevPosition + 300);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex gap-4 my-6 mx-3 p-3 overflow-x-auto no-scrollbar"
        style={{
          scrollBehavior: 'smooth',
          transform: `translateX(-${scrollPosition}px)`,
        }}
      >
        {movies.map((movie) => (
          <Card key={movie.imdbID} image={movie.Poster} title={movie.Title} />
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-transform duration-200 ease-in-out"
      >
        &lt;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-transform duration-200 ease-in-out"
      >
        &gt;
      </button>
    </div>
  );
}

CardCarousel.propTypes = {
  query: PropTypes.string.isRequired, // query should be a string and is required
};

export default CardCarousel;
