const express = require("express")
const app = express();


const users   = [{
    name: "karanbeer",
    kidneys: [{
        healthy: false,
    }]
}]

app.use(express.json());

app.get("/",(req,res)=>{
    // write logic
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})
app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})
app.put("/",(req,res)=>{
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
        
    }
    res.json({})
})
app.delete("/",(req,res)=>{
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys
    res.json({
        msg: "done"
    })
})


app.listen(3000);