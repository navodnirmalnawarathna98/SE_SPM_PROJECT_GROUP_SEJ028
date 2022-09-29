const mongoose = require("mongoose"); // import mongoose package

const Schema = mongoose.Schema; // create schema

const addBloodRequestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bloodType: {
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
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const SeekerBloodrequestModel = mongoose.model(
  "seekerBloodRequestList",
  addBloodRequestSchema
); // passing two parameters, tablename(document) & schemaname

module.exports = SeekerBloodrequestModel; //export Seeker Blood request Model
