const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const InsBloodReqSchema = new Schema({



})

const empinsbloodreq = mongoose.model("InsBloodRequest", InsBloodReqSchema); // passing two parameters, tablename(document) & schemaname

module.exports = empinsbloodreq;