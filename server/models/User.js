const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone:{
        type: String
    },
    archived: {
        type: Boolean
    }
},{timestamps: true});
const User = mongoose.model('User', userSchema, 'MANAGING_USER');
module.exports = User;