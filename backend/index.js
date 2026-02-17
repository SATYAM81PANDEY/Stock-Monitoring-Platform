require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const {holdingsModel} = require("./modals/holdingsModel");
const {positionsModel} = require ("./modals/positionsModel");
const {ordersModel} = require ("./modals/ordersModel");
const AuthRouter = require("./routes/AuthRouter");

const PORT = process.env.PORT || 3002;
require("./modals/db")

const app = express();

// app.use(cors({
//     origin: ["https://stock-monitoring-platform-five.vercel.app", "https://dashboard-tau-six-39.vercel.app"],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
// }));

const allowedOrigin = [
      "https://stock-monitoring-platform-five.vercel.app",
      "https://dashboard-tau-six-39.vercel.app"
];

app.use((req, res, next) => {
        const origin = req.headers.origin;
        if(allowedOrigin.includes(origin)){
          res.setHeader("Access-Control-Allow-Origin", origin)
        }

         res.setHeader("Access-Control-Allow-Credentials", "true");
         res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
         res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

         
       if (req.method === "OPTIONS") {
            return res.sendStatus(200);
       }

       next(); 
})

app.use(bodyParser.json());


app.get("/allHolding", async(req, res) => {
  const allHoldings = await holdingsModel.find({});
  res.json(allHoldings);
});


app.get("/allPosition", async(req, res) => {
  const allPositions = await positionsModel.find({});
  res.json(allPositions);
});


app.post("/newOrder", async(req, res) => {
    let newOrder = new ordersModel({
       name: req.body.name,
       qty: req.body.qty,
       price: req.body.price,
       mode: req.body.mode,
    });
     await newOrder.save();
  
    if(req.body.mode === "Buy"){
      let existingHolding = await holdingsModel.findOne({name: req.body.name})

      if(!existingHolding){
      let newHolding = new holdingsModel({
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.price,
      price: req.body.price
   });
     await newHolding.save();
    }
    else{
      let totalQty = existingHolding.qty + Number(req.body.qty);

      
   let newAvg = (
     (existingHolding.qty * existingHolding.avg)
     +
     (req.body.qty * req.body.price)
   ) / totalQty;

   existingHolding.qty = totalQty;
   existingHolding.avg = newAvg;

   await existingHolding.save();
    }
  }


if(req.body.mode === "Sell"){

 let existingHolding = await holdingsModel.findOne({
   name: req.body.name
 });

 if(!existingHolding){
   return res.send("You don't own this stock");
 }

 if(existingHolding.qty < req.body.qty){
   return res.send("Not enough quantity");
 }

 existingHolding.qty = existingHolding.qty - req.body.qty;

 await existingHolding.save();

 if(existingHolding.qty === 0){
   await holdingsModel.deleteOne({
     name: req.body.name
   });
 }
}
    res.send("Order Saved!");
});

app.get("/allOrder", async(req, res) => {
  const orders = await ordersModel.find({});
  res.json(orders);
})

app.use("/auth", AuthRouter)

app.listen(PORT, () => {
    console.log("app started");
})