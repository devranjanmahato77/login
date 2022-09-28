import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '419179012489-pihlk7k92mijrqkh11tcel0f4poq9h9d.apps.googleusercontent.com';


function Logout() {
  const onSuccess = () => {
    console.clear();
    alert('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
