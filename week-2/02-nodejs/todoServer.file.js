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
  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require('fs');
  
  const app = express();
  
  app.use(bodyParser.json());

  //let todoList;
  //
  // function readData(filename){
  //   return new Promise(function(resolve){
  //     fs.readFile(filename, 'utf8', (err, data) => {
  //       //console.log(data);
  //       resolve(JSON.parse(data));
  //     });
  //   });
  // }

  // app.get("/todos", function(req, res){
  //     readData("todos.json").then((data) => {        
  //       todoList=data
  //       console.log(todoList);
  //       res.json(todoList);
  //     });
     
  //     //res.json(todoList);
  // });

  app.get("/todos", function(req, res){
        fs.readFile("todos.json", (err, data)=>{
          if(err) throw err;
          res.status(200).send(JSON.parse(data));
     });
  });

  app.get("/todos/:id", function(req, res){    
    fs.readFile("todos.json", (err, data)=>{
      const index = parseInt(req.params.id);
      if(err) throw err;
      
      let filteredItem = JSON.parse(data).filter((item) => {
        return item["id"] == index;
      });      

      if(filteredItem.length === 0){
        res.status(404).send("Item not found");
      }
      else{
        res.status(200).json(filteredItem);
      }
   });
  });


  app.post("/todos", function(req, res){
        fs.readFile("todos.json", (err, data) => {
          if(err) throw err;
          let newItem = req.body;
          let newItemId = Math.floor((Math.random() * 100) + 5);

          newItem["id"] = newItemId;
          data = JSON.parse(data);
          data.push(newItem);

          fs.writeFile("todos.json", JSON.stringify(data), ()=>{
            res.status(200).json({"id": newItemId});
          });

        })
  
  });
  
  app.put("/todos", function(req, res){
  
  
  });
  
  app.delete("/todos", function(req, res){
  
  
  });

  app.listen(4000);
  
  module.exports = app;