const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const bloodVolumesSchema = new Schema({  //assign values to schema

    Ap: {
        type: String,
        required: true,
    },
    Am: {
        type: String,
        required: true,
    },
    Bp: {
        type: String,
        required: true,
    },
    Bm: {
        type: String,
        required: true,
    },
    ABp: {
        type: String,
        required: true,
    },
    ABm: {
        type: String,
        required: true,
    },
    Op: {
        type: String,
        required: true,
    },
    Om: {
        type: String,
        required: true,
    }

})

const bloodVolumes = mongoose.model("bloodVolumes", bloodVolumesSchema); // passing two parameters, tablename(document) & schemaname

module.exports = bloodVolumes; //export add blood samples