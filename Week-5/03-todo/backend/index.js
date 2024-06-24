const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types.js');
const { todo } = require("./db.js");
const cors = require('cors');
const port = 8080;

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "TODO CREATED!!!"
    })
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put('/completed', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "TODO MARKED AS COMPLETED!!!"
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
