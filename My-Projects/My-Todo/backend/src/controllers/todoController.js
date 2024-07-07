const Todo = require('../models/todo');

const createTodo = async (req, res) => {
  const { title, description, deadline } = req.body;
  const todo = new Todo({
    title,
    description,
    deadline,
  });
  await todo.save();
  res.status(201).json(todo);
};

const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed, deadline } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { title, description, completed, deadline }, { new: true });
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted successfully' });
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
