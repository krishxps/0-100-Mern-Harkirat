// http://latentflip.com/loupe/ 
// Website to see working of web ans sync stuff


// Promise Example

// Making Promise Function - It will take time in argument For SetTimeOut
function promiseWorking(time){
    // Making promise instance 
    let p = new Promise(
        //Resolve is function name for sync function
        resolve=>{
            // SetTimeOut for sync and working
            setTimeout(function(){
                //Function 
                resolve();
            },time);
    });
    return p;
}

function check(){
    console.log("check");
}

const promiseWork = promiseWorking(1000);
//Promise { <pending> }
console.log(promiseWork);

promiseWork.then(check);