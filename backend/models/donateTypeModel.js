
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const donateTypeSchema = new mongoose.Schema({

    donateTypeName: {
        type: String,
        trim: true,
        required: [true, 'donate category is required'],
        maxlength: 70,
    },

    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },



}, { timestamps: true })

module.exports = mongoose.model("donateType", donateTypeSchema);