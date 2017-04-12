import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './Header.scss';
import normativeLogo from '../../assets/images/normative.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="row">
          <div className="small-4">
            <Link to="/"><img src={normativeLogo} alt="Normative" height="50" /></Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
