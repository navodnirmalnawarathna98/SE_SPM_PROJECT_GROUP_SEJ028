const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const InsBloodReqSchema = new Schema({

    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    contact_no : {
        type: Number,
        required: true,
    },
    blood_group : {
        type: String,
        required: true,
    },
    blood_amount : {
        type: Number,
        required: true,
    },
    due_date : {
        type: Date,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }

})

const insreq = mongoose.model("InsRequest", InsBloodReqSchema); // passing two parameters, tablename(document) & schemaname

module.exports = insreq;