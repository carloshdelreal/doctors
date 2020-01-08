import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Doctor from '../components/doctor';
import specialtyFilter from '../actions/index';

class DoctorList extends Component {
  render() {
    const { doctors, specialtyFilter } = this.props;
    let specialtydoctors;
    if (specialtyFilter === null) {
      specialtydoctors = doctors;
    } else {
      specialtydoctors = doctors.filter(doctor => doctor.specialization_id === specialtyFilter);
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
  specialty: state.specialty.id,
});

const mapDispatchToProps = dispatch => ({
  specialtyFilter: specialtyFilter => dispatch(specialtyFilter(specialtyFilter)),
});

DoctorList.defaultProps = {
  specialtyFilter: null,
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
  specialtyFilter: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
