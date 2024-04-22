const fs = require('fs');

//Wrapper / Syntactical Sugar for Sync Functions
function krishCanCall(){
    return new Promise(function(resolve){
        fs.readFile("../Notes/week1.txt",'utf-8',function(err,data){
            //Callback Function
            resolve(data);
        })
    })
}
// Function which will get CallBack
function onGo(data){
    console.log(data);
}

krishCanCall().then(onGo);

// This will print first
console.log("FILE DATA: ");