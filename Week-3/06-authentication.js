// always add Bearer before token in header
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  return ALL_USERS.find(user => user.username === username && user.password === password) !== undefined;
}

app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory db",
    });
  }

  const token = jwt.sign({ username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", function (req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      msg: "No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const filteredUsers = ALL_USERS.filter(user => user.username !== username);
    
    res.json({ users: filteredUsers });
  } catch (err) {
    res.status(401).json({
      msg: "Invalid token",
    });
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ msg: "Internal server error" });
});

app.listen(8080, () => console.log("Server started on port 8080"));
