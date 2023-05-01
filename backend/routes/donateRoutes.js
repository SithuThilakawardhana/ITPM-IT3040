const express = require('express');
const router = express.Router();
const { createdonate, singledonate, updatedonate, showdonate } = require('../controllers/donateController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');



//donate routes

// /api/donate/create
router.post('/donate/create', isAuthenticated, isAdmin, createdonate);
// /api/donate/id
router.get('/donate/:id', singledonate);
// /api/donate/update/donate_id
router.put('/donate/update/:donate_id', isAuthenticated, isAdmin, updatedonate);
// /api/donate/show
router.get('/donate/show', showdonate);



module.exports = router;