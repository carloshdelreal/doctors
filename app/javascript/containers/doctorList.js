import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Doctor from '../components/doctor';
import specialtyFilter from '../actions/index'

class DoctorList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { doctors, specialty } = this.props;
    console.log(this.props);
    let specialtydoctors;
    if (specialty === null) {
      specialtydoctors = doctors;
    } else {
      specialtydoctors = doctors.filter(doctor => doctor.specialization_id === specialty);
    }
    return (
      specialtydoctors.map(doctor => (
        <Doctor
          key={doctor.id}
          doctor={doctor}
        />
      ))
    );
  }
}


const mapStateToProps = state => ({
  doctors: state.doctors,
  specialty: state.specialty,
});

const mapDispatchToProps = dispatch => ({
  specialtyFilter: specialty => dispatch(specialtyFilter(specialty)),
});

DoctorList.defaultProps = {
  specialty: null,
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
  specialty: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
