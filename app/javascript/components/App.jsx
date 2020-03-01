/* eslint-disable arrow-parens */
/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './home';
import SearchDoctor from './searchDoctor';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import BookAppointment from './appointBooking';
import DoctorProfile from './doctorProfile';
import AdminComponent from './admin/admin';
import { loadDoctors, loadAtend, loadSpecial } from '../actions/index';

const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  async componentDidMount() {
    const { loadDoctors, loadAtend, loadSpecial } = this.props;
    const resDoctors = await axios.get('/api/v1/doctor');
    loadDoctors(resDoctors.data);

    const resAtend = await axios.get('/api/v1/atend');
    loadAtend(resAtend.data.atends);

    const resSpecial = await axios.get('api/v1/specialization');
    loadSpecial(resSpecial.data);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doctor" exact component={SearchDoctor} />
            <Route path="/doctor/:id" component={DoctorProfile} />
            <Route path="/book/:id" component={BookAppointment} />
            <Route path="/about" render={() => <div>About</div>} />
            <Route path="/admin" component={AdminComponent} />
          </Switch>
        </div>
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
});

App.defaultProps = {
};

App.propTypes = {
  loadDoctors: PropTypes.instanceOf(Function).isRequired,
  loadAtend: PropTypes.instanceOf(Function).isRequired,
  loadSpecial: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
