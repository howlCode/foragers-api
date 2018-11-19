import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="hero is-medium is-dark">
        <div className="hero-body shroom-basket">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to Foragers</h1>
            <h2 className="subtitle">
              Helping you find your next tasty morsels!
            </h2>
          </div>
        </div>
      </div>
      <section className="section landing-background">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column service-panel">
              <i className="fa fa-eye fa-3x" aria-hidden="true" />
              <h3 className="subtitle">Hunting</h3>
              <p className="service-description">
                We practice extensive wild foraging and mushroom gathering. We
                are passionate about helping our community become better
                foragers!
              </p>
            </div>
            <div className="column service-panel">
              <i className="fa fa-graduation-cap fa-3x" aria-hidden="true" />
              <h3 className="subtitle">Education</h3>
              <p className="service-description">
                We maintain an extensive <Link to={"/shrooms"}>database</Link>{" "}
                of our findings and offer <Link to={"/courses"}>classes</Link>{" "}
                for hunting and cooking with wild findings!
              </p>
            </div>
            <div className="column service-panel">
              <i className="fa fa-balance-scale fa-3x" aria-hidden="true" />
              <h3 className="subtitle">Sales</h3>
              <p className="service-description">
                You can even purchase cool swag in the{" "}
                <Link to={"/shop"}>shop</Link>!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
