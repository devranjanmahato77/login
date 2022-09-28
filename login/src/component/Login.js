import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '419179012489-pihlk7k92mijrqkh11tcel0f4poq9h9d.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log("Login SUCCESS",res.profileObj);
  
};

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
