import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import generalReducer from '../reducers/index';
import Display from '../components/Display';
import '../stylesheets/main.scss';

const initialState = {
  doctors: [
    {
      id: 1,
      docname: 'DickSchaden',
      location: 'los angeles',
      fullname: 'Dick Schaden',
      specialization_id: 1,
    },
    {
      id: 2,
      docname: 'HuongBernhard',
      location: 'knoxville',
      fullname: 'Huong Bernhard',
      specialization_id: 1,
    },
    {
      id: 3,
      docname: 'LakieshaBernier',
      location: 'albuquerque',
      fullname: 'Lakiesha Bernier',
      specialization_id: 4,
    },
    {
      id: 4,
      docname: 'LaurenHeaney',
      location: 'bogota',
      fullname: 'Lauren Heaney',
      specialization_id: 5,
    },
  ],
};

const store = createStore(generalReducer, initialState);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Display store={store} />,
    document.querySelector('#r-container'),
  );
});
