import './App.css';
import { useEffect, useState, Component } from 'react';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(r => !r);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
  }, []);

  return (
    <div>
      {showComponent && <MyComponent />}
    </div>
  );
}

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

class MyComponent extends Component {
  componentDidMount() {
    console.error('Component mounted');
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log('Component will unmount');
  }

  render() {
    return <div>My Component</div>;
  }
}
export default App;
