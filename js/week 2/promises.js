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


const fs= require("fs")

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

const promiseThree = new Promise(readFile);

function readFile(resolve, reject){
    fs.readFile("a.txt", "utf-8",(err,data)=>{
        if(err){
            console.log("something went wrong");
        }
        console.log("file read done");
        console.log(data);

        const cleanedContent = data.replace(/\s+/g,' ').trim()

        fs.writeFile("a.txt", cleanedContent,(err)=>{
            if(err){
                console.log("something is wrong");
            }
            console.log("file written successfully");
            if(resolve){
                resolve(cleanedContent)
            } else{
                reject();
            }
        })
        
    })
    
}

promiseThree.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})