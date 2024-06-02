const ContactUsEmail = (data) => {
  return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact from AR-4U</title>
      </head>
      <body>
          <style>
              *{
                  margin: 0px;
                  padding: 0px;
                  box-sizing: border-box;
              }
          </style>
          <br />
          Hi AR-4U Admin ,<br/>
          <p><b>Name: </b> ${data.name} </p>
          <p><b>Email: </b> ${data.email} </p>
          <p><b>Phone: </b> ${data.phone} </p>
          <hr/>
          <p><b>Message: </b> ${data.msg} </p>

      </body>
      </html>
      `;
};

module.exports = ContactUsEmail;
