require("dotenv").config();
const mongoose = require("mongoose");



mongoose.connect(process.env.MONGO_URL )
.then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
   console.log(err);
})

module.exports = mongoose.connection;