const mongoose = require('mongoose');
const {bammm} = require('../../../../database');
mongoose.connect(bammm).then(console.log("Databse Connected From todoSchema"));

const task = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    createdAt: Date,
    deadline: Date
});

const todo = mongoose.model('todos',task);

module.exports = {
    todo
}