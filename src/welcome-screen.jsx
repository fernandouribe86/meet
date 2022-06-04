import React from "react";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <h1>Welcome to meet!</h1>
        <h4>
          Log in to see upcoming events around the world for
          full-stack
          developers
        </h4>
        <div className="button_cont" align="center">
          <div >
            <button onClick={() => { props.getAccessToken() }}
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