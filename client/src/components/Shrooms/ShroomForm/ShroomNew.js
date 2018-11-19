import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import ShroomForm from "./ShroomForm";
import ShroomFormReview from "./ShroomFormReview";

class ShroomNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ShroomFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ShroomForm
        onShroomSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    if (this.props.auth === false) {
      return (
        <section className="section">
          <h1 className="has-text-centered title has-text-danger">
            You must be logged in to do that.
          </h1>
          <p className="has-text-centered">
            <Link to={"/portal"} className="button is-primary">
              Log in Here
            </Link>
          </p>
        </section>
      );
    }
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

ShroomNew = connect(mapStateToProps)(ShroomNew);

export default reduxForm({
  form: "shroomForm"
})(ShroomNew);
