const donate = require('../models/donateModel');
const donateType = require('../models/donateTypeModel');
const errorResponse = require('../utils/errorResponse');

//create job
exports.createdonate = async (req, res, next) => {
    try {
        const donate = await donate.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            donateType: req.body.donateType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            donate
        })
    } catch (error) {
        next(error);
    }
}


//single donation
exports.singledonate = async (req, res, next) => {
    try {
        const donate = await donate.findById(req.params.id);
        res.status(200).json({
            success: true,
            donate
        })
    } catch (error) {
        next(error);
    }
}


//update donation by id.
exports.updatedonate = async (req, res, next) => {
    try {
        const donate = await donate.findByIdAndUpdate(req.params.donate_id, req.body, { new: true }).populate('donateType', 'donateTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            success: true,
            donate
        })
    } catch (error) {
        next(error);
    }
}


//update donations by id.
exports.showdonate = async (req, res, next) => {

    //enable search 
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    // filter donations by category ids
    let ids = [];
    const donateTypeCategory = await donateType.find({}, { _id: 1 });
    donateTypeCategory.forEach(cat => {
        ids.push(cat._id);
    })

    let cat = req.query.cat;
    let categ = cat !== '' ? cat : ids;


    //donataionns by location
    let locations = [];
    const donateByLocation = await donate.find({}, { location: 1 });
    donateByLocation.forEach(val => {
        locations.push(val.location);
    });
    let setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    let locationFilter = location !== '' ? location : setUniqueLocation;


    //enable pagination
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await donate.find({ ...keyword, donateType: categ, location: locationFilter }).countDocuments();

    try {
        const donate = await donate.find({ ...keyword, donateType: categ, location: locationFilter }).sort({ createdAt: -1 }).populate('donateType', 'donateTypeName').populate('user', 'firstName').skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            donate,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation

        })
    } catch (error) {
        next(error);
    }
}




