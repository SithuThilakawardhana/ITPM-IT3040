const express = require('express');
const router = express.Router();
const { createdonateType, alldonateType } = require('../controllers/donateTypeController');
const { isAuthenticated } = require('../middleware/auth');



//donate type routes

// /api/type/create
router.post('/type/create', isAuthenticated, createdonateType)
// /api/type/donate
router.get('/type/donate', alldonateType)





module.exports = router;