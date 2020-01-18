import React from 'react';
import searchSymbol from '../images/searchSymbol.png';

const SearchBox = () => {
  return (
    <div className="searchBox home__search row justify-content-center">
      <div className="col-12 col-xs-10 col-sm-8 col-md-6">
        <div className="home__search--input">
          <input type="text" name="search" id="search" placeholder="Search Medicines & Doctors" />
          <div className="input-group-append">
            <img src={searchSymbol} alt="search_symbol" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
