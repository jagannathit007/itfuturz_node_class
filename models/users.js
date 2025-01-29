let mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    emailId: {
        type: String,
        default: ""
    }
}, { timestamps: true});

module.exports = mongoose.model('users', schema);