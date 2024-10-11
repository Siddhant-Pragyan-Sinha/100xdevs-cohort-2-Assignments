//Middleware, ZOD(TypeScript-first schema validation with static type inference)
const z= require("zod")
const express = require("express");

const app = express();
z.string().email().endsWith("@google.com")

const middlewares = [express.json(), userValidator, kidneyValidator]

app.get("/", ...middlewares, function(req, res){
  console.log(next);
  res.json({
    msg: "Ranjana Billionare"
  })
})

app.user(function(err, req, res, next){
  res.send({
    msg: "internal error"
  })
})

app.listen(3000);




// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');

// const app = express();
// let errorCount = 0;

// // You have been given an express server which has a few endpoints.
// // Your task is to
// // 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// // 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

// app.get('/user', function(req, res) {
//   throw new Error("User not found");
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// app.get('/errorCount', function(req, res) {
//   res.status(200).json({ errorCount });
// });

// module.exports = app;
