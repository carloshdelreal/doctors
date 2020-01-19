import axios from 'axios';
import Calendar from 'react-calendar';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackCaretWhite from '../images/backCaretWhite.png';
import CarrouselSelector from './carrousel';

class BookAppointment extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    do {
      date.setDate(date.getDate() + 1);
    } while (date.getDay() === 0 || date.getDay() === 6);

    this.state = {
      date,
      booking: {
        '1/19/2020': [['8:00 AM', 8, 0], ['8:30 AM', 8, 30], ['9:00 AM', 9, 0], ['9:30 AM', 9, 30], ['10:00 AM', 10, 0]],
        '1/20/2020': [['8:30 AM', 8, 30], ['9:00 AM', 9, 0], ['9:30 AM', 9, 30], ['10:00 AM', 10, 0]],
        '1/21/2020': [['8:00 AM', 8, 0], ['10:00 AM', 10, 0]],
        '1/22/2020': [['8:00 AM', 8, 0], ['9:30 AM', 9, 30], ['10:00 AM', 10, 0]],
      },
      selected: 0,
    };
    this.calendarChange = this.calendarChange.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
    this.newTime = this.newTime.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/v1/book/${id}`)
      .then((bookingData) => {
        const booking = bookingData.data;
        this.setState({ booking });
      });
  }

  calendarChange(date) {
    this.setState({ date, selected: 0, time: null });
  }

  newTime(time) {
    this.setState({ time: time.time, selected: time.index });
  }

  bookAppointment = async e => {
    console.log('works');
    const { id } = this.props.match.params;
    const { time } = this.state;
    const res = await axios.post(`/api/v1/doctor/${id}/appointment`, {
      id,
      time,
    });
    console.log(res);
  }

  render() {
    const {
      time,
      date,
      booking,
      selected,
    } = this.state;
    const month = date.toLocaleString('default', { month: 'long' });
    const timeList = booking[date.toLocaleDateString('en-US')];
    const minBookinDate = new Date();
    minBookinDate.setDate(minBookinDate.getDate() + 1);

    return (
      <div className="bookAppointment">
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
                    onClick={this.bookAppointment}
                  >
                    Book
                  </button>
                </div>
              </div>
              <div className="bookAppointment__time pb-3">
                { time ? `Apointment for ${date.getDate()} of ${month}, ${date.getFullYear()} at ${time.getHours()}:${time.getMinutes()}` : "Select an Appointment's date and Time"}
              </div>
              <div className="doctorCard row justify-content-center">
                <div className="col-12 text-center">
                  <h3>Dr Hans Landa</h3>
                </div>
                <div className="col-12 text-center">
                  <p>Orthopedy</p>
                </div>
                <div className="container py-1">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <div className="row">
                        <div className="text-left p-0 col-3">
                          <p>
                            $150
                          </p>
                        </div>
                        <div className="text-center p-0 col-6">
                          <p>
                            12 yrs of exp
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookAppointment;
