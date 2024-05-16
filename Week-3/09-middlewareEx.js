const express = require('express');
const app = express();
const port = 3000;

/////////////////////////////////// Normal Way ///////////////////////////////////
function isOldEnoughFunction(age){
    if(age < 18){
        return true;
    }
    return false;
}
// it will be middleware for all functions bellow this I can do app.use(isOldEnoughMiddleware)
app.use(express.json());

app.get('/', (req, res) => {
    if(isOldEnoughFunction(req.query.age)){
        console.log('You have successfully ridden the ride with age:', req.query.age);
        res.json({ msg: 'You have successfully ridden the ride' });
    }else{
        console.log('You are old so req hit with age:', req.query.age);
        res.status(403).json({ msg: 'You are old' });
    }
});

/////////////////////////////////// Next Way ///////////////////////////////////
function isOldEnoughMiddleware(req, res, next){
    if(isOldEnoughFunction(req.query.age)){
        console.log('You have successfully ridden the ride with age:', req.query.age);
        next();
    }else{
        console.log('You are old enough req hit with age:', req.query.age);
        res.status(403).json({ msg: 'You are old' });
    }
}
app.get('/ride', isOldEnoughMiddleware, (req, res) => {
    res.json({ msg: 'You have successfully ridden the ride' });
});

app.listen(port, () => console.log(`server started on port http://localhost:${port}`))