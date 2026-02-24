const express = require('express');


const app = express();

app.use("/home", (req, res) =>{
    res.send("Welcome to home page")
    });


app.listen(3001, ()=> {
    console.log("App started")
});

///Ashish Vishwakarmaaa/....