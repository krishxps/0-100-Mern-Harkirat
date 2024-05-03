const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const user = [
    {
        name: 'John',
        kidneys: [
            { healthy: false },
            { healthy: true }
        ]
    }
];

console.log(user);

app.get('/', (req, res) => {
    let kidneys = user[0].kidneys; 
    let kidneyCount = kidneys.length;
    let healhtyKidneys = 0;
    for(let i = 0; i < kidneyCount; i++){
        if(kidneys[i].healthy){
            healhtyKidneys++;
        }
    }
    res.json({
        name: user[0].name,
        kidneyCount : kidneyCount,
        healhtyKidneys : healhtyKidneys
    });

    console.log("Get Req Hit");
});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message: "Done!!"
    });

    console.log('Post Req Hit');
});

app.put('/', (req, res) => {
    for(let i = 0; i <user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy = true;
    }
    console.log('Put req Hit');
    res.json({
        "msg": "Done"
    })
});

app.delete('/', (req, res) => {
    let userKideny = [];
    for(let i = 0; i <user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            userKideny.push({healthy: true});
        } 
    }
    user[0].kidneys = userKideny;
    console.log('Delete req Hit');
    res.json({
        "MSG":'Received a DELETE request.'}
    );
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
