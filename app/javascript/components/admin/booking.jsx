import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import grayCheck from '../../images/graycheck.png';
import greenCheck from '../../images/greencheck.png';

const BookingComponent = (props) => {
  const { userBookings } = props;

  if (userBookings.length === 0) {
    return (
      <div>You have not appointments</div>
    );
  }

  return (
    <div>
      { userBookings.map(item => (
        <div key={item.booking_id} className="container">
          <div className="row bookingRow">
            <div className="booking col-12 pr-4">
              <h5>
                { `${item.datetimeObject}` }
              </h5>
              <p>{ `With Dr. ${item.doctor.fullname}, ${item.specialty}, at ${item.doctor.location}` }</p>
            </div>
            <div className="bookingCheck">
              { item.datetimeObject <= new Date()
                ? <img src={grayCheck} alt="gray check" />
                : <img src={greenCheck} alt="green check" /> }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

BookingComponent.propTypes = {
  userBookings: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

const mapStateToProps = state => ({
  userBookings: state.userBookings,
});

export default connect(mapStateToProps, null)(BookingComponent);
