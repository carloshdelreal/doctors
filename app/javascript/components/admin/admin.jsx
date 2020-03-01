import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import backCaret from '../../images/backCaret.png';
import BookingComponent from './booking';


const AdminComponent = ({ match }) => (
  <div>
    <div className="nav-component d-flex justify-content-space-between">
      <div className="item d-flex text-left">
        <button className="nav-component__button" type="button">
          <Link to="/">
            <img src={backCaret} alt="backcaret" />
          </Link>
        </button>
        <button className="nav-component__button" type="button">My Appointments</button>
      </div>
    </div>
    <div className="container">
      <div className="doctorProfile__navInfo row">
        <div className="admin__nav col-6 text-center">
          <NavLink to={match.url}>
            All
          </NavLink>
        </div>
        <div className="admin__nav col-6 text-center">
          <NavLink to={`${match.url}/upcoming`}>
            Upcoming
          </NavLink>
        </div>
      </div>
    </div>
    <div className="container pb-3">
      <Route exact path={match.url} component={BookingComponent} />
      <Route path={`${match.url}/upcoming`} render={() => (<BookingComponent upcoming />)} />
    </div>
  </div>
);

AdminComponent.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default AdminComponent;
