const express = require('express')

const app = express();


app.get("/hello", 
    (req, res, next) => {
    res.send("welcome to api world");
    next();
}),

app.get("/hello", 
    (req, res, next) => {
    res.send("2nd routttt");
    console.log("1st")
}),
app.listen(3000, () => {
    console.log("server start at port no. 3000")
})