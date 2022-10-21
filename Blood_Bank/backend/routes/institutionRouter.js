const router = require("express").Router();

let insbloodreq = require("../models/InsBloodReq");


// add blood Request route
router.route("/addbloodreq").post((req, res) => {//get data from frontend via request

    // get request body data and assining them to variables
    const name = req.body.name;
    const email = req.body.email;
    const contact_no = Number(req.body.contact_no);
    const blood_group = req.body.blood_group;
    const blood_amount = Number(req.body.blood_amount);
    const due_date = req.body.due_date;
    const description = req.body.description;

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
    Newinsbloodreq.save().then(() => {
        res.json("New Blood Request save succesfully")
    }).catch((err) => {
        console.log(err);
    })
})

//view blood request
router.route("/viewBlood").get((req, res) => {

    const { q } = req.query;

    const keys = ["name"];

    const search = (bloodreq) => {
        return bloodreq.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };


    insbloodreq.find().then((bloodreq) => {
        res.json(search(bloodreq))
    }).catch((err) => {
        console.log(err)
    })
})

//Update Blood Request
//async is promis ekak iwra unama thwa ekak 
//params is parameeter
router.route("/updateBloodReq/:id").put(async (req, res) => {
    let BloodreqId = req.params.id;

    // Destructure
    const {

        name,
        email,
        contact_no,
        blood_group,
        blood_amount,
        due_date,
        description

    } = req.body;

    const updateReq = {
        name,
        email,
        contact_no,
        blood_group,
        blood_amount,
        due_date,
        description

    }

    //first para user id
    //secn para update kranna ona object ekaa
    //async 
    const update = await insbloodreq.findByIdAndUpdate(BloodreqId, updateReq)
        .then(() => {
            res.status(200).send({ Status: "Blood Req Update" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with update data", error: err.message });
        })

})

//get one employee data
router.route("/getBloodReq/:id").get(async (req, res) => {
    let bloodreqId = req.params.id;
    const reqblood = await insbloodreq.findById(bloodreqId)
        .then((insbloodreq) => {
            res.status(200).send({ status: "user selected", insbloodreq })
        }).catch((err) => {
            res.status(500).send({ status: "Error with user selected", error: err.message });
        })
})

//delete blood request
router.route("/deleteReq/:id").delete(async (req, res) => {
    let reqId = req.params.id;
    await insbloodreq.findByIdAndDelete(reqId).then(() => {
        res.status(200).send({ status: "Request deleted" })
    }).catch((err) => {
        res.status(500).send({ status: "Error with delete Request", error: err.message });
    })
})


module.exports = router;