const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res){
  const username = req.headers.username;
  const password = req.headers.password
;

const kidneyId= req.query.kidneyId;

  if(!(username === "ranjana" && password === "papa"))
  if(username != "ranjana" || password != "papa"){
    res.status(400).json({
      msg: "Your kidney is fine!"
    })
    return 
  }

  if(kidneyId ==1 || kidneyId ==2){
    res.json({
      msg: "Your kidney is fine!"
    })
  }
});

