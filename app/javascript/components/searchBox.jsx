import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchSymbol from '../images/searchSymbol.png';


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchData = this.searchData.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value !== '') {
      this.searchData(event.target.value);
    } else {
      this.setState({ results: [] });
    }
  }

  async searchData(searchStr) {
    const res = await axios.get(`api/v1/doctor/search/${searchStr}`);
    this.setState({ results: res.data });
  }

  render() {
    const { value, results } = this.state;
    return (
      <div>
        <div className="searchBox home__search row justify-content-center">
          <div className="col-12 col-xs-10 col-sm-8 col-md-6">
            <div className="home__search--input">
              <input value={value} onChange={this.handleChange} type="text" name="search" id="search" placeholder="Search Medicines & Doctors" />
              <div className="input-group-append">
                <img src={searchSymbol} alt="search_symbol" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          { results.map(item => (
            <div key={item.docname} className="col-12">
              <div className="booking col-12 pr-4">
                <Link to={`/doctor/${item.id}`}>
                  <h5>
                    { `Dr. ${item.fullname}` }
                  </h5>
                  <p>{ `${item.specialty}, location ${item.location}` }</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBox;
