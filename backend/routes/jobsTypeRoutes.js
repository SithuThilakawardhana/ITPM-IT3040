const express = require("express");
const router = express.Router();
const { createJobType,allJobsType,updateJobType,deleteJobType } = require ('../controllers/jobsTypeController');
const { isAuthenticated, isAdmin } = require("../middleware/auth");

// jobs type routes

//router /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createJobType)

//router /api/type/jobs
router.get('/type/jobs', allJobsType)

//router /api/type/update/:type_id
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType)

//router /api/type/delete
router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType)

module.exports = router;