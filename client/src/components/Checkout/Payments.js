import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";

class Payments extends Component {
  render() {
    return (
      <div style={{ marginLeft: "5px" }}>
        <StripeCheckout
          name="Foragers"
          description="Order Payment"
          amount={Math.round(this.props.subTotal * 100)}
          token={token =>
            this.props.handleToken(
              token,
              Math.round(this.props.subTotal * 100),
              this.props.itemsInCart,
              this.props.formValues
            )
          }
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          closed={() => this.props.history.push("/success")}
        >
          <button className="button is-primary">Pay For Order</button>
        </StripeCheckout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subTotal: state.itemsInCart.subTotal,
  itemsInCart: state.itemsInCart.itemsInCart,
  formValues: state.form.addressForm.values
});

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Payments)
);
