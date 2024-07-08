// ------------------------------------------------------------------------------------
// Imports and Libraries
// ------------------------------------------------------------------------------------
const express = require('express');
const {userSchema ,todoSchema} = require('./Database/zod');
const {users} = require('./Database/userSchema');
const {todos} = require('./Database/todoSchema');
const jwt = require('jsonwebtoken');
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
app.post('/addtodo',async(req,res)=>{
    const token = req.body.token;
    const bodyData = req.body;
    
    if(!token){
        return res.json({Message:"Please Provide Token"}).status(422);
    }
    
    if(!bodyData.title || !bodyData.description){
        return res.json({Message:"Provide Title and Description"}).status(422);
    }

    try{
        const decoded = jwt.verify(token,jwtToken);
        const newTodo = todoSchema.safeParse(bodyData);

        if(!newTodo.success){
            return res.json({Message:"Provide data as String"}).status(422);
        }

        newTodo.data.user = decoded._id;

        const createdTodo = await todos.create(newTodo.data);
        console.log('Todo Created Successfully:',createdTodo);
        
        return res.status(200).json({ Message: "Todo created successfully", todo: createdTodo });
    }catch(err){
        console.error("Error Creating Todo:",err);
        return res.status(500).json({ Message: "Failed to create todo" });
    }
});

app.post('/todo',async(req,res)=>{

    const token = req.body.token;    
    if(!token){
        return res.json({Message:"Please Provide Token"}).status(422);
    }

    try{
        const decoded = jwt.verify(token,jwtToken);
        const todosData = await todos.find({user:decoded._id});
        
        return res.status(200).json({ Message: "Todos fetched successfully", todos: todosData });
    }catch(err){
        console.error("Error Fetching Todos:",err);
        return res.status(500).json({ Message: "Failed to fetch todos" });
    }
});

// ------------------------------------------------------------------------------------
// 404
// ------------------------------------------------------------------------------------
app.get('/*', (req,res) =>{
    res.status(400).json({message:"on /* Route so choose relevant route"});
})

// ------------------------------------------------------------------------------------
// Server
// ------------------------------------------------------------------------------------
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));