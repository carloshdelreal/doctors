import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DoctorList from '../containers/doctorList';
import SpecialtiesList from '../containers/specialtiesList';
import NavComponent from './nav';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const { specialtySelected } = this.props;
    return (
      <div className="p-3">
        <NavComponent />
        { specialtySelected ? (<DoctorList />) : (<SpecialtiesList />) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  specialtySelected: state.specialtySelected,
});


const mapDispatchToProps = dispatch => ({

});


App.defaultProps = {
  specialtySelected: null,
};

App.propTypes = {
  specialtySelected: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
