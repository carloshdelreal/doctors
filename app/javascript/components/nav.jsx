import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toggleOffSpecialty } from '../actions/index';
import backCaret from '../images/backCaret.png';

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
      <nav className="nav-component d-flex justify-content-space-between">
        <div className="item d-flex text-left">
          <button className="nav-component__button" type="button">
            <Link to="/" onClick={this.unselectSpecialty}>
              <img src={backCaret} alt="backcaret" />
            </Link>
          </button>
          <button className="nav-component__button" type="button" onClick={this.unselectSpecialty}>{ buttonText }</button>
        </div>
      </nav>
    );
  }
}


// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  specialtySelected: state.specialtySelected,
  specialty: state.specialty,
  specialties: state.specialties,
});


// eslint-disable-next-line arrow-parens
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
  toggleOffSpecialty: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
