/* eslint-disable arrow-parens */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DoctorCards from '../components/doctorCards';
import searchingFilter from '../images/searchingVariables.png';
import SlideFiltersComponent from '../components/slideFilters';

// eslint-disable-next-line react/prefer-stateless-function
class DoctorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFilter: false,
      experience: 0,
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
    this.setState({ experience: parseInt(event.target.value, 10) });
  }

  slidePrice(event) {
    this.setState({ price: parseInt(event.target.value, 10) });
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
      specialtydoctors = doctors.filter(doctor => (
        doctor.specialization_id === specialtySelected
        && doctor.price < price
        && doctor.experience > experience));
      specialty = specialties[specialtySelected - 1];
    }
    return (
      <main className="doctorsList px-3">
        <p className="doctorsList__results">{ `Results showing ${specialty.area} Doctors` }</p>
        <div className="searchingFilter">
          <button type="button" onClick={this.toggleFilter}>
            <img src={searchingFilter} alt="searching variables" />
          </button>
        </div>

        { !displayFilter
          ? null
          : (
            <SlideFiltersComponent
              experience={experience}
              price={price}
              slideExperience={this.slideExperience}
              slidePrice={this.slidePrice}
            />
          )}

        <DoctorCards doctors={specialtydoctors} specialty={specialty} />
      </main>
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
