const acceptInvitation = (model, owner, user, email) => {
      return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Invite Accepted
          </title>
          
        </head>
        <body>
              <div>
              
              
              Hi ${owner} , <br/><br/>
              ${user} has created an account with AR-4U using the invitation code sent by you and your model ${model} is already shared with them.
              <br/>
               
                For more information please contact us at support@ar-4u.com<br/>
                <br/>
                Best regards,<br/>
                AR-4U TEAM<br/>
              
              
              
              
              
             
             </div>
             </body>
             </html>
          `;
    };
    
    module.exports = acceptInvitation;
    