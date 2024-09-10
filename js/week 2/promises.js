// let p = new Promise(random);

// function random(resolve, reject){
//     setTimeout(resolve,3000)
// }

// p.then(()=>{
//     console.log("promise consumed");
// })

// p.catch((err)=>{
//     console.log(err);
// })


// Promisifed version of fs.readfile


const fs = require("fs")

// function readTheFile(resolve, reject){
//     fs.readFile("as.txt","utf-8",(err,data)=>{
//         if(data){
//             resolve(data);
//         } else {
//             reject(err)
//         }
//     })
// }

// const p = new Promise(readTheFile)

// p.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// // Promisifed version of fs.writeFile

// const promiseTwo = new Promise(writeFile)

// function writeFile(){
//     const data = fs.writeFile("a.txt","Hi my name is karan,",onDone)
// }

// function onDone(err, data){
//         if(err){
//             throw err
//         } else{
//             console.log("the file is successfully overwrite");
//         }
// }

// promiseTwo.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// //Promisifed version of cleanFile

// const promiseThree = new Promise(readFile);

// function readFile(resolve, reject){
//     fs.readFile("a.txt", "utf-8",(err,data)=>{
//         if(err){
//             console.log("something went wrong");
//         }
//         console.log("file read done");
//         console.log(data);

//         const cleanedContent = data.replace(/\s+/g,' ').trim()

//         fs.writeFile("a.txt", cleanedContent,(err)=>{
//             if(err){
//                 console.log("something is wrong");
//             }
//             console.log("file written successfully");
//             if(resolve){
//                 resolve(cleanedContent)
//             } else{
//                 reject();
//             }
//         })

//     })

// }

// promiseThree.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// promisified verions of setTimeout

// function setTimoutPromisified(duration){
//     return new Promise(function (resolve,reject){
//         setTimeout(resolve,duration)
//     })
// }

// function callback(){
//     console.log("5 seconds have passed");
// }

// setTimoutPromisified(5).then(callback)

// write a code
// logs hi after 1 Second
// logs hello after 3 Second after step1 
// logs hello there 5 Second after step2 


// function call(){
//     console.log("hi");
//     setTimeout(call1,3000)
    
// }
// function call1(){
//     console.log("hello");
//     setTimeout(call2,5000)
// }
// function call2(){
//     console.log("hello there");
    
// }

// function get(){
//     setTimeout(call,1000)
// }
// get()

// Promisified version of above code

function setTimoutPromisified(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,duration)
    })
}

function callback(){
    console.log("hi");
    return setTimoutPromisified(3000).then(callback1)
}
function callback1(){
    console.log("hello");
    return setTimoutPromisified(5000).then(callback2)
}
function callback2(){
    console.log("hello there");
    
}

setTimoutPromisified(1000).then(callback)

