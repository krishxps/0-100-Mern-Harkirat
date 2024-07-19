/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import './App.css';
// import { useEffect, useState, Component } from 'react';

// function App() {
//   const [showComponent, setShowComponent] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowComponent(r => !r);
//     }, 5000);

//     return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
//   }, []);

//   return (
//     <div>
//       {showComponent && <MyComponent />}
//     </div>
//   );
// }

// function MyComponent() {
//   useEffect(() => {
//     // This will run when the component mounts
//     console.error('Component mounted');

//     // This will run when the component unmounts
//     return () => {
//       console.log('Component will unmount');
//     };
//   }, []);

//   return <div>My Component</div>;
// }

// class MyComponent extends Component {
//   componentDidMount() {
//     console.error('Component mounted');
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log('Component will unmount');
//   }

//   render() {
//     return <div>My Component</div>;
//   }
// }


// Data fetching hooks
import { useEffect, useState } from 'react'
import axios from 'axios'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }
function useTodos() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
  }, [])

  return {
    todos: todos,
    loading: loading
  };
}

function App() {
  const { todos, loading } = useTodos();

  if (loading) {
    return <div>
      Loading...
    </div>
  }
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}
function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App;