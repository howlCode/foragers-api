const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const UserMailer = require("../services/userMailer");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: parseInt(req.body.amount),
      currency: "usd",
      description: `Foragers Order for ${req.body.token.email}`,
      source: req.body.token.id
    });
    res.redirect("/success");

    const customer = req.body.token.email;
    const address = req.body.address;
    const orderTotal = req.body.amount;
    const emailContents = {
      subject: "Foragers: Order Confirmation",
      body: `<h3>Your order is on the way</h3>
             <p>Shipping to you at ${address.address_line_one}, ${
        address.city
      }, ${address.state} ${address.zip}</p>
             
             <p>Total amount paid:$${orderTotal / 100}</p>
             <p>Thank you for shopping with Foragers!</p>`
    };

    UserMailer(customer, emailContents);
  });

  app.post("/api/stripe/course", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: parseInt(req.body.amount),
      currency: "usd",
      description: `Foragers Course Sign Up for ${req.body.token.email}`,
      source: req.body.token.id
    });
    res.redirect("/success");

    const customer = req.body.token.email;
    const course = req.body.course;
    const signUpFee = req.body.amount;

    const emailContents = {
      subject: "Foragers: Course Registration",
      body: `<h3>Thank you for signing up for the course: ${course.title}</h3>
             <p>The course will be held at ${course.facility} in ${
        course.location
      } at ${course.date}, ${course.time}</p>
             <p>You were charged $${signUpFee / 100} to attend the course</p>
             <p>Can't wait to see you there!</p>
             <p>Thank you for visiting Foragers</p>`
    };

    UserMailer(customer, emailContents);
    res.redirect("/");
  });
};
