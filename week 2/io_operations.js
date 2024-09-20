const fs = require("fs");


function print(err, data){
    if(err){
        console.log("File not Found");
    } else{
        console.log(data);
    }
}

const contents = fs.readFile("a.txt", "utf-8", print)

const data = fs.readFile("b.txt", "utf-8", print)

