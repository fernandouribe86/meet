import React from "react";
import logo from "./meet-logo-neon.svg";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div id="welcomeScreen" className="WelcomeScreen">
        <h5>welcome to...</h5>
        <img id="welcomeLogo" src={logo} alt="Meet Logo" />
        <h5>
          Log in to see upcoming events around the world for full-stack developers
        </h5>
        <div>
          <div >
            <button 
            onClick={() => { props.getAccessToken() }}
            rel="nofollow noopener" 
            id="signIn"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
      </div>
    )
    : null
}

export default WelcomeScreen;