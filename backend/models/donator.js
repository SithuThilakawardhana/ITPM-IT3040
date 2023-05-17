const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	
    name: String,
    address: String,
    email: { type: String, unique: true },
    phone: String,
    food: String,
    stationary: String,
    money: String,
    donateType: String,
});

DonationScehma.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "70d",
	});
	return token;
};

const donator = mongoose.model("donator", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label(" Name"),
		address: Joi.string().required().label("Address"),
		email: Joi.string().email().required().label("Email"),
		phone: Joi.string().required().label("phone number"),
        food: Joi.string().required().label("food"),
        stationary: Joi.string().required().label("stationary"),
        money: Joi.string().required().label("money"),
        donateType: Joi.string().required().label("donation type"),
	});
	return schema.validate(data);
};

module.exports = { donator, validate };