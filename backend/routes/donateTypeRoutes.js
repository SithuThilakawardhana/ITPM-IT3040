const express = require('express');
const router = express.Router();
const { createdonateType, alldonateType,updatedonateType,deletedonateType } = require('../controllers/donateTypeController');
const { isAuthenticated ,isAdmin} = require('../middleware/auth');



//donate type routes

// /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createdonateType)
// /api/type/donate
router.get('/type/donate', alldonateType)
// /api/type/update/type_id
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updatedonateType)
// /api/type/delete/type_id
router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deletedonateType)




module.exports = router;