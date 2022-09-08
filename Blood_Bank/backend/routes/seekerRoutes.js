const router = require("express").Router(); //import router function in express package

let addSeekerModel = require("../models/SeekerModel");

//Add Blood Samples (http://localhost:8070/seeker/add)

router.route("/add").post((req, res) => {
  //get data from frontend via request

  // get request body data and assining them to variables
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const nicNumber = req.body.nicNumber;
  const gender = req.body.gender;
  const dateOfBirth = Date(req.body.dateOfBirth);
  const bloodType = req.body.bloodType;
  const contactNumber = Number(req.body.contactNumber);
  const email = req.body.email;
  const province = req.body.province;
  const district = req.body.district;
  const status = req.body.status;

  const newAddSeeker = new addSeekerModel({
    firstName,
    lastName,
    nicNumber,
    gender,
    dateOfBirth,
    bloodType,
    contactNumber,
    email,
    province,
    district,
    status,
  });

  //pass the variables to database
  newAddSeeker
    .save()
    .then(() => {
      res.json("Registered succecfull");
    })
    .catch((err) => {
      console.log(err); //catch errors
    });
});

module.exports = router;
