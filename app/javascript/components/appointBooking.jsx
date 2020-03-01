import axios from 'axios';
import Calendar from 'react-calendar';
import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackCaretWhite from '../images/backCaretWhite.png';
import CarrouselSelector from './carrousel';
import ModalComponent from './modal';
import DoctorBookingCard from './doctorBookingCard';

class BookAppointment extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    do {
      date.setDate(date.getDate() + 1);
    } while (date.getDay() === 0 || date.getDay() === 6);

    this.state = {
      date,
      booking: null,
      selected: 0,
      show: false,
    };

    this.calendarChange = this.calendarChange.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.newTime = this.newTime.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const res = await axios.get(`/api/v1/doctor/${match.params.id}/booking`);
    const resAtend = await axios.get('/api/v1/atend');
    const dictAtend = {};
    resAtend.data.atends.forEach((item) => {
      if (dictAtend[item.id] == null) {
        const year = item.date.slice(0, 4);
        const month = parseInt(item.date.slice(5, 7), 10) - 1;
        const day = item.date.slice(8);
        const d = new Date(year, month, day);
        dictAtend[item.id] = d.toLocaleDateString('en-US');
      }
    });

    const dict = {};
    res.data.booking.forEach((item) => {
      if (dictAtend[item.atend_id] != null) {
        if (dict[dictAtend[item.atend_id]] == null) {
          dict[dictAtend[item.atend_id]] = [[item.label, item.hour, item.minutes, item.id]];
        } else {
          dict[dictAtend[item.atend_id]].push([item.label, item.hour, item.minutes, item.id]);
        }
      }
    });
    this.setState({ booking: dict });
  }

  handleAccept() {
    this.bookAppointment();
    this.setState({ show: false });
  }

  handleClose() {
    this.setState({ show: false });
  }

  triggerModal() {
    this.setState({ show: true });
  }

  calendarChange(date) {
    this.setState({ date, selected: 0, time: null });
  }

  newTime(time) {
    this.setState({ time: time.time, selected: time.index, atend_id: time.atend_id });
  }

  async bookAppointment() {
    const { match } = this.props;
    const { atend_id: atendId } = this.state;
    axios.patch(`/api/v1/doctor/${match.params.id}/booking/${atendId}`, {
      booking: { booking: true },
    });
  }

  render() {
    const {
      time,
      date,
      booking,
      selected,
      show,
    } = this.state;
    const { id } = this.props.match.params;

    if (booking === null) {
      return (<div>Loading</div>);
    }
    const month = date.toLocaleString('default', { month: 'long' });
    const timeList = booking[date.toLocaleDateString('en-US')];
    const minBookinDate = new Date();
    minBookinDate.setDate(minBookinDate.getDate() + 1);

    return (
      <div className="bookAppointment">
        <ModalComponent
          show={show}
          handleClose={this.handleClose}
          handleAccept={this.handleAccept}
        />
        <div className="bookAppointment__header container">
          <div className="doctorProfile__nav row">
            <div className="col-2 text-left">
              <Link to="/">
                <img src={BackCaretWhite} alt="back caret" />
              </Link>
            </div>
            <div className="col-8 d-flex justify-content-center">
              <div className="bookAppointment__header--title align-self-center">
                Make Booking
              </div>
            </div>
          </div>
          <Calendar
            onChange={this.calendarChange}
            minDate={minBookinDate}
            value={date}
            tileDisabled={({ date }) => date.getDay() === 0}
          />
          <CarrouselSelector
            newTime={this.newTime}
            timeList={timeList}
            selected={selected}
          />

        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6">
              <div className="row">
                <div className="col-12 p-3">
                  <button
                    disabled={!time}
                    className="btn btn-block doctorProfile__bookButton"
                    type="button"
                    onClick={this.triggerModal}
                  >
                    Book
                  </button>
                </div>
              </div>
              <div className="bookAppointment__time pb-3">
                { time
                  ? `Appointment for ${date.getDate()} of ${month}, ${date.getFullYear()} at ${time.getHours()}:${time.getMinutes()}`
                  : "Select an Appointment's date and Time"}
              </div>
              <DoctorBookingCard id={id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookAppointment.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default BookAppointment;
