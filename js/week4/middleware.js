const express = require("express")
const app = express()

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    } else{
        res.json({
            msg:"Sorry your are not of age yet"
        })
    }
}

app.use(isOldEnoughMiddleware); // it only triggers for the routes mentioned below it *order matters*

app.get("/ride1",(req,res)=>{
   
        res.json({
            msg: "You have successfully riden a ride 1"
        })
})

app.get("/ride2",(req,res)=>{
        res.json({
            msg: "You have successfully riden a ride 2"
        })
})

app.listen(3000)


// if the middleware is being accessed in every route then write app.use(middleware) on top of those routes