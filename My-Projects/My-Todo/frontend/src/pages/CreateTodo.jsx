import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createTodo } from '../services/todoService';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const { auth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo(auth, { title, description, deadline });
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default CreateTodo;
