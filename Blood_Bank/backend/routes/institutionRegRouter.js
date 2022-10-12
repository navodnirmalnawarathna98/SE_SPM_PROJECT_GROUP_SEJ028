const router = require("express").Router();

let insregform = require("../models/InsRegForm");


// add blood Request route
router.route("/insreg").post((req, res) => {//get data from frontend via request

    // get request body data and assining them to variables
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const contact_no = Number(req.body.contact_no);
    const institution_type = req.body.institution_type;
    const reg_date = Date(req.body.reg_date);
    const province = req.body.province;
    const distric = req.body.distric;

    const Newinsreg = new insregform({

        name,
        address,
        email,
        contact_no,
        institution_type,
        reg_date,
        province,
        distric

    })

    //exception handling using then
    //pass the variables to database
    Newinsreg.save().then(() => {
        res.json("Succesfully")
    }).catch((err) => {
        console.log(err);
    })
})



















module.exports = router;