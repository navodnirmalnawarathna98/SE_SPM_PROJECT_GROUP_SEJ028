const router = require("express").Router(); //import router function in express package
let addBloodSamples = require("../models/addBloodSamples"); //import add blood samples model


//Add Blood Samples (http://localhost:8070/addbloodsamples/add)

router.route("/add").post((req,res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactNumber = Number(req.body.contactNumber);
    const address = req.body.address;
    const email = req.body.email;
    const dateOfBirth = req.body.dateOfBirth;
    const nic = req.body.nic;
    const weight = Number(req.body.weight);
    const bloodType = req.body.bloodType;
    const bloodAmount = Number(req.body.bloodAmount);
    const gender = req.body.gender;
    

    const newAddBloodSamples = new addBloodSamples({
        firstName,
        lastName,
        contactNumber,
        address,
        email,
        dateOfBirth,
        nic,
        weight,
        bloodType,
        bloodAmount,
        gender
    })

    //pass the variables to database
    newAddBloodSamples.save().then(() => {
        res.json("blood sample added succecfull")
    }) .catch((err) => {
        console.log(err); //catch errors
    })
})




//GET ALL BLOOD SAMPLES DETAILS (http://localhost:8080/addbloodsamples/)

router.route("/").get((req,res) =>{

    addBloodSamples.find().then((bloodSamples) =>{
        res.json(bloodSamples) //pass data from db to frontend
    }).catch((err) =>{
        console.log(err) //display errors
    })

})





//GET ONE BLOOD SAMPLE By ID (http://localhost:8080/addbloodsamples/get/<userID>)

router.route("/get/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let sampleId = req.params.id; //fetch the id parameter in url

    const pack = await addBloodSamples.findById(sampleId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then((bloodSample) => {
        res.status(200).send({status : "sample fetched", bloodSample}) //if find success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with find data"}); //if not display error message
    })

})





//UPDATE ONE BLOOD SAMPLE (http://localhost:8080/addbloodsamples/update/<userID>)

router.route("/update/:id").put(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let sampleId = req.params.id; //fetch the id parameter in url
    const {firstName, lastName, contactNumber, address, email, dateOfBirth, nic, weight, bloodType, bloodAmount } = req.body; //fetch data from frontend

    const updateSample = { //create update object and pass values getting from frontend
        firstName,
        lastName,
        contactNumber,
        address,
        email,
        dateOfBirth,
        nic,
        weight,
        bloodType,
        bloodAmount,
        gender
    }

    const update = await addBloodSamples.findByIdAndUpdate(sampleId, updateSample) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then(() => {
        res.status(200).send({status : "sample updated"}) //if update success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"}); //if not display error message
    })

})





//DELETE SAMPLE (http://localhost:8080/addbloodsamples/delete/<userID>)

router.route("/delete/:id").delete(async(req,res) => { //get userid from frontend
    let sampleId = req.params.id; // assign userid to variable

    await addBloodSamples.findByIdAndDelete(sampleId) //delete data that related to packId
    .then(() => {
        res.status(200).send({status: "sample deleted"}); //display user deleted successfull
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status: "Error with delete user", error:err.message}); //display error message
    })
})


module.exports = router;