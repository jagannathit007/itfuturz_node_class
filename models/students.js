let mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { type: String, default: "" },
    mobile: { type: String, default: "" },
    className: { type: String, default: "" },
}, {timestamps: true});

module.exports = mongoose.model('students', schema);