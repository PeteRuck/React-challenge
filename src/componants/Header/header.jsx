import React, {Component} from 'react';
import Search from './search.jsx';
import Switch from './switch.jsx';

class Header extends Component {
  render() {
    return (
      <header className='header clearfix'>
       <Search />
       <Switch />
      </header>
    )
  }
}

export default Header;