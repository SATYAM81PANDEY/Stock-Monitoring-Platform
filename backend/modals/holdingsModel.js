const {model} = require("mongoose");

const {holdingsSchema} = require("../schemas/holdingSchema");

const holdingsModel = new model("Holding", holdingsSchema);

module.exports = {holdingsModel};  