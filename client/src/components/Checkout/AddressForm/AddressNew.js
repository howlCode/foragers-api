import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import AddressForm from "./AddressForm";
import AddressFormReview from "./AddressFormReview";

class AddressNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <AddressFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <AddressForm
        onAddressSubmit={() => this.setState({ showFormReview: true })}
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

AddressNew = connect(mapStateToProps)(AddressNew);

export default reduxForm({
  form: "addressForm"
})(AddressNew);
