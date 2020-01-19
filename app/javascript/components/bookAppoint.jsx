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
      booking: null,
      selected: 0,
    };
    this.calendarChange = this.calendarChange.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
    this.newTime = this.newTime.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`/api/v1/doctor/${id}/booking`)
    const resAtend = await axios.get(`/api/v1/atend`)
    
    const dictAtend = {}
    resAtend.data.atends.forEach((item) => {
      if (dictAtend[item.id] == null){
        const year = item.date.slice(0,4)
        const month = parseInt(item.date.slice(5,7)) - 1
        const day = item.date.slice(8)
        const d = new Date(year,month,day)
        dictAtend[item.id] = d.toLocaleDateString('en-US')
      }
    })
      

    const dict = {}
    res.data.booking.forEach((item) => {
      if (dictAtend[item.atend_id] != null){
        if (dict[dictAtend[item.atend_id]] == null){
          dict[dictAtend[item.atend_id]] = [[item.label, item.hour, item. minutes]]
        } else {
          dict[dictAtend[item.atend_id]].push([item.label, item.hour, item. minutes])
        }
      }
    })

    this.setState({ booking: dict })

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
    
    if (booking === null){
      return (<div>Loading</div>);
    }
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
