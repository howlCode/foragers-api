import React from "react";

const About = () => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h2 className="title">Who We Are</h2>
        <div
          className="image"
          style={{
            margin: "0 auto",
            textAlign: "center",
            height: "300px",
            width: "300px"
          }}
        >
          <img
            src={require("./images/headshot.jpg")}
            alt="matt king's headshot"
          />
        </div>
        <br />
        <div className="content">
          <p className="has-text-centered">
            Hi there! My name is Matt King and I'm a web developer from North
            Carolina. I'm passionate about the great outdoors and wild foraging.
            I hope you enjoy purusing my Foragers site. If you have suggestions
            or comments, please drop me a{" "}
            <a href="mailto:miromanyth@gmail.com">line</a>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
