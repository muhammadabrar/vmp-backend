const nodemailer = require("nodemailer");
const ResetPassVerifyEmailTemplate = require("./templates/resetPassEmailVerification");
const VerifyEmailTemplate = require("./templates/VerifyEmail");

const shareModelTemplate = require("./templates/shareModel");
const InvitationTemplate = require("./templates/Invitation");
const EmailOnTaskReady = require("./templates/sendOnTaskReady");
const ContactUsEmail = require("./templates/contactusTemplete");
const PurchaseArosi = require("./templates/purchaseArosi");
const acceptInvitation = require("./templates/invitationAccepted");
const ModelRevoked = require("./templates/ModelRevoked");
const shareRequest = require("./templates/shareRequest");
const shareRequestAction = require("./templates/requestAction");

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



const SendShareModelEmail = async (email, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Model Shared with you - Take Action!",
    html: shareModelTemplate(data, process.env.NODEMAILER_EMAIL),
  };

  await mailTransporter.sendMail(mailDetails);
};
const SendOnPurchase = async (email, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.STRIPE_BILLING_MAIL,
    to: email,
    subject: "Coins added to Wallet",
    html: PurchaseArosi(process.env.DASHBOARD_URL , data),
  };

  await mailTransporter.sendMail(mailDetails);
};
const SendOnContactUs = async (data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.CONTACT_US_RECEIVER,
    subject: "Contact from AR-4U",
    html: ContactUsEmail(data),
  };

  await mailTransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};
const SendOnTaskReady = async (email) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Tasks are ready",
    html: EmailOnTaskReady(),
  };

  await mailTransporter.sendMail(mailDetails);
};
const SendInvitationEmail = async (email, owner, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Invite to Register",
    html: InvitationTemplate(emailDetail.email, process.env.DASHBOARD_URL , data.invitation, owner),

  };

  await mailTransporter.sendMail(mailDetails);
};
const SendOnInvitationAccept = async (email, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Invite Accepted",
    html: acceptInvitation( data.model, data.owner, data.user, emailDetail.email),

  };

  await mailTransporter.sendMail(mailDetails);
};
const SendVerificationEmail = async (email, code,  isResetPass, company) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: isResetPass ? "Reset Password" : "Registration Success",
    html: !isResetPass
      ? VerifyEmailTemplate(company || process.env.DASHBOARD_URL, code, email)
      : ResetPassVerifyEmailTemplate(process.env.DASHBOARD_URL, code, email),
  };

  await mailTransporter.sendMail(mailDetails);
};

const sendOnRequest = async (email, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Share Request Received",
    html: shareRequest(data.owner, data.model, data.user, process.env.NODEMAILER_EMAIL),
  };

  await mailTransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

const sendOnRequestAction = async (email, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: `Share Request ${data?.IsAccept ? "Accepted" : "Decline"}`,
    html: shareRequestAction(data, process.env.NODEMAILER_EMAIL ),
  };

  await mailTransporter.sendMail(mailDetails);
};

const sendOnModelDelete = async (email, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: `Model Revoked`,
    html: ModelRevoked(data.model, data.user, process.env.NODEMAILER_EMAIL),
  };

  await mailTransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

const sendOnShareRequest = async (email, data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: `Model sharing request`,
    text: `${data.sharing} is sharing model ${data.modelName} with you check them out allow it or decline from sharing`,
  };

  await mailTransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

const sendOnOtherTypeOfModel_Upload_From_3js = async (email) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: `Model Uploaded`,
    text: `Dear User, your model has been uploaded successfully. Our sales department will contact you as soon as  possible. Thank you`,
  };

  await mailTransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};
const sendOnOtherTypeOfModel_Upload_TO_SupportTeam = async (data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.OTHERFILE_EMAIL,
    subject: `Other type model uploaded`,
    html: `Dear Support team,<br/> A customer ${data.customerName} upload other type of model. here is the AWS link to check out them out <br/> <a href="${data.link}">Download file</a>`,
  };

  await mailTransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};


const sendTo_Admin_on_userCustomerRole_Request= async (data) => {
  mailDetails = {
    // from: 'mailsender193@gmail.com',
    from: process.env.NODEMAILER_EMAIL,
    to: !data?.email? process.env.ADMIN_EMAIL: data?.email,
    subject: data?.email? !data?.IsUpgrade?  "Your profile request for the customer role has been declined.": "Your profile is being updated to 'customer'.": "User request for upgrading the customer role.",
    html: !data?.email?
    
    `


    Dear Admin,<br/>
    <br/>
    The newly registered user "${data.name}" with the email ID ${data.User_email} has requested to update their user role with the following information.
    <br/> <br/>
    Info: ${data.reason}.<br/>
    Phone number of ${data.name}: ${data.phone}<br/>

    Please consider accepting their request from the admin panel.<br/>
    <br/>
    <br/>
    Regards,<br/>
    AR-4U Team

    `

      : `Dear Customer,
     <br/> <br/>${data?.IsUpgrade? "Your profile is being upgraded to the customer role.": "Your request for a profile update to the customer role has been rejected by the administrator. Please try again."}`,
  };

  await mailTransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};


module.exports = {
  SendShareModelEmail,
  SendInvitationEmail,
  sendOnRequest,
  sendOnRequestAction,
  sendOnModelDelete,
  sendOnShareRequest,
  sendOnOtherTypeOfModel_Upload_From_3js,
  SendVerificationEmail,
  SendOnContactUs,
  SendOnTaskReady,
  SendOnPurchase,
  sendOnOtherTypeOfModel_Upload_TO_SupportTeam,
  SendOnInvitationAccept,
  sendTo_Admin_on_userCustomerRole_Request
};
