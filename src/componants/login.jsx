import React, { Component } from 'react';
import LoginMed from './login-media.jsx';
import LoginMan from './login-man.jsx';

class Login extends Component {
  render() {
    return <div className='container-fluid big-bg'>
      <LoginMed/>
      <LoginMan/>
    </div>;
  }
}

export default Login;