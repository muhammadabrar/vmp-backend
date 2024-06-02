const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const AdpostSchema = new mongoose.Schema(
    {

        Uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        Address: {
            country: {
                type: String,
                require: true
            },
            city: {
                type: String,
                require: true
            },
            postal_code: {
                type: String,
                require: true
            },
            fulladdress: {
                type: String,
                require: true
            },
        },
        
        postTitle: {
            type: String,
            require: true
        },
        category: {
            type: String,
            default: "Vechile",
            enum: ['Vechile', 'Spare_parts'],
        },
        price: {
            type: Number,
            require: true
        },
        images: {
            type: Array,
            require: true
        },
        Vechile: {
            Make: {
                type: String,
            },
            Year: {
                type: String,
            },
            Model: {
                type: String,
            },
            Engine: {
                type: String,
            },
            Category: {
                type: String,
            },
            BodyType: {
                type: String,
            },
            Mileage: {
                type: String,
            },
            Transmissions: {
                type: String,
            },
            Colors: {
                type: String,
            },
            Condition: {
                type: String,
            },
        },
        Spare_parts: {
            Make: {
                type: String,
            },
            Year: {
                type: String,
            },
            Model: {
                type: String,
            },
            Engine: {
                type: String,
            },
            Category: {
                type: String,
            },
            BodyType: {
                type: String,
            },
            Mileage: {
                type: String,
            },
            Transmissions: {
                type: String,
            },
            Colors: {
                type: String,
            },
            Condition: {
                type: String,
            },
        },
        status:{
            type: String,
            enum: ['Active', 'disable'],
            default: "Active"
        }


    },
    { timestamps: true }
);


// Compare the given password with the hashed password in the database
AdpostSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Adpost = mongoose.model('Adpost', AdpostSchema);

module.exports = Adpost;