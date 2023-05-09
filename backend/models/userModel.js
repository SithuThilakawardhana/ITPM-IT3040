const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {ObjectId} = mongoose.Schema;


const jobsHistorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true, /*remove the space*/
        maxlength: 70
    },
    description: {
        type: String,
        trim: true /*remove the space*/
    },
    salary: {
        type: String,
        trim: true
    },
    location: {
        type: String,
    },
    interviewDate: {
        type: String,
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },

}, {timestamps: true})

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true, /*remove the space*/
        required : [true, 'first name is required'],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        required : [true, 'last name is required'],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required : [true, 'email is required'],
        unique: true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            'Please add a valid email'
        ],
    },
    password: {
        type: String,
        trim: true,
        required : [true, 'password is required'],
        minlength: [6, 'password must have at least (6) characters'],
    },

    jobsHistory : [jobsHistorySchema],
    
    role: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

// encrypting password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//  compare user password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

// return a JWT token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET,{
        expiresIn : 3600
    });
}

module.exports = mongoose.model("User", userSchema);