import React from 'react';
import './App.css';
import Login from './component/Login';
import Logout from './component/Logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = '419179012489-pihlk7k92mijrqkh11tcel0f4poq9h9d.apps.googleusercontent.com';


function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2',start);
  });

  return (
    <div className="App">
    <h2>Google Login</h2>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
