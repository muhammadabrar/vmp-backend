const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const STATUS_CODE = require("../constants/statusCode")
// Register a new user
function generateRandomNumber() {
  // Generates a random number between 1000 and 9999
  return Math.floor(100000 + Math.random() * 900000);
}
const register = async (req, res, next) => {
  const { fname, lname, email, password, phone } = req.body;

  try {
    if (!email) {
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: "Email is required",
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
    if (!phone) {
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: "Password is required",
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
    if (!password) {
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: "Password is required",
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
    const isExist = await User.findOne({ email });
    if (isExist) {
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: "User already exist with same email",
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    if (hashedPassword) {
      const user = new User({ fname, lname, email, phone, password: hashedPassword, OTP: Number(generateRandomNumber()), OTP_validation_time: Date.now() + (30 * 60 * 1000)});
    await user.save();
    res.json({ message: 'Registration successful' });
return
    }
    res.status(STATUS_CODE.SERVER_ERROR).json({
      message: "Registration failed"
    });
    
  } catch (error) {
    console.log(error);
    res
      .status(STATUS_CODE.SERVER_ERROR)
      .json({
        message: "Server Error"
      });
  
  }
};
const verifyOTP = async (req, res) => {
  try {
    let OTP = req.body.OTP;
    let email = req.body.email;
    if (!email) {
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: "Email is required",
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
    if (!OTP) {
      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: "OTP Required",
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
        let user = await User.findOneAndUpdate({ OTP: OTP, email, OTP_validation_time: { $gte: Date.now() }, },{
          OTP: " ", verified: true
        });
        if (user) {
         
          res.status(STATUS_CODE.OK).json({
            message: "User verified successfully",
            data: user,
            statusCode: STATUS_CODE.OK,
          });
          return;
        }

    res.status(STATUS_CODE.ACCESS_DENIED).json({
      message: "InValid link"
    });
    return;
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE.SERVER_ERROR).json({
      message: "Authorization Error",
      statusCode: STATUS_CODE.SERVER_ERROR,
    });
    return;
  }
};
// Login with an existing user
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      console.error(`${!email ? "Email" : "Password"} is required.`);

      res.status(STATUS_CODE.BAD_REQUEST).json({
        message: `${!email ? "Email" : "Password"} is required.`,
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
      return;
    }
    let user = await User.findOne({ email }).select("+password");
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isCorrect = await bycrypt.comparePassword(password, user.password);


    if (!isCorrect) {
      return res.status(401).json({ message: 'Incorrect password' });
    }


    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '2 hour'
    });
    const {email, lname, fname, phone, verified, role} = user
    res.json({ token,  email, lname, fname, phone, verified, role});
  
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, verifyOTP};