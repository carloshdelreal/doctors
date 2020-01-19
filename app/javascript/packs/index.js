import '../stylesheets/main.scss';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import generalReducer from '../reducers/index';
import Display from '../components/Display';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');
require('jquery');

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

  specialties: [
    { id: 1, area: 'general' },
    { id: 2, area: 'pediatrics' },
    { id: 3, area: 'dermatology' },
    { id: 4, area: 'oncology' },
    { id: 5, area: 'internal medicine' },
    { id: 6, area: 'neurology' },
    { id: 7, area: 'obstetrics' },
    { id: 8, area: 'cardiology' },
  ],
};

const store = createStore(generalReducer, initialState);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Display store={store} />,
    document.querySelector('#root'),
  );
});
