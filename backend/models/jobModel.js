const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true, /*remove the space*/
        required : [true, 'Title is required'],
        maxlength: 70,
    },
    description: {
        type: String,
        trim: true, /*remove the space*/
        required : [true, 'Description is required'],
    },
    salary: {
        type: String,
        trim: true, /*remove the space*/
        required : [true, 'Salary is required'],
    },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    jobType: {
        type: ObjectId,
        ref: "jobType",
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },

}, {timestamps: true})

module.exports = mongoose.model("Job", jobSchema);
