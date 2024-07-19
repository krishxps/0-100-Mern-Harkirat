/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './App.css';
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

// ---------------------------------------------------------------------------
// Data fetching custom hook 
// ---------------------------------------------------------------------------

// Data fetching hooks
// import { useEffect, useState } from 'react'
// import axios from 'axios'

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

// ---------------------------------------------------------------------------
// Data fetching custom hook with timeout
// ---------------------------------------------------------------------------

// function useTodos(n) {
//   const [loading, setLoading] = useState(true);
//   const [todos, setTodos] = useState([])

//   function getData() {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//   }

//   useEffect(() => {
//     const value = setInterval(() => {
//       getData();
//     }, n * 1000)
//     getData();

//     return () => clearInterval(value);
//   }, [n])

//   return {
//     todos: todos,
//     loading: loading
//   };
// }

// function App() {
//   const { todos, loading } = useTodos(5);

//   if (loading) {
//     return <div>
//       Loading...
//     </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App;

// -----------------------------------------------------------------------------------------
// Hook for checking if the user is online
// -----------------------------------------------------------------------------------------

// import { useEffect, useState } from 'react'

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => setIsOnline(true));
//     window.addEventListener('offline', () => setIsOnline(false));
//   }, [])

//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline(5);

//   return (
//     <>
//       {isOnline ? "You are online yay!" : "You are offline :("}
//     </>
//   )
// }

// export default App

// -----------------------------------------------------------------------------------------
// Hook for mouse position
// -----------------------------------------------------------------------------------------
// import { useEffect, useState } from 'react'

// const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// export default App

// -----------------------------------------------------------------------------------------
// Hook for debouncing
// -----------------------------------------------------------------------------------------
import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 5000); // 500 milliseconds debounce delay

  useEffect(() => {
    if (debouncedValue) {
      console.log(debouncedValue);
    }
  }, [debouncedValue]);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
