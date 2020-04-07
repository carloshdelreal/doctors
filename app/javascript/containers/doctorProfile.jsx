import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Route, NavLink } from 'react-router-dom';
import BackCaretWhite from '../images/backCaretWhite.png';
import locationWhite from '../images/locationWhite.png';
import callWhite from '../images/callWhite.png';
import profileImg from '../images/doctorImage.jpg';
import messageWhite from '../images/messageWhite.png';
import mapImage from '../images/map.png';
import { toggleOffSpecialty } from '../actions/index';

const DoctorInfo = () => (
  <div className="doctorProfile__doctorInfo">
    <h5>Education</h5>
    <ul>
      <li>
        MD - General Medicine|College Name
      </li>
      <li>
        MBBS-Nephrology|More info
      </li>
    </ul>

    <h5>Specialization</h5>
    <ul>
      <li>
        Consultation Physician
      </li>
      <li>
        Internal Medicine
      </li>
    </ul>

    <h5>Services Offered</h5>
    <ul>
      <li>
        Peritoneal Dialysis
      </li>
      <li>
        Kidney Stone treatment
      </li>
    </ul>
  </div>
);

const ClinicInfo = () => (
  <div className="doctorProfile__clinicInfo">
    <h5>Santa Ana Clinic</h5>
    <p>Here the direction and more info about the clinic</p>
    <img src={mapImage} alt="locationMap" />
  </div>
);


const Feedback = () => (
  <div className="doctorProfile__feedback">
    <div>
      <p className="doctorProfile__feedback--date">10 days ago</p>
      <h5>happyUser123</h5>
      <p className="doctorProfile__feedback--post">
        doctor is very kind and Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quas, et possimus, repellendus
        consequatur perspiciatis maxime qui, iure at praesentium
        consectetur vel! At ut adipisci officiis ipsam delectus
        aliquid vel earum.
      </p>
    </div>
    <hr />
    <div>
      <p className="doctorProfile__feedback--date">10 days ago</p>
      <h5>happyUser123</h5>
      <p className="doctorProfile__feedback--post">
        doctor is very kind and Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quas, et possimus, repellendus
        consequatur perspiciatis maxime qui, iure at praesentium
        consectetur vel! At ut adipisci officiis ipsam delectus
        aliquid vel earum.
      </p>
    </div>
  </div>
);

// eslint-disable-next-line react/prefer-stateless-function
class DoctorProfile extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.searchAgain = this.searchAgain.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const docInfo = await axios.get(`/api/v1/doctor/${match.params.id}`);
    this.setState(docInfo.data);
  }

  searchAgain() {
    const { toggleOffSpecialty } = this.props;
    toggleOffSpecialty();
  }

  render() {
    const { match, specialtyDict } = this.props;
    const {
      fullname,
      // eslint-disable-next-line camelcase
      specialization_id,
      experience,
      price,
    } = this.state;
    return (
      <div>
        <div className="doctorProfile container">
          <nav className="doctorProfile__nav row justify-content-between">
            <div className="col-6 text-left">
              <Link to="/doctor" onClick={() => this.searchAgain}>
                <img src={BackCaretWhite} alt="back caret" />
              </Link>
            </div>
            <div className="doctorProfile__location col-6">
              <div>
                <img src={locationWhite} alt="location" />
              </div>
              <div className="doctorProfile__location--text">
                bangalore
              </div>
            </div>
          </nav>

          <div className="doctorProfile__heading row justify-content-center">
            <div className="col-12 text-center">
              <h3>{`Dr. ${fullname}`}</h3>
            </div>
            <div className="col-10 text-center">
              <div className="doctorProfile__heading--call d-inline-block">
                <img src={callWhite} alt="call" />
              </div>
              <div className="doctorProfile__heading--picture rounded-circle d-inline-block">
                <img src={profileImg} alt="doctor profile" />
              </div>
              <div className="doctorProfile__heading--message d-inline-block">
                <img src={messageWhite} alt="message" />
              </div>
            </div>
            <div className="col-12 text-center">
              <p className="text-capitalize">{specialtyDict[specialization_id]}</p>
            </div>
          </div>

          <div className="container doctorProfile__heading--exp doctor__price_exp_likes py-1">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="row">
                  <div className="text-left p-0 col-3">
                    <p>
                      { `$${price}` }
                    </p>
                  </div>
                  <div className="text-center p-0 col-6">
                    <p>
                      { `${experience} yrs of exp` }
                    </p>
                  </div>
                  <div className="doctor__price_exp_likes--likes text-right p-0 col-3">
                    <p>
                      <span>&hearts;</span>
                      123
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="doctorProfile__navInfo row">
            <div className="col-4 text-center">
              <NavLink to={match.url} activeStyle={{ color: 'red' }}>
                Doctor&apos;s Info
              </NavLink>
            </div>
            <div className="col-4 text-center">
              <NavLink to={`${match.url}/email`} activeStyle={{ color: 'red' }}>
                Clinic&apos;s Info
              </NavLink>
            </div>
            <div className="col-4 text-center">
              <NavLink to={`${match.url}/address`} activeStyle={{ color: 'red' }}>
                Feedback
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container">
          <Route exact path={match.url} component={DoctorInfo} />
          <Route path={`${match.url}/email`} component={ClinicInfo} />
          <Route path={`${match.url}/address`} component={Feedback} />
        </div>
        <div className="container">
          <div className="doctorProfile__bookAppointment row justify-content-center">
            <div className="col-10">
              <Link to={`/doctor/${match.params.id}/book`}>
                <button className="btn btn-block doctorProfile__bookButton" type="button">Book Appointment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  specialties: state.specialties,
  specialtyDict: state.specialtyDict,
});

// eslint-disable-next-line arrow-parens
const mapDispatchToProps = dispatch => ({
  toggleOffSpecialty: () => dispatch(toggleOffSpecialty()),
});

DoctorProfile.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  toggleOffSpecialty: PropTypes.instanceOf(Function).isRequired,
  specialtyDict: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfile);
