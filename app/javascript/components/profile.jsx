import React, { Component } from 'react';
import medicoLogo from '../images/medico.png';

const Profile = () => {
  const email = "carlos@email.com";
  return (
    <div className="container profile">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <img src={medicoLogo} alt="medicoLogo" />
        </div>
      </div>
      <div className="text-center">
        <h3>
          Welcome
        </h3>
      </div>
      <div className="row">
        <div className="col-8 profile__email">
          <p><strong>e-mail:</strong></p>
          <p>{ email }</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8 profile__logout">
          <a className="btn btn-danger" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
