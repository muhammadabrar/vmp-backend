const jwt = require("jsonwebtoken");
require("dotenv")

exports.createJWT = (user) => {
  let { fname,
    lname,
    email,
    role } = user
  const payload = {
    fname,
    lname,
    email,
    role
  };
  const token = jwt.sign(payload, process.env.JWTSECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000,
  });
  return token;
};

exports.createJWTForResetPass = (user) => {
  const payload = {
    user,
  };
  const token = jwt.sign(payload, process.env.JWTSECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000,
  });
  return token;
};

exports.verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWTSECRET);
  } catch (err) {
    return null;
  }
};
