const { Schema, model } = require('mongoose');

const LoginSchema = new Schema ({
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        unique: true
    },
})

const Login = model('Login', LoginSchema);
module.exports = Login;
