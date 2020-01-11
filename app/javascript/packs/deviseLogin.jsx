import '../stylesheets/deviseLogin.scss';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import DeviseLogin from '../components/deviseLogin';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <DeviseLogin />,
    document.querySelector('#loginDevise'),
  );
});
