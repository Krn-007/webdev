const express = require("express")
const app = express();

// using query parameters which is like https://localhost:3000/sum?a=1&b=2

// app.get("/sum",(req,res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         msg: a + b
//     })
// })
// app.get("/multiply",(req,res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         msg: a * b
//     })
// })
// app.get("/subtract",(req,res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         msg: a - b
//     })
// })
// app.get("/divide",(req,res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         msg: a / b
//     })
// })

// user can dynamically give the parameter as routes for eg; https://localhost:3000/sum/a/b

// app.get("/sum/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.json({
//         msg: a + b
//     })
// })
// app.get("/multiply/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.json({
//         msg: a * b
//     })
// })
// app.get("/subtract/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.json({
//         msg: a - b
//     })
// })
// app.get("/divide/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.json({
//         msg: a / b
//     })
// })

// adding middleware in this code
/*
what are middleware :- MW refers to the function that have access to the request object (req),
response object (res) and the next function in application's request-response cycle
MW can perform variety of task
1. Modifying the request or response object
2. Ending the request response cycle
3. Calling the next middleware function in the stack.
bigger usecase of middleware is authentication refers to step 2

express is nothing but a chain of middleware
*/

// let requestCount = 0;

// app.use(requestIncreaser);

// function requestIncreaser(req,res,next){
//     requestCount = requestCount +1;
//     req.name = "Karan"
//     console.log(`total number of request are ${requestCount}`);
//     next();
// }

// app.get("/sum/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     console.log(req.name);
//     res.json({
//         msg: a + b
//     })
// })

// app.get("/sum/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.json({
//         msg: a + b
//     })
// })

// Assignment on middleware

// let requestCount = 0;

// app.use(middleware);

// function middleware(req,res,next){
//     console.log(`Method is ${req.method}`);
//     console.log(`Url is ${req.url}`);
//     console.log(new Date());

//     next();
// }

// app.get("/sum/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     console.log(req.name);
//     res.json({
//         msg: a + b
//     })
// })

// app.get("/multiply/:a/:b",(req,res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.json({
//         msg: a + b
//     })
// })

//Commanlly  used middleware 1. express.json()
// in express if you want to send JSON data,
// you need to first parse the json data which express.json() do

app.use(express.json())

app.post("/sum",(req,res)=>{
    console.log(req.body);
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    console.log(req.name);
    res.json({
        msg: a + b
    })
})




app.listen(3000)