/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBox from './searchBox';
import menu from '../images/menu.png';
import location from '../images/location.png';
import medicoTitle from '../images/homeTitle.png';
import homeImage from '../images/home.png';
import pharmacy from '../images/pharmacy.png';
import stetoscope from '../images/stetoscope.png';
import setReminder from '../images/reminder.png';
import ambulance from '../images/ambulance.png';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { userData } = this.props;
    if (!userData) {
      return (<div>Loading...</div>);
    }

    return (
      <div className="home container">
        <div className="home__nav row justify-content-between">
          <div className="col-6 text-left">
            <Link to="/admin">
              <img src={menu} alt="menu" />
            </Link>
          </div>
          <div className="home__location col-6">
            <div>
              <img src={location} alt="location" />
            </div>
            <div className="home__location--text">
              bangalore
            </div>
          </div>
        </div>
        <div className="home__images row pt-1 pb-3">
          <div className="home__images--left col-6 align-items-center">
            <div>
              <img src={medicoTitle} alt="medico_title" />
              <p>
                Changing the way you receive healthcare with medical
                excellence.
              </p>
            </div>
          </div>
          <div className="home__images--right col-6">
            <img src={homeImage} alt="home_image" />
          </div>
        </div>
        <SearchBox />
        <div className="home__items row justify-content-center">
          <div className="col-5 col-xs-6 col-sm-4 p-2 d-flex justify-content-center">
            <button className="home__items--button btn btn-lg btn-block shadow-sm" type="button">
              <img src={pharmacy} alt="pharmacy logo" />
              <p>Pharmacy</p>
            </button>
          </div>
          <div className="col-5 col-xs-6 col-sm-4 p-2 d-flex justify-content-center">
            <button className="home__items--button btn btn-lg btn-block shadow-sm" type="button">
              <Link to="/doctor">
                <img src={stetoscope} alt="doctorLogo" />
                <p>Doctors</p>
              </Link>
            </button>
          </div>
          <div className="col-5 col-xs-6 col-sm-4 p-2 d-flex justify-content-center">
            <button className="home__items--button btn btn-lg btn-block shadow-sm" type="button">
              <img src={setReminder} alt="set reminder" />
              <p>Set Reminder</p>
            </button>
          </div>
          <div className="col-5 col-xs-6 col-sm-4 p-2 d-flex justify-content-center">
            <button className="home__items--button btn btn-lg btn-block shadow-sm" type="button">
              <img src={ambulance} alt="ambulance" />
              <p>Emergency</p>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-8 profile__email text-center">
            <p><strong>hello,</strong></p>
            <p>{ userData.email }</p>
          </div>
        </div>
        <div className="row">
          <div className="col-8 profile__logout text-center">
            <a className="btn btn-danger" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  userData: state.userData,
});


// eslint-disable-next-line arrow-parens
const mapDispatchToProps = () => ({
});


Home.defaultProps = {
  userData: null,
};

Home.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
