import React from 'react';
import PropTypes from 'prop-types';

const SlideFilterComponent = (props) => {
  const {
    experience,
    price,
    slidePrice,
    slideExperience,
  } = props;
  return (
    <div className="row sliderFilters">
      <div className="col-12">
        <h3>Filter by:</h3>
        <p>
          Experience:
          { experience === '15' ? ` ${experience}+ years` : ` > ${experience} years`}
        </p>
        <input onChange={slideExperience} value={experience} type="range" min="0" max="15" className="slider" />
        <p>
          Price:
          { price === '300' ? ` $${price}+` : ` < $${price}`}
        </p>
        <input onChange={slidePrice} value={price} type="range" min="50" max="300" className="slider" />
      </div>
    </div>
  );
};

SlideFilterComponent.propTypes = {
  experience: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  slidePrice: PropTypes.instanceOf(Function).isRequired,
  slideExperience: PropTypes.instanceOf(Function).isRequired,
};

export default SlideFilterComponent;
