import React, { Component } from "react";
import logo from "./meet-logo-neon.svg";

class Navbar extends Component{
  
  state = {hide: ""};

  componentDidMount(){
    this.isAuth();
  }

  isAuth = () => {
    if(typeof window == "undefined") {
      return ;
    }
    if(localStorage.getItem("access_token")) {
      // return localStorage.getItem("access_token");
      this.setState({hide: ""});
    } else {
      this.setState({hide: "disabled"});
      // return false;
    }
  };
  render(){

    const onLoggedOut = () => {
      localStorage.clear();
      window.open("/meet", "_self");
    }



    return <div id="navbar">
      <img id="navbar-logo" src={logo} alt="Meet Logo" />
      <button id="logout" disabled={this.state.hide} onClick={() => { onLoggedOut() }}>logout</button>
    </div>
  }
}

export default Navbar;