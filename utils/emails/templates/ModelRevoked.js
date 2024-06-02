const ModelRevoked = (model, user, email) => {
      return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Model Revoked
          </title>
          
        </head>
        <body>
              <div>
              
              
              Hi ${user} , <br/><br/>
              Sharing rights for the model ${model} have been revoked by the owner hence the model is no longer available for you. You can delete it from your dashboard safely.
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
    
    module.exports = ModelRevoked;
    