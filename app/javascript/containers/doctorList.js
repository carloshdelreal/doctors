/* eslint-disable arrow-parens */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DoctorCard from '../components/doctorCard';
import searchingFilter from '../images/searchingVariables.png';

// eslint-disable-next-line react/prefer-stateless-function
class DoctorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFilter: false,
      experience: 15,
      price: 300,
    };
    this.toggleFilter = this.toggleFilter.bind(this);
    this.slideExperience = this.slideExperience.bind(this);
    this.slidePrice = this.slidePrice.bind(this);
  }

  toggleFilter() {
    const { displayFilter } = this.state;
    this.setState({ displayFilter: !displayFilter });
  }

  slideExperience(event) {
    this.setState({ experience: event.target.value });
  }

  slidePrice(event) {
    this.setState({ price: event.target.value });
  }

  render() {
    const { doctors, specialties, specialtySelected } = this.props;
    const { displayFilter, experience, price } = this.state;
    let specialtydoctors;
    let specialty;
    if (specialtySelected === null) {
      specialtydoctors = doctors;
      specialty = null;
    } else {
      specialtydoctors = doctors.filter(doctor => doctor.specialization_id === specialtySelected);
      specialty = specialties[specialtySelected - 1];
    }
    return (
      <div className="doctorsList px-3">
        <p className="doctorsList__results">{ `Results showing ${specialty.area} Doctors` }</p>
        <div className="searchingFilter">
          <button type="button" onClick={this.toggleFilter}>
            <img src={searchingFilter} alt="searching variables" />
          </button>
        </div>
        { !displayFilter
          ? null
          : (
            <div className="row sliderFilters">
              <div className="col-12">
                <h3>Filter by:</h3>
                <p>
                  Experience:
                  { experience === '15' ? ` ${experience}+ years` : ` < ${experience} years`}
                </p>
                <input onChange={this.slideExperience} value={experience} type="range" min="0" max="15" className="slider" />
                <p>
                  Price:
                  { price === '300' ? ` $${price}+` : ` < $${price}`}
                </p>
                <input onChange={this.slidePrice} value={price} type="range" min="50" max="300" className="slider" />
              </div>
            </div>
          )}

        <div className="row p-1">
          {specialtydoctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              specialty={specialty}
            />
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  doctors: state.doctors,
  specialtySelected: state.specialtySelected,
  specialties: state.specialties,
});

const mapDispatchToProps = () => ({
});

DoctorList.defaultProps = {
  specialtySelected: null,
};

DoctorList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      docname: PropTypes.string,
      location: PropTypes.string,
      fullname: PropTypes.string,
      specialization_id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  specialtySelected: PropTypes.number,
  specialties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      area: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
