const shareRequest = (owner, model, user, email) => {
      return `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Share Request Received
    </title>
    
  </head>
  <body>
        
              <div>
              
              
              Hi ${owner} , <br/><br/>
              ${user} have requested you to share your model named as ${model}. Please consider allowing to declining their request from your dashboard.
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
    
    module.exports = shareRequest;
    