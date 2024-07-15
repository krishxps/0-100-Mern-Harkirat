// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();

// --------------------------------------------------------------------------------
// Middlewares
// --------------------------------------------------------------------------------
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

// --------------------------------------------------------------------------------
// Server
// --------------------------------------------------------------------------------
app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000/api/v1");
})