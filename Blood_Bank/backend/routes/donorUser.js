// const { json } = require('express');
// const express = require ('express');
// const Users = require('../models/donorUser');
// const router = express.Router();


// //Save Users 

// router.post('/users/save',(req,res)=>{

//     let newUsers = new Users(req.body);

//     newUsers.save((err)=>{

//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:"User saved Successfully"
//         });
//     });
// });

// //get User

// router.get('/users',(req,res)=>{
//        Users.find().exec((err,Users) =>{
//         if(err){
//             return res.status(400).json({
//               error:err
//             });
//         }
            
//         return res.status(200).json({
//             sucuss:true,
//             existingUsers:Users
//         });

//        });
// });

// //get one user

// router.get('/users/getOne/:id',(req,res)=>{

//     Users.findById().exec((err,Users)=>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             existingUsers:Users
//         });
//     });
// });

// //GET ONE BLOOD SAMPLE By ID (http://localhost:8080/addbloodsamples/get/<userID>)

// // router.route("/getOne/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
// //     let sampleId = req.params.id; //fetch the id parameter in url

// //     const pack = await addBloodSamples.findById(sampleId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
// //     .then((bloodSample) => {
// //         res.status(200).send({status : "sample fetched", bloodSample}) //if find success, display success message
// //     }).catch((err) => {
// //         console.log(err);
// //         res.status(500).send({status: "Error with find data"}); //if not display error message
// //     })

// // })

// //update

// router.put('/users/update/:id',(req,res)=>{

//     Users.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }

//             return res.status(200).json({
//                 success:"Update Succesfully"
//             });
//         }
//     );
// });


// //delete Users
// 0/
// router.delete('/users/delete/:id',(req,res) =>{
//     Users.findByIdAndRemove(req.params.id).exec((err,deleteUsers) =>{

//         if(err) return res.status(400).json({
//             message:"Delete Unsuccesfull",err
//         });

//         return res.json({
//             message:"Delete Succesfull",deleteUsers
//         });
//     });
// });


// module.exports = router;

const router = require('express').Router();
let User = require('../models/donorUser');

//get all users

router.route('/get').get((req,res)=>{
    User.find()
    .then(users=> res.json(users))
    .catch(err =>res.status(400).json('Error: '+ err));

});

// add user

router.route('/add').post((req,res)=>{
    
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

    newUser.save()
    .then((result)=> res.json(result))
    .catch(err=>res.status(400).json('Error: '+ err));
});

// get one user
router.route('/get/:id').get((req,res) =>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error: '+err));
});

// delete a user

router.route('/delete/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(user =>res.json('User deleted!!'))
    .catch(err =>res.status(400).json('Error: '+ err));
});

//update a user

router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(user =>{
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.nic = req.body.nic;
        user.email = req.body.email;
        user.dateOfBirth = Date.parse(req.body.dateOfBirth);
        user.bloodtype = req.body.bloodtype;
        user.contactnumber = req.body.contactnumber;
        user.address = req.body.address;

        user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;