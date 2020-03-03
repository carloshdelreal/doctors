/* eslint-disable arrow-parens */
/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import Home from './home';
import SearchDoctor from './searchDoctor';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import BookAppointment from './appointBooking';
import DoctorProfile from './doctorProfile';
import AdminComponent from './admin/admin';
import {
  loadDoctors, loadAtend, loadSpecial, loadSpecialtyDict, loadUserData,
} from '../actions/index';

const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  async componentDidMount() {
    const {
      loadDoctors, loadAtend, loadSpecial, loadSpecialtyDict, loadUserData,
    } = this.props;

    const resDoctors = await axios.get('/api/v1/doctor');
    loadDoctors(resDoctors.data);

    const resAtend = await axios.get('/api/v1/atend');
    loadAtend(resAtend.data.atends);

    const resUser = await axios.get('/api/v1/user');
    loadUserData(resUser.data);

    const resSpecial = await axios.get('api/v1/specialization');
    const specialties = resSpecial.data;
    loadSpecial(specialties);

    const specialtyDict = {};
    specialties.forEach((specialty) => {
      if (specialtyDict[specialty.id] === undefined) {
        specialtyDict[specialty.id] = specialty.area;
      }
    });

    loadSpecialtyDict(specialtyDict);
  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doctor" exact component={SearchDoctor} />
            <Route path="/doctor/:id/book" exact component={BookAppointment} />
            <Route path="/doctor/:id" component={DoctorProfile} />
            <Route path="/about" render={() => <div>About</div>} />
            <Route path="/admin" component={AdminComponent} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  loadDoctors: doctors => dispatch(loadDoctors(doctors)),
  loadAtend: atends => dispatch(loadAtend(atends)),
  loadSpecial: special => dispatch(loadSpecial(special)),
  loadSpecialtyDict: dict => dispatch(loadSpecialtyDict(dict)),
  loadUserData: user => dispatch(loadUserData(user)),
});

App.defaultProps = {
};

App.propTypes = {
  loadDoctors: PropTypes.instanceOf(Function).isRequired,
  loadAtend: PropTypes.instanceOf(Function).isRequired,
  loadSpecial: PropTypes.instanceOf(Function).isRequired,
  loadSpecialtyDict: PropTypes.instanceOf(Function).isRequired,
  loadUserData: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
