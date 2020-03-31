import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import greenCheck from '../../images/greencheck.png';

const UpcomingBookingComponent = (props) => {
  const { userBookings } = props;

  const userBookingsUpdate = userBookings.filter(item => (
    new Date(
      item.datetime.slice(0, 4),
      parseInt(item.datetime.slice(5, 7), 10) - 1,
      item.datetime.slice(8, 10),
      item.datetime.slice(11, 13),
      item.datetime.slice(14, 16),
      0,
    ) > new Date()
  ));

  if (userBookingsUpdate.length === 0) {
    return (
      <div>You have not upcoming appointments</div>
    );
  }

  return (
    <div>
      { userBookingsUpdate.map(item => (
        <div key={item.booking_id} className="container">
          <div className="row bookingRow">
            <div className="booking col-12">
              <h5>
                { `${new Date(
                  item.datetime.slice(0, 4),
                  parseInt(item.datetime.slice(5, 7), 10) - 1,
                  item.datetime.slice(8, 10),
                  item.datetime.slice(11, 13),
                  item.datetime.slice(14, 16),
                  0,
                )}, at ${item.label} ` }
              </h5>
              <p>{ `With Dr. ${item.doctor.fullname}, ${item.specialty}, at ${item.doctor.location}` }</p>
            </div>
            <div className="bookingCheck">
              <img src={greenCheck} alt="green check" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

UpcomingBookingComponent.propTypes = {
  userBookings: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

const mapStateToProps = state => ({
  userBookings: state.userBookings,
});

export default connect(mapStateToProps, null)(UpcomingBookingComponent);
