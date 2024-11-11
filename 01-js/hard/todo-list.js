/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  //  Defined a class named todo
  #todolist=[];
  //  Defining a todo list private property to hold the lists of todos as an empty array.
  #validIndex(idx){
    //  Private method to check if a given index is valid
    return idx < this.#todolist.length && idx >= 0;
    //  Returns true if the index is within the bounds of the array ,false otherwise.
  }
  add(todo){
    //  Public method to add a new todo item to the list
    this.#todolist.push(todo);
    //  Add the new todo to the end of the todo list
  }
  remove(indexOfTodo){
    //  Public method to remove a todo item at a specific Index
    this.#validIndex(indexOfTodo) && this.#todolist.splice(indexOfTodo,1);
    //  Remove the todo item if the index is valid
  }
  update(indexOfTodo,updatedTodo){
    //  Public method to update a todo item at a specified index.
    this.#validIndex(indexOfTodo) && this.#todolist.splice(indexOfTodo,1,updatedTodo);
    //  Checking if the index is valid and replacing the todo item with the updated todo if index is valid
  }
  getAll(){
    //  Public method to get all todo item
    return this.#todolist
    //  Return the entire list of todo items 
  }
  get(indexOfTodo){
    //  Public method to get a specific todo item by index
    return this.#validIndex(indexOfTodo)?this.#todolist[indexOfTodo]:null;
    //  Return the todo item if the index is valid otherwise return null
  }
  clear(){
    //  Public method to clear all todo items
    this.#todolist=[];
    //  Set the todo list to an empty array
  }
}

module.exports = Todo;
