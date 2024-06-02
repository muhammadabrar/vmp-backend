const verifyEmail = (website, code, email) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Success
    </title>
    
  </head>
  <body>
  <p>Hi There,</p>

  </p>You have successfully registered yourself with AR-4U. Your account has been created and you can set your password by clicking  <a href="${website}/verify?token=${code}"> this link</a>.</p>

  </p>Regards <br/>
AR-4U team</p>
    
  </body>
</html>

    `;
};

module.exports = verifyEmail;
