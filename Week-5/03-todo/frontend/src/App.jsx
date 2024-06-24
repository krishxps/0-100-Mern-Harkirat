import { useState } from 'react'
import './App.css'
import {CreateTodo} from './components/createTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos,setTodo] = useState([]);
  fetch("http://localhost:8080/todos")
  .then(async (res) => {
    const data = await res.json()
    setTodo(data.todos);
  })
  return (
    <div >
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
