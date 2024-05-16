const express = require('express');
const app = express();
const port = 3000;

function isOldEnoughMiddleware(age){
    if(age < 18){
        return true;
    }
    return false;
}

app.get('/', (req, res) => {
    if(isOldEnoughMiddleware(req.query.age)){
        res.json({ msg: 'You have successfully ridden the ride' });
    }else{
        res.json({ msg: 'You are not old enough' });
    }
});

app.listen(port, () => console.log(`server started on port http://localhost:${port}`))