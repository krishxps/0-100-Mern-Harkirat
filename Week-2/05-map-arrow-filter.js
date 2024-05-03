function sum(a,b){
    return a+b;
}

// Arrow Function
const sum2 = (a,b) => {
    return a+b;
}

// Map Function
// Given an arry, give me back a new arry in which every value is multipllied by 2
const arr = [1,2,3,4,5];
const mapp = arr.map(function(value){
    return value*2;
})
console.log("Map:",mapp);
// Filter
const a = arr.filter(n =>{
    if(n % 2 == 0){
        return true;
    }
    return false;
})
console.log("Filter:",a);