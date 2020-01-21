/* eslint-disable arrow-parens */
import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';

const Display = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Display.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Display;
