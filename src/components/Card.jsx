import PropTypes from 'prop-types';

function Card({ image, title }) {
  return (
    <div className="w-96 sm:w-72 h-96 bg-gray-900 flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-96 h-80 object-cover sm:w-[280px] sm:h-[376px]"
        src={image}
        alt={title}
      />
      <div className="text-white text-center mt-2 px-2">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired, // image should be a string and is required
  title: PropTypes.string.isRequired, // title should be a string and is required
};

export default Card;
