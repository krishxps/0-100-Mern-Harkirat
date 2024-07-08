const mongoose = require('mongoose');
const {bammm} = require('../../../../database');
mongoose.connect(bammm).then(console.log("Databse Connected From todoSchema"));

const task = mongoose.Schema({
    user: String,
    title: String,
    description: String,
    completed: Boolean,
    createdAt: Date,
    deadline: Date
});

const todos = mongoose.model('todos',task);

module.exports = {
    todos
}