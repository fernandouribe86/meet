import React from "react";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <h1>Welcome to meet!</h1>
        <h4>
          Log in to see upcoming events around the world for full-stack developers
        </h4>
        <div>
          <div >
            <button 
            onClick={() => { props.getAccessToken() }}
            rel="nofollow noopener" 
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