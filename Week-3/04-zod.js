const express = require('express');
const app = express();

const zod = require('zod');
const port = 3000;

app.use(express.json());

// Describing structure of input
const input = zod.array(zod.number());

app.post('/', (req, res) => {
    const kidney = req.body.kidney;
    
    //will check if input is valid
    const response = input.safeParse(kidney);
    res.send({
        response
    })
});

//global catches
app.use((err, req, res, next) => {
    res.status(500).json({msg:'Internal server error'});
});

app.listen(port, () => console.log(`server started on port ${port}`))