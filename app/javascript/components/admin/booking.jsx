import axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listBooking: null,
    };
  }

  async componentDidMount() {
    const { atends, doctors, specialties } = this.props;
    const booking = await axios.get('/api/v1/booking');

    const dictAtend = {};
    atends.forEach((item) => {
      const s = item.date;
      const year = s.slice(0, 4);
      const month = s.slice(5, 7);
      const day = s.slice(8);
      const date = new Date(year, month, day);
      dictAtend[item.id] = [item.date, date];
    });

    const specialDict = {};
    specialties.forEach((item) => {
      specialDict[item.id] = item.area;
    });

    const dictDoctor = {};
    doctors.forEach((doctor) => {
      dictDoctor[doctor.id] = [
        doctor.fullname, doctor.location, specialDict[doctor.specialization_id]];
    });

    const listBooking = [];
    booking.data.booking.forEach((item) => {
      listBooking.push(
        [item.id, item.label,
          ...dictDoctor[item.doctor_id], ...dictAtend[item.atend_id]],
      );
    });
    this.setState({ listBooking });
  }

  render() {
    const { upcoming } = this.props;
    const { listBooking } = this.state;

    if (!listBooking) {
      return (<div>Loading...</div>);
    }

    if (upcoming) {
      return (
        <div>
          upcomming
        </div>
      );
    }
    if (listBooking.length === 0) {
      return (
        <div>You have not appointments</div>
      );
    }

    return (
      <div>
        { listBooking.map(item => (
          <div key={item[0]} className="container">
            <div className="row">
              <div className="booking col-12">
                <h5>{ `${item[6].toDateString()}, at ${item[1]} ` }</h5>
                <p>{ `With Dr. ${item[2]}, ${item[4]}, at ${item[3]}` }</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


// eslint-disable-next-line arrow-parens
const mapStateToProps = state => ({
  doctors: state.doctors,
  specialties: state.specialties,
  atends: state.atends,
});

const mapDispatchToProps = () => ({
});

BookingComponent.defaultProps = {
  upcoming: false,
};

BookingComponent.propTypes = {
  upcoming: PropTypes.bool,
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      docname: PropTypes.string,
      location: PropTypes.string,
      fullname: PropTypes.string,
      specialization_id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  specialties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      area: PropTypes.string,
    }),
  ).isRequired,
  atends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
    }),
  ).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BookingComponent);
