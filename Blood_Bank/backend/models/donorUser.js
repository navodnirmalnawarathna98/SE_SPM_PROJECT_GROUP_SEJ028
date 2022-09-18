
const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({

     firstName:{
        type:String,
        required:true
     },

     lastName:{
        type:String,
        required:true
     },

     nic:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     dateOfBirth:{
        type:Date,
        required:true
     },
     password:{
        type:String
     },
     bloodtype:{
      type:String
     },
     contactnumber:{
      type:String
     },
     address:{
      type:String
     }

});

module.exports  = mongoose.model('User',UserSchema);