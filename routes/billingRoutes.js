const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: parseInt(req.body.amount),
      currency: "usd",
      description: `Foragers Order for ${req.body.token.email}`,
      source: req.body.token.id
    });
    const customer = req.body.token.email;
    const address = req.body.address;
    const order = req.body.order;
    const orderTotal = req.body.amount;
    // MailUser(customer, address, order, orderTotal)
  });

  app.post("/api/stripe/course", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: parseInt(req.body.amount),
      currency: "usd",
      description: `Foragers Course Sign Up for ${req.body.token.email}`,
      source: req.body.token.id
    });
    const customer = req.body.token.email;
    const course = req.body.course;
    const signUpFee = req.body.amount;
    console.log(charge, course, signUpFee);
    // MailUser(customer, course, signUpFee)
  });
};
