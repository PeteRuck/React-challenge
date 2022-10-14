import React, {Component} from 'react';
import Header from './componants/Header/header.jsx';
import Login from './componants/login.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Login/>
      </div>
    );
  }
}

export default App;
