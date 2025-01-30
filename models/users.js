let mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true});

module.exports = mongoose.model('users', schema);