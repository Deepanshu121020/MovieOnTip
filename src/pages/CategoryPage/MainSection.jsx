import PropTypes from 'prop-types';

function MainSection() {
  return (
    <div className=''>
        <div className="p-2 m-2">
            <span className="text-white p-4 text-2xl justify-center items-center flex   ">Search movies by categories</span>
            <div className="flex p-2 justify-center items-center">
            <div className="bg-white rounded-xl h-64 w-56 m-4">
                <img src={''} alt=""/>
            </div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Adventure</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Animation</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Horror</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Biography</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Children</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Comedy</div>
            </div>
            
            <div className="flex p-2 justify-center items-center">
            <div className="bg-white rounded-xl h-64 w-56 m-4">Crime</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Documentary</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Drama</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Family</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Fantasy</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">History</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Non-Fiction</div>
            </div>

            <div className="flex p-2 justify-center items-center">
            <div className="bg-white rounded-xl h-64 w-56 m-4">Action</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Adventure</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Animation</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Horror</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Biography</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Children</div>
            <div className="bg-white rounded-xl h-64 w-56 m-4">Comedy</div>
            </div>
        </div>
    </div>
  )
}

MainSection.propTypes = {
    image: PropTypes.string.isRequired, // image should be a string and is required
  };

export default MainSection
