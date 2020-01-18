import React from 'react';
import PropTypes from 'prop-types';
import userImage from '../images/user.png';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor, specialty }) => (
  <div className="doctor col-xs-12 col-sm-6 px-4 py-4 d-flex justify-content-center">
    <div className="container shadow-sm p-3">
      <div className="row">
        <div className="col-3 p-3">
          <div className="text-center p-2">
            <img className="w-100 rounded-circle bg-light" src={userImage} alt="User_Image" />
          </div>
        </div>
        <div className="col-9">
          <div className="pb-2">
            <h5 className="mb-0 mt-2 doctor__title">
              Dr.
              {' '}
              {doctor.fullname}
            </h5>
            <p className="m-0 doctor__specialty">{specialty.area}</p>
            <p className="m-0 doctor__docname">{doctor.docname}</p>
            <p className="m-0 doctor__location">{`Location: ${doctor.location}`}</p>
            <div className="container doctor__price_exp_likes py-1">
              <div className="row">
                <div className="text-left p-0 col-4">
                  <p>
                    $150
                  </p>
                </div>
                <div className="text-center p-0 col-4">
                  <p>
                    12 yrs of exp
                  </p>
                </div>
                <div className="doctor__price_exp_likes--likes text-right p-0 col-4">
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
      <div className="row justify-content-center">
        <div className="col-12 text-center p-2">
          <div className="doctor__view_profile">
            <Link to={`/doctor/${doctor.id}`}>
              View Profile
            </Link>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-right">
          <button type="button" className="btn doctor__btn-call btn-block btn-sm rounded-pill">Call</button>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-left">
          <button type="button" className="btn doctor__btn-book btn-block btn-sm rounded-pill">Book</button>
        </div>
      </div>
    </div>
  </div>
);

Doctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    docname: PropTypes.string,
    location: PropTypes.string,
    fullname: PropTypes.string,
    specialization_id: PropTypes.number,
  }).isRequired,
  specialty: PropTypes.shape({
    id: PropTypes.number,
    area: PropTypes.string,
  }).isRequired,
};

export default Doctor;
