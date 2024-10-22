import { useState } from 'react'

let cntr = 0;

function App() {
  const [todos, setTodo] = useState([{title:"title1", desc: "desc1"}, {title:"title2", desc: "desc2"},{title:"title3", desc: "desc3"}]);

  function addItem(){
    setTodo([...todos, {title:"newTitle", desc: "newDesc"}])
  }

  return (
    <div>
    <button onClick={addItem}>Add todo</button>
    {todos.map(function(todo){
      return <Todo key={cntr+=1} title={todo.title} desc={todo.desc}></Todo>
    })}
    </div>
  )
}

function Todo({title, desc}){
  return(
  <div>
  <br></br>
  <div> {title}</div>
  <div> {desc}</div>
  </div>
  )
}

export default App
