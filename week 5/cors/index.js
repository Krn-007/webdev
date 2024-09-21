// Cors - Cross Origin Resource Sharing
/* it is a security feature implemented by the web browsers that control
how resource on web server can be requested from another domain. it's a crucial 
mechanism for managing cross-origin requests and ensuring secure interactions
between different origins at the web
*/
const express = require("express")
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors());

app.post("/sum",(req,res)=>{
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(req.name);
    res.json({
        answer: a + b
    })
})

app.listen(3001)