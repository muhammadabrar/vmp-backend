const nodemailer = require("nodemailer");
const ResetPassVerifyEmailTemplate = require("./templates/resetPassEmailVerification");
const VerifyEmailTemplate = require("./templates/VerifyEmail");


require("dotenv").config();

let emailDetail = {
  email: process.env.NODEMAILER_EMAIL,
  username: process.env.EMAIL_USER_NAME,
  password: process.env.NODEMAILER_PASSWORD,
  Host: process.env.NODEMAILER_HOST,
}
const mailTransporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER_NAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});



const SendVerificationEmail = async (email, code) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "VMP Email verification",
    html: VerifyEmailTemplate(process.env.website, code, email)};

  await mailTransporter.sendMail(mailDetails);
};

module.exports = {
  SendVerificationEmail,
};
