const verifyEmail = (data, email)=>{
      return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Model Shared with you - Take Action!</title>
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
          Hi ${data.user} ,<br/>
          <p>
          ${data.owner} from ${data.company} have shared a 3D model of the product named as ${data.model} with you. You can accept or decline this share from your dashboard’s notification bar.
</p>
For more information you can contact us at support@ar-4u.com
<p>Best regards, <br/> AR-4U Team</p>
      </body>
      </html>
      `
  }
  
  module.exports = verifyEmail;