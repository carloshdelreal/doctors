import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavComponent from './nav';
import DoctorList from '../containers/doctorList';
import SpecialtiesList from '../containers/specialtiesList';
import SearchBox from './searchBox';
import { toggleOffSpecialty } from '../actions/index';


class SearchDoctor extends Component {
  constructor(props) {
    super(props);
    this.searchAgain = this.searchAgain.bind(this);
  }

  searchAgain() {
    const { toggleOffSpecialty } = this.props;
    toggleOffSpecialty();
  }

  render() {
    const { specialtySelected } = this.props;
    return (
      <div className="container">
        <NavComponent />
        { specialtySelected ? (null) : (<SearchBox />) }
        { specialtySelected
          ? (<DoctorList searchAgain={this.searchAgain} />)
          : (<SpecialtiesList />) }
      </div>
    );
  }
}

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  specialtySelected: state.specialtySelected,
});


// eslint-disable-next-line arrow-parens
const mapDispatchToProps = dispatch => ({
  toggleOffSpecialty: () => dispatch(toggleOffSpecialty()),
});


SearchDoctor.defaultProps = {
  specialtySelected: null,
};

SearchDoctor.propTypes = {
  specialtySelected: PropTypes.number,
  toggleOffSpecialty: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctor);
