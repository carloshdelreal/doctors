/* eslint-disable arrow-parens */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Specialty from '../components/specialty';
import { specialtyFilter, toggleOffSpecialty } from '../actions/index';
import stetoscope from '../images/stetoscope.png';

function LogoutButton(props) {
  const { onClick } = props;
  return (
    <div className="col-6 col-xs-6 col-sm-4 p-0 d-flex justify-content-center">
      <button className="btn btn-warning btn-lg btn-block m-1" type="button" onClick={onClick}>
        unselect
      </button>
    </div>
  );
}

class SpecialtiesList extends Component {
  constructor(props) {
    super(props);
    this.selectSpecialty = this.selectSpecialty.bind(this);
    this.unselectSpecialty = this.unselectSpecialty.bind(this);
  }

  selectSpecialty(specialty) {
    const { specialtyFilter } = this.props;
    specialtyFilter(specialty.id);
  }

  unselectSpecialty() {
    const { toggleOffSpecialty } = this.props;
    toggleOffSpecialty();
  }

  render() {
    const { specialties, specialtySelected } = this.props;
    let selectedSpecialties;
    if (specialtySelected === null) {
      selectedSpecialties = specialties;
    } else {
      selectedSpecialties = specialties.filter(specialty => specialty.id === specialtySelected);
    }

    return (
      <div className="px-3">
        <div className="row">
          <div className="specialtiesList__instructions col-12 text-center">
            <img src={stetoscope} alt="stetos logo" />
            <h3>
              Search Doctor
            </h3>
            <p>
              search by directly typing the doctors name, specialty,
              symtoms, clinics, hospital, etc. You can also search by
              health concerns listed below
            </p>
          </div>
          {selectedSpecialties.map(specialty => (
            <Specialty
              key={specialty.id}
              specialty={specialty}
              selectSpecialty={() => this.selectSpecialty(specialty)}
            />
          ))}
          { specialtySelected ? (LogoutButton({ onClick: this.unselectSpecialty })) : (null) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  specialties: state.specialties,
  specialtySelected: state.specialtySelected,
});

const mapDispatchToProps = dispatch => ({
  specialtyFilter: specialtyId => dispatch(specialtyFilter(specialtyId)),
  toggleOffSpecialty: () => dispatch(toggleOffSpecialty()),
});

LogoutButton.propTypes = {
  onClick: PropTypes.instanceOf(Function).isRequired,
};

SpecialtiesList.defaultProps = {
  specialtySelected: null,
};

SpecialtiesList.propTypes = {
  specialties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      area: PropTypes.string,
    }).isRequired,
  ).isRequired,
  specialtySelected: PropTypes.number,
  specialtyFilter: PropTypes.instanceOf(Function).isRequired,
  toggleOffSpecialty: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialtiesList);
