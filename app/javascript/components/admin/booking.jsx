import axios from 'axios';
import React from 'react';
import sortBookingByDatetime from '../../scripts/sorting';

class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listBooking: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/v1/user/booking');
    this.setState({ listBooking: sortBookingByDatetime(res.data.booking) });
  }

  render() {
    const { listBooking } = this.state;

    if (!listBooking) {
      return (<div>Loading...</div>);
    }

    if (listBooking.length === 0) {
      return (
        <div>You have not appointments</div>
      );
    }

    return (
      <div>
        { listBooking.map(item => (
          <div key={item.booking_id} className="container">
            <div className="row">
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
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BookingComponent;
