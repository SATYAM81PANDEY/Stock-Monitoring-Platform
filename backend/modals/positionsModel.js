const {model} = require("mongoose");

const {positionsSchema} = require("../schemas/positionsSchema");

const positionsModel = new model ("Position", positionsSchema);

module.exports = {positionsModel}   