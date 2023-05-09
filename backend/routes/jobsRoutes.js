const express = require("express");
const router = express.Router();
const { createJob,singleJob,updateJob, showJobs } = require("../controllers/jobsController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

// jobs type routes

//router /api/job/create
router.post('/job/create', isAuthenticated, isAdmin, createJob);
//router /api/job/id
router.get('/job/:id', singleJob);
//router /api/job/update/:job_id
router.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);
//router /api/jobs/show
router.get('/jobs/show',showJobs);


module.exports = router;