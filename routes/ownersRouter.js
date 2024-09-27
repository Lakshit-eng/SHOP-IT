const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

//routes
console.log("NODE_ENV:", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {   // this route will always be available in development phase only
   router.post("/create", async function (req, res) {   // owner model bnane se phle i will check if there is already an existing owner and if yes then i will not allow any other owner
      
      let owners =await ownerModel.find();
      if(owners.length>0){
       return res
       .status(504)
       .send("You don't have permissions to create a new owner");
      };

      let{fullname,email,password} = req.body;
      
      let createdOwner = await ownerModel.create({    //as there is no owner present we can create a new owner
                 fullname,         //for now lets go with these details only
                 email,
                 password
      });
      res.status(201).send(createdOwner)
   })
}

router.get("/", (req, res) => {
   res.send("router is working for owners");
})


module.exports = router;