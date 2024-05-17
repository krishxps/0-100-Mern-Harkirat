// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Import database configuration
const { bammm } = require('./database.js');

// Initialize the app and configure middleware
const app = express();
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect(bammm, { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Task model schema
const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    completed: { type: Boolean, default: false },
    description: String,
    deadline: Date
});

const Task = mongoose.model('Task', taskSchema);

// Define the port
const port = 3000;
let errorCount = 0;

// Define routes
app.get('/home', (req, res) => {
    res.send('Go to /todo to see tasks. Go to /add to add tasks');
});

app.get('/todo', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/add', async (req, res) => {
    const newTask = new Task({
        name: req.body.name,
        completed: req.body.completed,
        description: req.body.description,
        deadline: req.body.deadline
    });

    if (!newTask.name) {
        return res.status(400).send('Task name is required');
    }

    try {
        await newTask.save();
        res.send('Task added successfully');
        console.log(newTask)
    } catch (err) {
        errorCount++;
        console.log('Error adding task:', err);
        res.status(500).send('Error adding task');
    }
});

app.post('/update', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.body.id, {
            $set: {
                name: req.body.name,
                completed: req.body.completed,
                description: req.body.description,
                deadline: req.body.deadline
            }
        }, { new: true, useFindAndModify: false });

        if (!updatedTask) {
            return res.status(404).send('Task not found');
        }
        res.send('Task updated successfully');
        console.log("Task updated: ",updatedTask);
    } catch (err) {
        console.log('Error updating task:', err);
        res.status(500).send(err);
    }
});

app.post('/remove', async (req, res) => {
    // TODO Actual one lol
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    console.log('ErrorCount:', ++errorCount);
    res.status(500).json({ msg: 'Internal server error' });
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
