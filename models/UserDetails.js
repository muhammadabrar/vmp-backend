const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
  {
    Uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      unique: true
    },

    Gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      default: 'male'
    },

   

  },
  { timestamps: true }
);


const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);

module.exports = UserDetails;