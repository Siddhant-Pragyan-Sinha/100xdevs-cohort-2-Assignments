"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Todo({ todo }) {
    return (<div>
      <div>Title: {todo.title}</div>
      <div>Description: {todo.description}</div>
      <div>Completed: {todo.isDone ? "Yes" : "No"}</div>
    </div>);
}
function App() {
    const todo = {
        title: "title1",
        description: "description1",
        isDone: false,
    };
    return (<div>
      <Todo todo={todo}/>
    </div>);
}
exports.default = App;
