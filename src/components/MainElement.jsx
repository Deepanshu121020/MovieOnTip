import CardCarousel from './CardCaraousel'; // Correct file name

function MainElement() {
  return (
    <div className="bg-gray-950 ">
      <div className="mx-auto py-5">
        {/* Featured Movies Carousel */}
        <h2 className="text-white text-2xl font-semibold my-4 p-3 ">
          Horror Movies
        </h2>
        <CardCarousel query="horror" />

        <h2 className="text-white text-2xl font-semibold my-4 p-3">
          Action Movies
        </h2>
        <CardCarousel query="action" />
  
        <h2 className="text-white text-2xl font-semibold my-4 p-3">
          Comedy Movies
        </h2>
        <CardCarousel query="comedy" />
  
        <h2 className="text-white text-2xl font-semibold my-4 p-3">
          Drama Movies
        </h2>
        <CardCarousel query="Drama" />

        <h2 className="text-white text-2xl font-semibold my-4 p-3">
          Thriller Movies
        </h2>
        <CardCarousel query="thriller" />

        <h2 className="text-white text-2xl font-semibold my-4 p-3">
          Romantic Movies
        </h2>
        <CardCarousel query="romance" />

        <h2 className="text-white text-2xl font-semibold my-4 p-3">
          War Movies
        </h2>
        <CardCarousel query="war" />

        <h2 className="text-white text-2xl font-semibold my-4 p-3">
          Documentries
        </h2>
        <CardCarousel query="documentary" />
      </div>
    </div>
  );
}

export default MainElement;
