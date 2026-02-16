const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    password: {
        type: String,
        required:[true, "Your password is required"] 
    }
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = {UserModel};
