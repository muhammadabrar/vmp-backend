const verifyEmail = (email, links_dashboard, invitation, owner) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Invite to Register
    </title>
    
  </head>
  <body>
    
          <div>
          
          
          Hi there, <br/><br/>
          ${owner.name} from  ${owner.company} have shared a 3D model of one of their products with you. However, you need to get yourself registered with AR-4U in order to view it or use it. You can use the following invitation link to get yourself registered with us.
          <br/><br/>
            <a href="${links_dashboard}/invitation/${invitation}">${links_dashboard}/invitation/${invitation}</a> <br/><br/>
            For more information please contact us at support@ar-4u.com<br/>
            <br/>
            Best regards,<br/>
            AR-4U TEAM<br/>
          
          
          
          
          
         
         </div>
         </body>
      </html>
      
      `;
};

module.exports = verifyEmail;
