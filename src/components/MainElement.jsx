import CardCarousel from './CardCaraousel'; // Correct file name

function MainElement() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="mx-auto p-4">
        {/* Featured Movies Carousel */}
        <h2 className="text-white text-2xl font-semibold my-4">
          Featured Movies
        </h2>
        <CardCarousel query="batman" />

        {/* Genre: Action Movies Carousel */}
        <h2 className="text-white text-2xl font-semibold my-4">Action Movies</h2>
        <CardCarousel query="action" />

        {/* Genre: Comedy Movies Carousel */}
        <h2 className="text-white text-2xl font-semibold my-4">Comedy Movies</h2>
        <CardCarousel query="comedy" />

        {/* Genre: Sci-Fi Movies Carousel */}
        <h2 className="text-white text-2xl font-semibold my-4">Sci-Fi Movies</h2>
        <CardCarousel query="sci-fi" />

        {/* Genre: Horror Movies Carousel */}
        <h2 className="text-white text-2xl font-semibold my-4">Horror Movies</h2>
        <CardCarousel query="horror" />
      </div>
    </div>
  );
}

export default MainElement;
