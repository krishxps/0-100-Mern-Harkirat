const express = require('express');
const { register, login, deleteUser } = require('../controllers/userController');
const { checkAuth, checkAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/delete-user/:id', checkAuth, checkAdmin, deleteUser);

module.exports = router;
