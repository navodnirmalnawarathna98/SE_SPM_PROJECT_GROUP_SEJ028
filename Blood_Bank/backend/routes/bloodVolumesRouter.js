const router = require("express").Router(); //import router function in express package
let bloodVolumes = require("../models/bloodVolumes"); //import add blood samples model


//Add Blood Samples (http://localhost:8070/bloodvolumes/add)

router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const Ap = req.body.Ap;
    const Am = req.body.Am;
    const Bp = req.body.Bp;
    const Bm = req.body.Bm;
    const ABp = req.body.ABp;
    const ABm = req.body.ABm;
    const Op = req.body.Op;
    const Om = req.body.Om;


    const newBloodVolumes = new bloodVolumes({
        Ap,
        Am,
        Bp,
        Bm,
        ABp,
        ABm,
        Op,
        Om
    })

    //pass the variables to database
    newBloodVolumes.save().then(() => {
        res.json("blood volume added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})




// //GET ALL BLOOD SAMPLES DETAILS (http://localhost:8080/bloodvolumes/)

// router.route("/").get((req,res) =>{

//     addBloodSamples.find().then((bloodSamples) =>{
//         res.json(bloodSamples) //pass data from db to frontend
//     }).catch((err) =>{
//         console.log(err) //display errors
//     })

// })





//GET ONE BLOOD SAMPLE By ID (http://localhost:8080/bloodvolumes/get/<userID>)

router.route("/get/:id").get(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let volumeId = req.params.id; //fetch the id parameter in url

    const pack = await bloodVolumes.findById(volumeId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
        .then((bloodVolumes) => {
            res.status(200).send({ status: "sample fetched", bloodVolumes }) //if find success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with find data" }); //if not display error message
        })

})





//UPDATE ONE BLOOD SAMPLE (http://localhost:8080/bloodvolumes/update/<userID>)

router.route("/update/:id").put(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let volumeId = req.params.id; //fetch the id parameter in url
    const { Ap, Am, Bp, Bm, ABp, ABm, Op, Om } = req.body; //fetch data from frontend

    const updateSample = { //create update object and pass values getting from frontend
        Ap,
        Am,
        Bp,
        Bm,
        ABp,
        ABm,
        Op,
        Om
    }

    const update = await bloodVolumes.findByIdAndUpdate(volumeId, updateSample) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
        .then(() => {
            res.status(200).send({ status: "sample updated" }) //if update success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data" }); //if not display error message
        })

})





//DELETE SAMPLE (http://localhost:8080/bloodvolumes/delete/<userID>)

router.route("/delete/:id").delete(async (req, res) => { //get userid from frontend
    let volumeId = req.params.id; // assign userid to variable

    await bloodVolumes.findByIdAndDelete(volumeId) //delete data that related to packId
        .then(() => {
            res.status(200).send({ status: "sample deleted" }); //display user deleted successfull
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete user", error: err.message }); //display error message
        })
})


module.exports = router;