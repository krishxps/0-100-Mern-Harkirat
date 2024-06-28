import { useState } from 'react'
import './App.css'
import {CreateTodo} from './components/createTodo'
import { Todos } from './components/Todos'
import { useEffect } from 'react';
function App() {
  const [todos,setTodo] = useState([]);  
  useEffect(()=>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const data = await res.json()
        setTodo(data.todos);
      });
    }, 5 * 1000);
  },[]);

  return (
    <div >
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}
export default App
