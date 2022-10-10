const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const InsRegFormSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    contact_no: {
        type: String,
        required: true,
    },
    institution_type: {
        type: Number,
        required: true,
    },
    reg_date: {
        type: Date,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    distric: {
        type: String,
        required: true,
    }

})

const insreg = mongoose.model("InsRegForm", InsRegFormSchema); // passing two parameters, tablename(document) & schemaname

module.exports = insreg;