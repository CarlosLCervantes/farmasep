import React, { Component } from 'react';
import './navbar.css';


class Navbar extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <header className="navbar">
      <div className="container">
      <div className="nav-logo-container">
        <img src={this.props.logo} alt="logo"></img>
      </div>
      </div>
      </header>
    );
  }
}

export default Navbar;



