const fs = require('fs');
// filesystem

// This is async functions so It will be delegated to other
fs.readFile("../Notes/week1.txt",'utf-8',function(err,data){
    console.log(data);
})

// This will print first
console.log("FILE DATA: ");