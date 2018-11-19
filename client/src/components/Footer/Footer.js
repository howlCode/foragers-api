import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#363636",
        color: "#fff",
        height: "150px"
      }}
    >
      <div className="content is-small has-text-centered">
        <a href="https://github.com/howlCode">
          <i
            className="fab fa-github fa-3x swell"
            style={{
              color: "#795549"
            }}
            aria-hidden="true"
          />
        </a>
        <p>
          Copyright. <span>{"\u00A9 2018"}</span> All rights reserved |
          Developed by howlCode
        </p>
      </div>
    </footer>
  );
};

export default Footer;
