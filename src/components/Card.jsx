import PropTypes from 'prop-types';

function Card({ image }) {
  return (
    <div className="w-96 h-96 bg-gray-900 flex flex-col justify-center items-center rounded-lg  shadow-lg">
      <img
        className="w-96 h-96 max-w-[max-content]"
        src={image}
      />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired, // image should be a string and is required
};

export default Card;
