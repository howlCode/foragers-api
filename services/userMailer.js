"use strict";
const nodemailer = require("nodemailer");
const keys = require("../config/keys");

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
const UserMailer = (customer, emailContents) => {
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "miromanyth@gmail.com",
        pass: keys.gmailPassword
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Foragers" <no-reply@foragers.com>', // sender address
      to: `${customer}`, // list of receivers
      subject: `${emailContents.subject}`, // Subject line
      html: `${emailContents.body}` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
};

module.exports = UserMailer;
