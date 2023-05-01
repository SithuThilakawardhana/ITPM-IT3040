const donateType = require('../models/donateTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create donation category
exports.createdonateType = async (req, res, next) => {
    try {
        const donateT = await donateType.create({
            donateTypeName: req.body.donateTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            donateT
        })
    } catch (error) {
        next(error);
    }
}


//all donations category
exports.alldonateType = async (req, res, next) => {
    try {
        const donateT = await donateType.find();
        res.status(200).json({
            success: true,
            donateT
        })
    } catch (error) {
        next(error);
    }
}



