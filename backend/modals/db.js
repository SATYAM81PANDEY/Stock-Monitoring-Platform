const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;

mongoose.connect(uri).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})