// ------------------------------------------------------------------------------------
// Imports and Libraries
// ------------------------------------------------------------------------------------
const express = require('express');
const {userSchema} = require('./Database/zod');
const {users} = require('./Database/userSchema');
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


app.get('/*', (req,res) =>{
    res.status(400).json({message:"on /* Route so choose relevant route"});
})

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));