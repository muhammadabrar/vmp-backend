const verifyEmail = (website, code, email) => {
      return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reset Password</title>
        <style>
          html {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
              Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji" !important;
          }
          .container {
            width: 544px;
            margin: auto;
            padding: 1rem;
          }
          .logo img {
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 50%;
            /* padding: 10px; */
          }
          .title {
            box-sizing: border-box;
            margin-top: 8px !important;
            margin-bottom: 0;
            font-size: 24px;
            font-weight: 400 !important;
            line-height: 1.25 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
              Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji" !important;
          }
          .card {
            padding: 24px;
            border-radius: 0.3rem;
            /* border: 1px solid #b1b1b1; */
            margin: 1rem 0;
            color: #24292e;
            border: 1px solid #e1e4e8;
            text-align: center;
          }
          .heading {
            text-align: center;
            box-sizing: border-box;
            margin-top: 0;
            margin-bottom: 0;
            font-size: 20px;
            font-weight: 600;
            line-height: 1.25 !important;
            
          }
          .card p {
            /* color: #b1b1b1; */
            font-size: 14px;
            text-align: start;
          }
          .resetBtn{
                padding: 10.5px 21px;
                font-size: 14;
                border: none;
                border-radius: .3rem;
                outline: none;
                font-weight: 600;
                background-color: #2271fb;
                color: #fff;
                cursor: pointer;
                
          }
          p{
                margin: 0;
          }
          .statement{
                margin: 14px 0 !important;
          }
          .footer{
                text-align: center;
                color: #6a737d;
                margin-top: 3rem;
          }
          
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">
              <img src="${website}/logo.png" alt="" />
            </div>
            <h3 class="title">Reset Your AR-4U Password</h3>
            <div class="card">
              <h3 class="heading">AR-4U password reset</h3>
              <p class="statement">We heard that you lost your AR-4U password. Sorry about that!</p>
              <p class="statement">
                but don't worry! you can use the following button to reset your
                password
              </p>
             <a href="${website}/password_reset?token=${code}"> <button class="resetBtn">Reset your password</button></a>
              <p class="statement">
                if you don't use this link within 24 hours, it will expire, To get a
                new password reset link, visit: <a href="${website}/password/reset">${website}/password/reset</a>
              </p>
              <p>Thanks,</p>
              <p>The AR-4U Team</p>
            </div>
    
            <div class="footer">
              You're receiving this email because a password reset was required for
              your account.
            </div>
          </div>
        </div>
      </body>
    </html>
    
        `;
    };
    
    module.exports = verifyEmail;
    