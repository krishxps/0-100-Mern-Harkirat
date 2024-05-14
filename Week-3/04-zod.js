const express = require('express');
const app = express();

const zod = require('zod');
const port = 3000;

app.use(express.json());

let errorCount = 0;
let responseCount = 0;
let validResponse = 0;
let invalidResponse = 0;

// Describing structure of input
const input = zod.array(zod.number());

// Object type safety description
const schema = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("CA")),
    kidneys : zod.array(zod.number())
});

app.post('/', (req, res) => {
    const kidney = req.body.kidney;

    //will check if input is valid
    const response = input.safeParse(kidney);
    
    if(response.success){
        validResponse++;
    }else{
        invalidResponse++;
    }

    console.log({
        response: response,
        responseCount: ++responseCount,
        validResponse: validResponse,
        invalidResponse: invalidResponse
    });

    res.send({
        response
    })
});

app.post('/test',(req,res) =>{
    const response = schema.safeParse(req.body);

    //will check if input is valid
    if(response.success){
        validResponse++;
    }else{
        invalidResponse++;
    }
    
    console.log({
        response: response,
        responseCount: ++responseCount,
        validResponse: validResponse,
        invalidResponse: invalidResponse
    });

    res.send({
        response
    })
});

//global catches
app.use((err, req, res, next) => {
    console.log({
        Error: err,
        ErrorCount : ++errorCount
    });
    res.status(500).json({msg:'Internal server error'});
});

app.listen(port, () => console.log(`server started on port ${port}`))