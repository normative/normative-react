import React, { Component } from 'react';

import './Header.scss';
import normativeLogo from '../../assets/images/normative.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="row">
          <div className="small-4">
            <img src={normativeLogo} alt="Normative" height="50" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
