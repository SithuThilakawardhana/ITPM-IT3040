
//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const donateSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'title name is required'],
        maxlength: 70,
    },

    Description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
       
    },

    Salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required'],
       
    },

    Location: {
        type: String,
        trim: true,
        required: [true, 'Location is required'],
       
    },

    
    available: {
        type: Boolean,
        default : true
    },
   
    donateType: {
        type: ObjectId,
        ref: "donateType",
        required : true
    },

    user: {
        type: ObjectId,
        ref: "User",
        required : true
    },
   

}, { timestamps: true })


module.exports = mongoose.model("donate", donateSchema);