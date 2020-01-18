/* eslint-disable arrow-parens */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Doctor from '../components/doctor';

// eslint-disable-next-line react/prefer-stateless-function
class DoctorList extends Component {
  render() {
    const { doctors, specialties, specialtySelected } = this.props;
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
        <div className="row p-1">
          {specialtydoctors.map(doctor => (
            <Doctor
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

const mapDispatchToProps = dispatch => ({
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
