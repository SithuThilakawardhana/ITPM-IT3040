const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser,createUserdonateHistory } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


//user routes

// /api/allusers  (add)
router.get('/allusers', isAuthenticated, allUsers);

// /api/allusers (admin)
router.get('/allusersa', isAuthenticated, isAdmin, allUsers);

// /api/user/id (single user display)
router.get('/user/:id', isAuthenticated, singleUser);

// /api/user/edit/id 
router.put('/user/edit/:id', isAuthenticated, editUser);

// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);

// /api/user/delete/id (normal user delete)
router.delete('/user/delete/:id', isAuthenticated, deleteUser);

// /api/user/donatehistory
router.post('/user/donatehistory', isAuthenticated, createUserdonateHistory);


module.exports = router;