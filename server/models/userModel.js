const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: {
  type: String,
  required: true
    },
    lastname: {
    type: String,
    required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {

        type: String,
        required: true
    },

    profilePic: {
        type: String,
        required: false
    }
}, {timeStamp: true})
const Users = mongoose.model("users", userSchema);
module.exports = Users