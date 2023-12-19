/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const todos = require("./todos.json");
const app = express();

app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  res.status(200).send({ todos });
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) return res.status(404).send("Not Found");

  res.status(200).send(todo);
});

app.post("/todos", (req, res) => {
  const body = req.body;

  let id;
  let index = 0;
  do {
    id = Math.floor(Math.random() * 1000000) % 100000;
    index = todos.indexOf((t) => t.id === id);
  } while (index !== -1);

  body.id = id;
  todos.push(body);

  fs.writeFileSync("todos.json", JSON.stringify(todos));

  res.status(201).send(id.toString());
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) return res.status(404).send("Not Found");

  let todo = todos[index];
  todo.title = body?.title || todo.title;
  todo.description = body?.description || todo.description;

  todos.splice(index, 1, todo);

  fs.writeFileSync("todos.json", JSON.stringify(todos));

  res.status(200).send(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) return res.status(404).send("Not Found");

  todos.splice(index, 1);
  fs.writeFileSync("todos.json", JSON.stringify(todos));

  res.status(200).send();
});

app.get("*", (req, res) => {
  res.status(404).send();
});

module.exports = app;

// app.listen(3000, () => {
//   console.log("Listening on port 3000....");
// });
