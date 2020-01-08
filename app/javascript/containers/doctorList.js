import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Doctor from '../components/doctor';

// eslint-disable-next-line react/prefer-stateless-function
class DoctorList extends Component {
  render() {
    const { doctors, specialtySelected } = this.props;
    let specialtydoctors;
    if (specialtySelected === null) {
      specialtydoctors = doctors;
    } else {
      specialtydoctors = doctors.filter(doctor => doctor.specialization_id === specialtySelected);
    }
    return (
      <div className="px-3">
        <h3>Doctors</h3>
        <div className="row">
          {specialtydoctors.map(doctor => (
            <Doctor
              key={doctor.id}
              doctor={doctor}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
