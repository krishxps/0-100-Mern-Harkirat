const express = require('express');
const app = express();

const zod = require('zod');
const port = 3000;

app.use(express.json());

function middleware(req, res, next) {
    fetch().then((data) => {
        next();
    })
}

app.post('/', (req, res) => {
    const kidney = req.body.kidney;
    const kidneylen = kidney.length;
    res.send('kidney length is ' + kidneylen );
});

//global catches
app.use((err, req, res, next) => {
    res.status(500).json({msg:'Internal server error'});
});

app.listen(port, () => console.log(`server started on port ${port}`))