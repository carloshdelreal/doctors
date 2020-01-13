import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toggleOffSpecialty } from '../actions/index';

function backButton(props) {
  const { onClick } = props;
  return (
    <div className="col-6 col-xs-6 col-sm-4 p-0 d-flex justify-content-center">
      <button className="btn btn-warning btn-lg btn-block m-1" type="button" onClick={onClick}>
        unselect
      </button>
    </div>
  );
}

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.unselectSpecialty = this.unselectSpecialty.bind(this);
  }

  unselectSpecialty() {
    const { toggleOffSpecialty } = this.props;
    toggleOffSpecialty();
  }

  render() {
    const { specialties, specialtySelected } = this.props;
    let specialty;
    let buttonText;
    if (specialtySelected === null) {
      buttonText = 'Doctor';
    } else {
      specialty = specialties[specialtySelected - 1];
      buttonText = `${specialty.area} Doctor`;
    }

    return (
      <div className="nav-component d-flex p-2 justify-content-space-between">
        <div className="item d-flex text-left">
          <button className="nav-component__button" type="button" onClick={this.unselectSpecialty}>&#60;</button>
          <button className="nav-component__button" type="button" onClick={this.unselectSpecialty}>{ buttonText }</button>
        </div>

        <div className="item text-right">
          <a className="btn btn-danger" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  specialtySelected: state.specialtySelected,
  specialty: state.specialty,
  specialties: state.specialties,
});


const mapDispatchToProps = dispatch => ({
  toggleOffSpecialty: () => dispatch(toggleOffSpecialty()),
});


NavComponent.defaultProps = {
  specialtySelected: null,
};

NavComponent.propTypes = {
  specialtySelected: PropTypes.number,
  specialties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      area: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
