const EmailOnTaskReady = ()=>{
      return `
      <!doctype html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tasks are ready</title>
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
          <p>There are some pending tasks that needs to be approved within 24 hours. Please take action!
          <br/>
          <br/>


          
          Regards,<br/>
          AR-4U Team
          
</p>
      </body>
      </html>
      `
  }
  
  module.exports = EmailOnTaskReady;