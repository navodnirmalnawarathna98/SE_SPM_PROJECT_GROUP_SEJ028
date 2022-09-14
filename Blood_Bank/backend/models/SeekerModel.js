const mongoose = require("mongoose"); // import mongoose package

const Schema = mongoose.Schema; // create schema

const addSeekerSchema = new Schema({
  //assign values to schema

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  nicNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
});

const addSeekerModel = mongoose.model("seekerList", addSeekerSchema); // passing two parameters, tablename(document) & schemaname

module.exports = addSeekerModel; //export add blood samples
