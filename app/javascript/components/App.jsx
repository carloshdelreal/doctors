/* eslint-disable import/no-named-as-default */
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home';
import SearchDoctor from './searchDoctor';
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import BookAppointment from './appointBooking';
import DoctorProfile from './doctorProfile';
import AdminComponent from './admin';

const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
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
