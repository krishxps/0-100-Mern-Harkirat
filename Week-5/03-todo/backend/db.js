const mongoose = require('mongoose');
const {bammm} = require('../../../database');

mongoose.connect(bammm);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}