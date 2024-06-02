const shareRequestAction = (data, email) => {
      return `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Share Request
    </title>
    
  </head>
  <body>
        
              <div>
              
              
              Hi ${data.user} , <br/><br/>
              ${data.owner}have ${data?.IsAccept ? "accepted" : "decline"} your share request for ${data.model}.${data?.IsAccept && "Enjoy using the model from your dashboard."}
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
    
    module.exports = shareRequestAction;
    