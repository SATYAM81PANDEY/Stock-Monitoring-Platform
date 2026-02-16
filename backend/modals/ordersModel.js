const {model} = require("mongoose");

const {ordersSchema} = require("../schemas/ordersSchema");
const { default: mongoose } = require("mongoose");

const ordersModel = new model ("Order", ordersSchema);

module.exports = {ordersModel}; 