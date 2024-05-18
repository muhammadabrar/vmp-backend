

  const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
  {
    Uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    location: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        default: "Japan"
      },
      postalCode: {
        type: String,
        required: true
      },
   

  },
  { timestamps: true }
);


const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;