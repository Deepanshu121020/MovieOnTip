import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const API_KEY = 'cdea2041';
const INITIAL_QUERY = 'horror';

function CardCarousel({ query = INITIAL_QUERY }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const carouselRef = useRef(null);

  // Function to fetch movies
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${API_KEY}`
      );
      const data = await response.json();

      // Check if the API returned results
      if (data.Response === 'True') {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
        setTotalResults(parseInt(data.totalResults, 10));
      } else {
        console.error('No movies found:', data.Error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query, page]);

  // Function to scroll the carousel
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Load more movies when the end of the carousel is reached
  const handleScroll = (event) => {
    const { scrollWidth, scrollLeft, clientWidth } = event.target;
    if (scrollLeft + clientWidth >= scrollWidth - 5) {
      // Load more movies when close to the end
      if (movies.length < totalResults) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2"
        onClick={() => scroll('left')}
      >
        {'<'}
      </button>
      <div
        className="flex gap-4 my-6 mx-3 p-3 overflow-x-auto whitespace-nowrap"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {movies.map((movie) => (
          <Card key={movie.imdbID} image={movie.Poster} />
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2"
        onClick={() => scroll('right')}
      >
        {'>'}
      </button>
    </div>
  );
}

CardCarousel.propTypes = {
  query: PropTypes.string,
};

export default CardCarousel;
