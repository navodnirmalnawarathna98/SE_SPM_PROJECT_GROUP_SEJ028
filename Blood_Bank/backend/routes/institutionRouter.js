const router = require("express").Router();

let bloodrequest = require("../models/InsBloodReq");


//employee add route
router.route("/addbloodreq").post((req,res)=>{//get data from frontend via request

    // get request body data and assining them to variables

    const newBloodrequest = new bloodrequest({

        
    })

    //exception handling using then
    //pass the variables to database
    newBloodrequest.save().then(()=>{
        res.json("New Blood Request save succesfully")
    }).catch((err)=>{
        console.log("err");
    })
})
