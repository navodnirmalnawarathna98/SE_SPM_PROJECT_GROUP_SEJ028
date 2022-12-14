const router = require("express").Router(); //import router function in express package

let addSeekerModel = require("../models/SeekerModel");

//Add seeker (http://localhost:8070/seeker/add)

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

//Add Blood Samples (http://localhost:8070/seeker/get/:id)

router.route("/get/:id").get(async (req, res) => {
  // get data from frontend via request. async function is used to increase the performance
  let sampleId = req.params.id; //fetch the id parameter in url

  const pack = await addSeekerModel
    .findById(sampleId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then((seekerRecord) => {
      res.status(200).send({ status: "Record fetched", seekerRecord }); //if find success, display success message
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with find data" }); //if not display error message
    });
});

//UPDATE ONE seeker details (http://localhost:8070/seeker/update/<userID>)

router.route("/update/:id").put(async (req, res) => {
  // get data from frontend via request. async function is used to increase the performance
  let userId = req.params.id; //fetch the id parameter in url
  const {
    firstName,
    lastName,
    nicNumber,
    dateOfBirth,
    bloodType,
    province,
    district,
    email,
    contactNumber,
    gender,
    status,
  } = req.body; //fetch data from frontend

  const updateSeeker = {
    //create update object and pass values getting from frontend
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
  };

  const update = await addSeekerModel
    .findByIdAndUpdate(userId, updateSeeker) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then(() => {
      res.status(200).send({ status: "user updated" }); //if update success, display success message
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating profile" }); //if not display error message
    });
});

//delete api and route
//delete seeker profile (http://localhost:8070/seeker/delete/:id)

router.route("/delete/:id").delete(async (req, res) => {
  //get userid from frontend
  let sampleId = req.params.id; // assign userid to variable

  await addSeekerModel
    .findByIdAndDelete(sampleId) //delete data that related to packId
    .then(() => {
      res.status(200).send({ status: "user deleted" }); //display user deleted successfull
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message }); //display error message
    });
});

//seeker login API

router.route("/getSeeker").get((req, res) => {
  const { q } = req.query;

  const keys = ["email"];

  const search = (userSeeker) => {
    return userSeeker.filter((email) =>
      keys.some((key) => email[key].toLowerCase().includes(q))
    );
  };

  addSeekerModel
    .find()
    .then((userSeeker) => {
      res.json(search(userSeeker));
      //res.status(200).send(search(userSeeker));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
