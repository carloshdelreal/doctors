import React from 'react';
import medicoLogo from '../images/medico.png';

const DeviseLogin = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-6 text-center">
        <img src={medicoLogo} alt="medicoLogo" />
      </div>
    </div>
    <div className="text-center">
      <h3>
        Welcome
      </h3>
      <p>
        Log in to Continue
      </p>
    </div>
  </div>
);

export default DeviseLogin;
