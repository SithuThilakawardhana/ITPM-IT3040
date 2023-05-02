const donateType = require('../models/donateTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create donate category
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


//all donate category
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

//update donate type
exports.updatedonateType = async (req, res, next) => {
    try {
        const donateT = await donateType.findByIdAndUpdate(req.params.type_id, req.body, { new: true });
        res.status(200).json({
            success: true,
            donateT
        })
    } catch (error) {
        next(error);
    }
}


//delete donate type
exports.deletedonateType = async (req, res, next) => {
    try {
        const donateT = await donateType.findByIdAndRemove(req.params.type_id);
        res.status(200).json({
            success: true,
            message: "donate type deleted"
        })
    } catch (error) {
        next(new ErrorResponse("server error", 500));
    }
}











