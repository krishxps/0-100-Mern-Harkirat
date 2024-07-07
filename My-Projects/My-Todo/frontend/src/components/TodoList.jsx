import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getTodos } from '../services/todoService';

const TodoList = () => {
  const { auth } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (auth) {
      getTodos(auth).then(setTodos);
    }
  }, [auth]);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
