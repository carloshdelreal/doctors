import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavComponent from './nav';
import DoctorList from '../containers/doctorList';
import SpecialtiesList from '../containers/specialtiesList';
import SearchBox from './searchBox';
import { loadDoctors, toggleOffSpecialty } from '../actions/index';


class SearchDoctor extends Component {
  constructor(props) {
    super(props);
    this.searchAgain = this.searchAgain.bind(this);
  }

  componentDidMount() {
    const { loadDoctors } = this.props;
    axios.get('/api/v1/doctor')
      .then((doctors) => {
        loadDoctors(doctors.data);
      });
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
  // eslint-disable-next-line arrow-parens
  loadDoctors: doctors => dispatch(loadDoctors(doctors)),
  toggleOffSpecialty: () => dispatch(toggleOffSpecialty()),
});


SearchDoctor.defaultProps = {
  specialtySelected: null,
};

SearchDoctor.propTypes = {
  specialtySelected: PropTypes.number,
  loadDoctors: PropTypes.instanceOf(Function).isRequired,
  toggleOffSpecialty: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctor);
