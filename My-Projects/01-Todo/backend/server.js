// ------------------------------------------------------------------------------------
// Imports and Libraries
// ------------------------------------------------------------------------------------
const express = require('express');
const {userSchema ,todoSchema} = require('./Database/zod');
const {users} = require('./Database/userSchema');
const {todos} = require('./Database/todoSchema');
const jwt = require('jsonwebtoken');
const {authenticateToken,adminMiddleware} = require('./Middleware/middleware.js')
const {jwtToken} = require('../../../database');
    
// ------------------------------------------------------------------------------------
// Middlewares and Constants
// ------------------------------------------------------------------------------------
const app = express();
app.use(express.json());
const port = 8080;

// ------------------------------------------------------------------------------------
// User Routes
// ------------------------------------------------------------------------------------
app.post('/register',async(req,res)=>{
    const registerData = req.body;

    if(!registerData.name || !registerData.username || !registerData.password){
        return res.json({Message:"Provide Name , username and Password"}).status(422);
    }

    const newUser = userSchema.safeParse(registerData);
    
    if(!newUser.success){
        return res.json({Message:"Give data as String"}).status(422);
    }

    try{
        const createdUser = await users.create(newUser.data);
        console.log('User Registered Successfully:',createdUser);
        return res.status(200).json({ Message: "User registered successfully", user: createdUser });
    }catch(err){
        console.error("Error Creating User:",err);
        return res.status(500).json({ Message: "Failed to register user" });
    }
});

app.post('/login',async(req,res)=>{
    const bodyData = req.body;
    if(!bodyData.username || !bodyData.password){
        return res.json({Message:"Provide username and Password"}).status(422);
    }
    try{
        const User = await users.findOne({username: bodyData.username});

        if(!User || User.password != bodyData.password){
            return res.json({Message:"Wrong Username or Password"}).status(422);
        }

        const token = jwt.sign({_id :User._id},jwtToken);
        console.log(token);
        res.json({token: token}).status(200);
    }catch(err){
        console.error("Error during login:", error);
        return res.status(500).json({ Message: "Failed to login" });
    }
});

// ------------------------------------------------------------------------------------
// Todo Routes
// ------------------------------------------------------------------------------------
app.post('/add-todo',authenticateToken,async(req,res)=>{
    const bodyData = req.body;
    const {deadline} = req.body;
    if(!bodyData.title || !bodyData.description){
        return res.json({Message:"Provide Title and Description"}).status(422);
    }

    try{
        const newTodo = todoSchema.safeParse(bodyData);

        if(!newTodo.success){
            return res.json({Message:"Provide data as String"}).status(422);
        }

        newTodo.data.user = req.user._id;
        newTodo.data.completed = false;
        newTodo.data.createdAt = Date.now();

        const createdTodo = await todos.create(newTodo.data);
        console.log('Todo Created Successfully:',createdTodo);
        
        return res.status(200).json({ Message: "Todo created successfully", todo: createdTodo });
    }catch(err){
        console.error("Error Creating Todo:",err);
        return res.status(500).json({ Message: "Failed to create todo" });
    }
});

app.post('/todo',authenticateToken, async(req,res)=>{
    try{
        const todosData = await todos.find({user:req.user._id});
        return res.status(200).json({ Message: "Todos fetched successfully", todos: todosData });
    }catch(err){
        console.error("Error Fetching Todos:",err);
        return res.status(500).json({ Message: "Failed to fetch todos" });
    }
});

app.post('/selectTodo',authenticateToken,async(req,res)=>{
    const id = req.query.id;

    try {
        const todo = await todos.findOne({ _id: id, user: req.user._id });

        if (!todo) {
            return res.status(404).json({ Message: "Todo not found" });
        }
        return res.status(200).json({ Message: "Todo fetched successfully", todo });
    } catch (err) {
        console.error("Error Fetching Todo:", err);
        return res.status(500).json({ Message: "Failed to fetch todo" });
    }
});

app.post('/update',authenticateToken,async(req,res) =>{
    const id = req.query.id;
    const {title,description,completed} = req.body;
    if (!id || (!title && !description && typeof completed !== 'boolean')) {
        return res.status(422).json({ Message: "Provide id and at least one field to update (title, description, or completed)" });
    }
    try{
        const todo = await todos.findOne({ _id: id, user: req.user._id });
        if (!todo) {
            return res.status(404).json({ Message: "Todo not found" });
        }
        if(title) todo.title = title;
        if(description) todo.description = description;
        if (typeof completed === 'boolean') todo.completed = completed;
        
        const updatedTodo = await todo.save();
        console.log('Todo Updated Successfully:', updatedTodo);
        return res.status(200).json({ Message: "Todo updated successfully", todo: updatedTodo });
    }catch(err){
        console.error("Error Updating Todo:", err);
        return res.status(500).json({ Message: "Failed to update todo" });
    }
});

app.post('/delete',authenticateToken,async(req,res)=>{
    const id = req.query.id;
    if(!id){
        return res.status(422).json({ Message: "Provide todo id / Select Todo" });
    }

    try{
        const todo = await todos.findOne({ _id: id, user: req.user._id });
        if(!todo){
            return res.status(404).json({ Message: "Todo not found or does not belong to the user" });
        }
        const deletedTodo = await todos.findByIdAndDelete(id);
        console.log('Todo Deleted Successfully:', deletedTodo);
        return res.status(200).json({ Message: "Todo Deleted successfully", todo: deletedTodo });
    }catch(err){
        console.log(err);
        return res.status(500).json({ Message: "Failed to delete todo" , Error: err});
    }
});
// ------------------------------------------------------------------------------------
// Admin Routes
// ------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------
// 404
// ------------------------------------------------------------------------------------
app.get('/*', (req,res) =>{
    res.status(400).json({message:"on /* Route so choose relevant route"});
});

// ------------------------------------------------------------------------------------
// Server
// ------------------------------------------------------------------------------------
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));