/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch all todos from the server
  async function getData() {
    try {
      const response = await fetch("https://sum-server.100xdevs.com/todos");
      const data = await response.json();

      // Extract the todos array from the fetched data
      if (data && Array.isArray(data.todos)) {
        setTodos(data.todos);
      } else {
        console.error('Fetched data is not in expected format:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Delete a todo
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Fetch todos when the component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <button onClick={getData}>Get Data</button>
        <div>
          {todos.map(todo => (
            <Todo key={todo.id} id={todo.id} title={todo.title} onDelete={deleteTodo} />
          ))}
        </div>
      </div>
    </>
  );
}

function Todo(props) {
  // Add a delete button here so user can delete a TODO
  return (
    <div>
      {props.title}
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default App;
