const mongoose = require("mongoose");
const {bamma} = require("../../../../../database");

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    created: { type: Date, default: Date.now },
    deadline: { type: Date },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo