import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    desc: "biceps 8-9"
  },])

  const onClickHandler = () => {
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    setTodos([...todos, {title:title, desc:desc}]);
  }

  return (
    <>
      <div>
        <input type="text" placeholder='title' id="title"></input> <br></br>
        <input type="text" placeholder='description' id="desc"></input> <br></br>
        <button onClick={onClickHandler}>
          Click here
        </button>
        {todos.map((value) => {
          return <DispTodo title={value.title} desc={value.desc}></DispTodo>
        })}
        {/* <DispTodo title={todos[0].title} desc={todos[0].desc}></DispTodo> */}
      </div>
    </>
  )
}

let DispTodo = (props) => {
  return(
    <div>
      <div>{props.title}</div>
      <div>{props.desc}</div>
    </div>
  )
}

export default App
