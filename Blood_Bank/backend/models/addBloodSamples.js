const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const addBloodSamplesSchema = new Schema({  //assign values to schema

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    bloodType: {
        type: String,
        required: true,
    },
    bloodAmount: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
})

const addBloodSamples = mongoose.model("addBloodSamples", addBloodSamplesSchema);
 // passing two parameters, tablename(document) & schemaname

module.exports = addBloodSamples; //export add blood samples