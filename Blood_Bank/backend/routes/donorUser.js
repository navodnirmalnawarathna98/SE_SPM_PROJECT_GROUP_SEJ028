const router = require("express").Router();
let User = require("../models/donorUser");

//get all users

router.route("/get").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add user

router.route("/add").post((req, res) => {
  const firstName = req.body.fname;
  const lastName = req.body.lName;
  const nic = req.body.nic;
  const email = req.body.email;
  const dateOfBirth = Date.parse(req.body.dob);
  const password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    nic,
    email,
    dateOfBirth,
    password,
  });

  newUser
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get one user
router.route("/get/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete a user

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.json("User deleted!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update a user

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.nic = req.body.nic;
      user.email = req.body.email;
      user.dateOfBirth = Date.parse(req.body.dateOfBirth);
      user.bloodtype = req.body.bloodtype;
      user.contactnumber = req.body.contactnumber;
      user.address = req.body.address;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
