import axios from 'axios';
import React from 'react';
import sortBookingByDatetime from '../../scripts/sorting';
import greenCheck from '../../images/greencheck.png';

class UpcomingBookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listBooking: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/v1/user/upcoming');
    this.setState({ listBooking: sortBookingByDatetime(res.data.booking) });
  }

  render() {
    const { listBooking } = this.state;

    if (!listBooking) {
      return (<div>Loading...</div>);
    }

    if (listBooking.length === 0) {
      return (
        <div>You have not upcoming appointments</div>
      );
    }

    return (
      <div>
        { listBooking.map(item => (
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
  }
}

export default UpcomingBookingComponent;
