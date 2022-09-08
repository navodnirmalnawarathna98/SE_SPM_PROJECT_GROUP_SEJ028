const router = require("express").Router();

let insbloodreq = require("../models/InsBloodReq");


// add blood Request route
router.route("/addbloodreq").post((req,res)=>{//get data from frontend via request

    // get request body data and assining them to variables
    const  name=req.body.name;
    const email = req.body.email;
    const  contact_no= Number(req.body.contact_no);
    const  blood_group=req.body.blood_group;
    const  blood_amount= Number(req.body.blood_amount);
    const  due_date= Date(req.body.due_date);
    const  description =req.body.description;

    const Newinsbloodreq = new insbloodreq({

            name,
            email,
            contact_no,
            blood_group,
            blood_amount,
            due_date,
            description
        
    })

    //exception handling using then
    //pass the variables to database
    Newinsbloodreq.save().then(()=>{
        res.json("New Blood Request save succesfully")
    }).catch((err)=>{
        console.log(err);
    })
})






module.exports = router;