import React from "react";

const Auth = props => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Sign In!</h1>
        <h2 className="subtitle">Choose Your Provider:</h2>
        <a href="/auth/google">
          <img
            alt="Google Login Button"
            src={require("./images/btn_google_signin_dark_focus_web.png")}
          />
        </a>
      </div>
    </section>
  );
};
export default Auth;
