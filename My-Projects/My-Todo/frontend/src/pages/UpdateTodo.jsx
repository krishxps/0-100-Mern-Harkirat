import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateTodo, getTodos } from '../services/todoService';
import { useParams } from 'react-router-dom';

const UpdateTodo = () => {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      const todos = await getTodos(auth);
      const todo = todos.find(todo => todo._id === id);
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
        setDeadline(todo.deadline);
        setCompleted(todo.completed);
      }
    };

    fetchTodo();
  }, [auth, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTodo(auth, id, { title, description, deadline, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
      </label>
      <button type="submit">Update Todo</button>
    </form>
  );
};

export default UpdateTodo;
