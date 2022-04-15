const { Schema, model } = require('mongoose');

const RegisterSchema = new Schema ({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        unique: true
    }
})

const Register = model('Register', RegisterSchema);

module.exports = Register