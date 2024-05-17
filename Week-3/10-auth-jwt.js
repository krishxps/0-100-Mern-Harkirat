// json web token
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const port = 3000;
let errorCount = 0;
app.use(express.json());
app.post("/", (req, res) => {
    const { username, password } = req.body;
    if (username === "harkirat" && password === "123") {
        const token = jwt.sign({ username }, jwtPassword);
        res.json({ token });
    } else {
        res.status(401).json({ msg: "Invalid username or password" });
    }
});
app.listen(port, () => console.log(`server started on port ${port}`))