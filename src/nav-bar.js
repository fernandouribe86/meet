import React, { Component } from "react";
import logo from "./meet-logo-neon.svg";

class Navbar extends Component{

  
  render(){

    return <div id="navbar">
      <img id="navbar-logo" src={logo} alt="Meet Logo" />
    </div>
  }
}

export default Navbar;