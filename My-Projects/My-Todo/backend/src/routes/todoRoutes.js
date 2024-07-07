const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');
const { checkAuth } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/todos', checkAuth, createTodo);
router.get('/todos', checkAuth, getTodos);
router.put('/todos/:id', checkAuth, updateTodo);
router.delete('/todos/:id', checkAuth, deleteTodo);

module.exports = router;
