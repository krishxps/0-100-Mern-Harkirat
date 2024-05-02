const express = require('express');
const app = express();
const port = 3000;

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
    res.send(`User ${user[0].name} has ${kidneyCount} kidneys and ${healhtyKidneys} healthy kidneys`);
});

app.post('/', (req, res) => {
    // Handle POST request
    res.send('Received a POST request.');
});

app.put('/', (req, res) => {
    // Handle PUT request
    res.send('Received a PUT request.');
});

app.delete('/', (req, res) => {
    // Handle DELETE request
    res.send('Received a DELETE request.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
