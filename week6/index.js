// const express = require('express');
// const jwt = require("jsonwebtoken")
// const JWT_SECRET = "randomkaran"

// const app = express();
// app.use(express.json())

// const users = []

// // here using generate token function to manually generate the tokens 
// // should return a random long string 
// // function generateToken(){
// //     let options = ['a','b','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']

// //     let token = ""
// //     for (let i = 0; i < 32; i++) {
// //         token += options[Math.floor(Math.random() * options.length)];
        
// //     }
// //     return token;
// // }



// app.post("/signup",(req,res)=>{
//     //signup
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username: username,
//         password: password
//     })

//     res.json({
//         msg: "hey you are signed up successfully"
//     })
//     console.log(users);
// })
// app.post("/signin",(req,res)=>{
//     //signin

//     const username = req.body.username;
//     const password = req.body.password;

//     const foundUser = users.find(function (u){
//         if(u.username == username && u.password == password){
//             return true;
//         } else{
//             return false;
//         }

//     })

//     if(foundUser){
//         const token = jwt.sign({
//             username:username
//         }, JWT_SECRET); // convert their username over to a jwt

//         // foundUser.token = token;
//         res.json({
//             token: token
//         })
//     } else{
//         res.status(403).send({
//             message: "invalid username or password"
//         })
//     }
//     console.log(users);

// })

// app.get("/me", (req,res)=>{
//     const token = req.headers.token // jwt
//     const decodedInfo = jwt.verify(token, JWT_SECRET); // {username:"karan@gamil.com"}
//     const username = decodedInfo.username;
//     let foundUser = users.find(function findToken(u){
//         if(u.username == username){
//             return true;
//         } else{
//             return false;
//         }
//     })
//     if(foundUser){
//         res.json({
//             username: foundUser.username,
//             password: foundUser.password
//         })
//     } else{
//         res.json({
//             message: "token invalid"
//         })
//     }
        
// })


// app.listen(3000)

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomKaran";

app.use(express.json());

let users = []

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg:"you successfully signedup"
    })

    console.log(users);
})
app.post("/signin", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        } else{
            return false;
        }
    })
    if(foundUser){
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);

        res.header("jwt", token);

        res.header("random", "harkirat");

        res.json({
            token: token
        })
    } else{
        res.status(403).send({
            message: "invalid username or password"
        })
    }    
})

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        // req = {status, headers...., username, password, userFirstName, random; ":123123"}
        req.username = decodedData.username
        next()
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}
app.get("/me", auth,(req,res)=>{
    
    let foundUser = users.find(function(u){
        if(u.username == req.username){
            return true;
        } else{
            return false;
        }
    })

    if(foundUser){
        res.send({
            username: foundUser.username,
            password: foundUser.password
        })
    } else{
        res.json({
            msg: "invalid token"
        })
    }
})


app.listen(3000)