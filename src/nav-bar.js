import React, { Component } from "react";
import logo from "./meet-logo-neon.svg";

class Navbar extends Component{
  
  render(){

    const onLoggedOut = () => {
      localStorage.clear();
      window.open("/meet", "_self");
    }

    const isAuth = () => {
      if(typeof window == "undefined") {
        return false;
      }
      if(localStorage.getItem("access_token")) {
        return localStorage.getItem("access_token");
      } else {
        return false;
      }
    };

    return <div id="navbar">
      <img id="navbar-logo" src={logo} alt="Meet Logo" />
      <button id="logout"  onClick={() => { onLoggedOut() }}>logout</button>
    </div>
  }
}

export default Navbar;