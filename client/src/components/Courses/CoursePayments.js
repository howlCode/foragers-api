import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";

class CoursePayments extends Component {
  render() {
    return (
      <div style={{ marginLeft: "5px" }}>
        <StripeCheckout
          name="Foragers"
          description="Course Sign Up Fee"
          amount={Math.round(this.props.course.cost * 100)}
          token={token =>
            this.props.handleCourseToken(
              token,
              this.props.course,
              Math.round(this.props.course.cost * 100)
            )
          }
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          closed={() => this.props.history.push("/success")}
        >
          <button className="button is-primary">Sign Up</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    actions
  )(CoursePayments)
);
