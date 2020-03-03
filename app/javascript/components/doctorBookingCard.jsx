import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class DoctorBookingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props;
    const docInfo = await axios.get(`/api/v1/doctor/${id}`);
    this.setState({ doctor: docInfo.data });
  }

  render() {
    const { specialtyDict } = this.props;
    const { doctor } = this.state;
    return (
      <div className="doctorCard row justify-content-center">
        <div className="col-12 text-center">
          <h3>{ doctor ? `Dr. ${doctor.fullname}` : "Dr. Doctor's fullname" }</h3>
        </div>
        <div className="col-12 text-center">
          <p className="text-capitalize">{specialtyDict && doctor ? specialtyDict[doctor.specialization_id] : 'specialty'}</p>
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
    );
  }
}

DoctorBookingCard.propTypes = {
  id: PropTypes.string.isRequired,
  specialtyDict: PropTypes.shape({}).isRequired,
};


const mapStateToProps = state => ({
  specialtyDict: state.specialtyDict,
});

// eslint-disable-next-line arrow-parens
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorBookingCard);
