const router = require("express").Router(); //import router function in express package

let SeekerBloodrequestModel = require("../models/seekerBloodRequestModel");

//Add Blood Samples (http://localhost:8070/SeekerBloodRequest/add)

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const bloodType = req.body.bloodType;
  const province = req.body.province;
  const district = req.body.district;
  const contactNumber = Number(req.body.contactNumber);
  const email = req.body.email;
  const description = req.body.description;

  const newBloodRequest = new SeekerBloodrequestModel({
    name,
    bloodType,
    province,
    district,
    contactNumber,
    email,
    description,
  });

  newBloodRequest
    .save()
    .then(() => {
      res.json("Blood request created succecfully");
    })
    .catch((err) => {
      console.log(err); //catch errors
    });
});

module.exports = router;
