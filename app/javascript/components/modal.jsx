import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ModalComponent = ({ show, handleClose, handleAccept }) => {
  let style;
  if (show) {
    style = { display: 'block' };
  } else {
    style = { display: 'none' };
  }
  return (
    <div>
      <div className="modal" style={style}>
        <div className="modal__box">
          <div>
            <h5>Confirm Booking</h5>
          </div>
          <div>The Appointment will be booked for the specified Date and Time</div>
          <div className="row justify-content-center p-3">
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-right">
              <button onClick={handleClose} type="button" className="btn doctor__btn-call btn-block btn-sm rounded-pill">Discard</button>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-left">
              <Link to="/" onClick={handleAccept}>
                <button type="button" className="btn doctor__btn-book btn-block btn-sm rounded-pill">
                  Book
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  handleAccept: PropTypes.instanceOf(Function).isRequired,
};

export default ModalComponent;
